#!/usr/bin/env python
# /// script
# requires-python = ">=3.10"
# ///
"""Add a stable `id` slug to every entry in _data/videos.yml.

The id mirrors Jekyll's `slugify` filter applied to the title, so it matches the
anchors already used on old-videos.md. Entries that already have an id are left
alone, so this is safe to re-run after adding new films.
"""

import re
import sys
from pathlib import Path

TITLE_PREFIX = "- title: "

# Same film, catalogued twice (NARA 88166); keep the ids distinct.
MANUAL_IDS = {
    "Industrial applications of nuclear explosives": (
        "industrial-applications-of-nuclear-explosives-iaea"
    ),
}


def slugify(title):
    """Mirror Jekyll's Utils.slugify in its default mode."""
    slug = "".join(char if char.isalnum() else "-" for char in title)
    slug = re.sub(r"-+", "-", slug)
    return slug.removeprefix("-").removesuffix("-").lower()


def main():
    path = Path(__file__).resolve().parent.parent / "_data" / "videos.yml"
    lines = path.read_text().splitlines(keepends=True)

    out, seen, added = [], set(), 0
    for line, following in zip(lines, lines[1:] + [""]):
        out.append(line)
        if not line.startswith(TITLE_PREFIX):
            continue
        if following.startswith("  id: "):
            seen.add(following.removeprefix("  id: ").strip())
            continue

        title = line.removeprefix(TITLE_PREFIX).strip().strip("\"'")
        slug = MANUAL_IDS.get(title) or slugify(title)
        if slug in seen:
            sys.exit(
                f"Duplicate id {slug!r} from title {title!r}; add a MANUAL_IDS entry."
            )
        seen.add(slug)
        out.append(f"  id: {slug}\n")
        added += 1

    path.write_text("".join(out))
    print(f"Added {added} ids ({len(seen)} entries have one).")


if __name__ == "__main__":
    main()
