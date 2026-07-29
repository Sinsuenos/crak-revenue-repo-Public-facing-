#!/usr/bin/env python3
"""Extract all offer slugs, titles, categories for audit."""
import re

with open('/home/z/my-project/crak-revenue-repo-Public-facing-/data/offers.ts') as f:
    content = f.read()

# Find all slug values
slugs = re.findall(r"slug:\s*'([^']+)'", content)
titles = re.findall(r"title:\s*'([^']+)'", content)
cats = re.findall(r"category:\s*'([^']+)'", content)
captions = re.findall(r"caption:\s*'([^']+)'", content)
captions_es = re.findall(r"captionEs:\s*'([^']+)'", content)

print(f"Total offers: {len(slugs)}\n")
for i, s in enumerate(slugs):
    print(f"{i+1:2d}. [{cats[i]:15s}] {s:40s} {titles[i]}")
    # Check for issues
    if i < len(captions_es):
        es = captions_es[i]
        if any(c in es for c in '¿¡'):
            print(f"    *** INVERTED PUNCT: {es}")
