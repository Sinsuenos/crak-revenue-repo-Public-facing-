#!/usr/bin/env python3
"""Reorder offer sections to match user's specified category order."""
import re

with open('/home/z/my-project/crak-revenue-repo-Public-facing-/data/offers.ts', 'r') as f:
    content = f.read()

# Extract type declaration
type_match = re.search(r'(export type Offer = \{[^}]+\})', content)
type_decl = type_match.group(1) if type_match else ''

# Split into the type + array start, sections, and array end
array_start = "export const offers: Offer[] = ["
parts = content.split("// ──")
# First part has everything before sections
header = parts[0]
# Each remaining part is a section
sections = []
for part in parts[1:]:
    section_title = part.split('\n')[0].strip()
    sections.append((section_title, "// ──" + part))

# Target order
order = {
    'AI Companions': 3,
    'Dating': 1,
    'Live Cams': 2,
    'Fansites': 4,
    'Paysites': 5,
    'Gay': 6,
    'Games': 7,
    'Transgender': 8,
    'Special Offers': 9,
}

def get_order(section):
    title, body = section
    for key, rank in order.items():
        if key in title:
            return rank
    return 99

# Sort sections by target order
sorted_sections = sorted(sections, key=get_order)

# Rebuild
output = header
for title, body in sorted_sections:
    output += body

# Clean up any double blank lines
output = re.sub(r'\n{3,}', '\n\n', output)

with open('/home/z/my-project/crak-revenue-repo-Public-facing-/data/offers.ts', 'w') as f:
    f.write(output)

# Verify
final_sections = re.findall(r'// ── ([^─]+) ──', output)
print("Section order:")
for i, s in enumerate(final_sections):
    print(f"  {i+1}. {s.strip()}")

# Count
slugs = re.findall(r"slug:\s*'([^']+)'", output)
print(f"\nTotal offers: {len(slugs)}")
