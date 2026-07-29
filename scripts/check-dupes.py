#!/usr/bin/env python3
"""Check offers for duplicates to remove - verify they share the same brand."""
import re

with open('/home/z/my-project/crak-revenue-repo-Public-facing-/data/offers.ts') as f:
    content = f.read()

# Find all offer blocks and extract key fields
offer_blocks = content.split("// ──")
for block in offer_blocks[1:]:  # skip first split
    slug_m = re.search(r"slug:\s*'([^']+)'", block)
    title_m = re.search(r"title:\s*'([^']+)'", block)
    url_m = re.search(r"affiliateUrl:\s*'([^']+)'", block)
    if slug_m and title_m and url_m:
        slug = slug_m.group(1)
        title = title_m.group(1)
        url = url_m.group(1)
        if any(k in slug for k in ['get-harder', 'jerkmate', 'vicky', 'milan', 'dondi', 'date-player', 'suenos', 'x-trans', 'xgamehub']):
            print(f"slug={slug}, title={title}")
            print(f"  url={url[:80]}...")
            print()
