#!/usr/bin/env python3
"""Get full details for flagged offers."""
import re

with open('/home/z/my-project/crak-revenue-repo-Public-facing-/data/offers.ts') as f:
    content = f.read()

targets = ['get-harder', 'get-harder-2', 'jerkmate-live', 'jerkmate-pps', 'vicky-milan', 'milan', 
           'dondi-gf-pc', 'dondi-gf-mobile', 'date-player-two', 'suenos-privados-dating', 
           'x-trans-dating', 'xgamehub', 'smoke-and-poke', 'sex-messenger']

offers = re.findall(
    r"slug:\s*'([^']+)'.*?title:\s*'([^']+)'.*?category:\s*'([^']+)'.*?affiliateUrl:\s*'([^']+)'",
    content, re.DOTALL
)

for slug, title, cat, url in offers:
    if slug in targets:
        print(f"slug={slug:35s} title={title:25s} cat={cat}")
        print(f"  url={url[:100]}")
        print()
