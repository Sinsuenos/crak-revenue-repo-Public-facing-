#!/usr/bin/env python3
"""Remove specific offer blocks from offers.ts"""

with open('/home/z/my-project/crak-revenue-repo-Public-facing-/data/offers.ts', 'r') as f:
    content = f.read()

# Slugs to remove
to_remove = ['date-player-two', 'suenos-privados-dating', 'dondi-gf-mobile', 'milan']

import re
for slug in to_remove:
    # Match the entire block: { slug: 'xxx', ... }, including trailing comma
    pattern = r"  \{\s*slug:\s*'" + re.escape(slug) + r"'[^}]+\},?\s*\n"
    matches = list(re.finditer(pattern, content, re.DOTALL))
    if matches:
        print(f"Removing {slug}: found {len(matches)} match(es)")
        for m in reversed(matches):
            content = content[:m.start()] + content[m.end():]
    else:
        print(f"WARNING: {slug} not found!")

# Also update section comments
content = content.replace("// ── Fan Sites ──", "// ── Fansites ──")
content = content.replace("// ── Pay Sites ──", "// ── Paysites ──") 
content = content.replace("// ── Unique Offers ──", "// ── Special Offers ──")

# Reorder sections to match category order: Dating, Live Cams, AI Companions, Fansites, Paysites, Gay, Games, Transgender, Special Offers
sections = re.findall(r"(// ── .*? ──.*?)(?=\n  // ── |\Z)", content, re.DOTALL)
print(f"\nFound {len(sections)} sections:")
for s in sections:
    title = s.split('\n')[0][:60]
    count = s.count("slug:")
    print(f"  {title:60s} ({count} offers)")

with open('/home/z/my-project/crak-revenue-repo-Public-facing-/data/offers.ts', 'w') as f:
    f.write(content)

print(f"\nDone. Saved offers.ts")
