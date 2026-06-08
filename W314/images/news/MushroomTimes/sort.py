import os
import re

PREFIX = "images/news"
NEWS = "Mushroom Times"

CURRENT_FOLDER = os.path.basename(os.getcwd())
pattern = re.compile(r"(\d{1,2})-(\d{1,2})-(\d{2,4})(?:_(\d+))?\.png$")


def parse_file(filename):
    match = pattern.match(filename)
    if not match:
        return None

    month, day, year, suffix = match.groups()

    year = int(year)
    if year < 100:
        year += 2000

    suffix = int(suffix) if suffix else 0

    return (year, int(month), int(day), suffix, filename)


def load_files():
    items = []
    files = os.listdir(".")

    for f in files:
        parsed = parse_file(f)
        if parsed:
            items.append(parsed)

    return sorted(items)


def group_by_day(items):
    grouped = {}

    for year, month, day, suffix, filename in items:
        key = (year, month, day)

        if key not in grouped:
            grouped[key] = []

        grouped[key].append((suffix, filename))
    for key in grouped:
        grouped[key].sort()

    return grouped


def print_output(grouped):
    first = True

    for (year, month, day) in sorted(grouped.keys(), reverse=True):
        images = grouped[(year, month, day)]

        if not first:
            print(",")

        first = False

        print("{")
        print(f'    "category": "news",')
        print(f'    "title": "{NEWS} {month}/{day}/{year}",')
        print(f'    "sub": "{NEWS}",')
        print(f'    "viewerTitle": "{NEWS} {month}-{day}-{year}",')
        print(f'    "images": [')

        for i, (_, filename) in enumerate(images):
            comma = "," if i < len(images) - 1 else ""
            print(f'        "{PREFIX}/{CURRENT_FOLDER}/{filename}"{comma}')

        print("    ],")
        print(f'    "content": "The {NEWS} newspaper for {month}/{day}/{year} covers: ."')

        print("}")


if __name__ == "__main__":
    items = load_files()
    grouped = group_by_day(items)
    print_output(grouped)

    input("\nPress Enter to exit...")