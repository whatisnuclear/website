#!/bin/bash

filename="captions.txt"
line_number=0

while IFS= read -r line; do
    ((line_number++))
    formatted=$(printf "%02d" "$line_number")

    exiftool -overwrite_original -P -ImageDescription="$line" hwctr-$formatted.jpg
done < "$filename"
