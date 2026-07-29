#!/usr/bin/env python3
"""Check for inverted punctuation in Spanish marketing copy."""
import re

with open('/home/z/my-project/crak-revenue-repo-Public-facing-/data/offers.ts') as f:
    offers = f.read()

with open('/home/z/my-project/crak-revenue-repo-Public-facing-/lib/i18n.tsx') as f:
    i18n = f.read()

print("=== INVERTED PUNCTUATION IN OFFERS.TS (captionEs) ===")
for m in re.finditer(r"captionEs:\s*'([^']+)'", offers):
    es = m.group(1)
    if any(c in es for c in '¿¡'):
        print(f"  {es}")

print("\n=== INVERTED PUNCTUATION IN I18N.TSX ===")
for m in re.finditer(r"'([^']*¿[^']*|[^']*¡[^']*)'", i18n):
    print(f"  {m.group(1)}")

# Also check for obsolete/misleading titles
print("\n=== POTENTIALLY OBSOLETE/MISLEADING OFFERS ===")
for m in re.finditer(r"slug:\s*'([^']+)'.*?title:\s*'([^']+)'", offers):
    slug, title = m.group(1), m.group(2)
    # Check for known problematic patterns
    if any(kw in slug.lower() for kw in ['date-player', 'suenos-privados', 'x-trans-dating', 'xgamehub', 'smoke-and-poke', 'get-harder-2']):
        print(f"  REVIEW: slug={slug}, title={title}")

# Check for duplicates (same brand, different slugs)
print("\n=== POTENTIAL DUPLICATES ===")
slugs = re.findall(r"slug:\s*'([^']+)'", offers)
titles = re.findall(r"title:\s*'([^']+)'", offers)
from collections import Counter
title_counts = Counter(titles)
for title, count in title_counts.items():
    if count > 1:
        idxs = [i for i, t in enumerate(titles) if t == title]
        slugs_for = [slugs[i] for i in idxs]
        print(f"  Duplicate title '{title}': {slugs_for}")

# Check for duplicate jerkmate
print("\n=== DUPLICATE JERKMATE CHECK ===")
for i, s in enumerate(slugs):
    if 'jerkmate' in s.lower():
        print(f"  #{i+1}: slug={s}, title={titles[i]}")
