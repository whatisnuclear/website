#!/usr/bin/env python
# /// script
# requires-python = ">=3.10"
# dependencies = ["pyyaml", "openpyxl"]
# ///
"""Convert _data/videos.yml to an Excel spreadsheet."""

from pathlib import Path

import openpyxl
import yaml


def main():
    repo_root = Path(__file__).resolve().parent.parent
    videos_path = repo_root / "_data" / "videos.yml"
    output_path = repo_root / "_data" / "videos.xlsx"

    with open(videos_path) as f:
        videos = yaml.safe_load(f)

    wb = openpyxl.Workbook()
    ws = wb.active
    ws.title = "Videos"

    headers = ["title", "naid", "nara_url", "iaea", "date", "length", "color", "description", "notes", "priority", "links"]
    ws.append(headers)

    for col in ws[1]:
        col.font = openpyxl.styles.Font(bold=True)

    for video in videos:
        links = video.get("links") or []
        links_str = "\n".join(f"{l['name']}: {l['url']}" for l in links if l) if links else ""
        description = (video.get("description") or "").strip()
        notes = (video.get("notes") or "").strip() if video.get("notes") else ""

        iaea = (video.get("iaea") or "").strip() if video.get("iaea") else ""

        naid = video.get("naid")
        nara_url = f"https://catalog.archives.gov/id/{naid}" if naid else ""

        ws.append([
            video.get("title"),
            naid,
            nara_url,
            iaea,
            video.get("date"),
            video.get("length"),
            video.get("color"),
            description,
            notes,
            video.get("priority"),
            links_str,
        ])

    # Auto-size columns (approximate)
    for col in ws.columns:
        max_len = max((len(str(cell.value or "")) for cell in col), default=10)
        ws.column_dimensions[col[0].column_letter].width = min(max_len + 2, 60)

    wb.save(output_path)
    print(f"Wrote {len(videos)} videos to {output_path}")


if __name__ == "__main__":
    main()
