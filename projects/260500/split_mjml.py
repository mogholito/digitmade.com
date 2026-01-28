#!/usr/bin/env python3
"""
Split the massive mj-text warnings section into multiple mj-sections
for better Outlook 2021+ width handling
"""

import re

# Read the file
with open('index.mjml', 'r', encoding='utf-8') as f:
    content = f.read()

# Define the break points for splitting
breaks = [
    # After intro paragraph about monitoring
    ("28 à 68 jours.", " <br><strong>Hépatotoxicité</strong>"),
    # After Hépatotoxicité
    ("Child-Pugh C).", " <strong>Perforations et fistules</strong>"),
    # After Hémorragies
    ("présenter une hémorragie sévère.", " <strong>Anévrismes"),
    # After Hypertension
    ("traitement par CABOMETYX<sup style=\"font-size: 75%; line-height: 0; vertical-align: super; mso-text-raise: 4px;\">®</sup> doit être arrêté.", " <strong>Ostéonécrose</strong>"),
    # After Anomalies biologiques (drug interactions start here)
    ("concomitante d'inhibiteurs de la MRP2 (par ex. ciclosporine, éfavirenz, emtricitabine).", " <br><strong>Excipients"),
]

# The section template for new sections
section_template = '''    </mj-text>
      </mj-column>
    </mj-section>
    <mj-section background-color="#ffffff">
      <mj-column>
        <mj-text mj-class="sml"> '''

# Find the massive mj-text and split it
pattern = r'(<mj-button align="left" background-color="#105E8E"[^>]+>MISES EN GARDE.*?</mj-button>\s*<mj-text mj-class="sml"> )(.*?)(</mj-text>\s*<mj-button align="left" background-color="#105E8E"[^>]+>MISES EN GARDE, PRÉCAUTIONS D\'EMPLOI ET CONDUITE À TENIR</mj-button>)'

match = re.search(pattern, content, re.DOTALL)

if match:
    print("Found the massive text block!")
    prefix = match.group(1)
    massive_text = match.group(2)
    suffix = match.group(3)
    
    # Split the massive text
    result = prefix
    current_pos = 0
    
    for break_text, next_marker in breaks:
        # Find the position after break_text
        idx = massive_text.find(break_text, current_pos)
        if idx != -1:
            end_pos = idx + len(break_text)
            # Add the chunk up to and including the break
            result += massive_text[current_pos:end_pos]
            # Add the section break
            result += section_template
            current_pos = end_pos
            print(f"Split at: ...{break_text}")
    
    # Add the remaining text
    result += massive_text[current_pos:]
    result += suffix
    
    # Replace in content
    new_content = content[:match.start()] + result + content[match.end():]
    
    # Write back
    with open('index.mjml', 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print("\n✓ File updated successfully!")
    print("Run: mjml index.mjml -o index.html")
else:
    print("Could not find the massive text block pattern")
    print("Trying to find alternatives...")
    if '<strong>Comme la plupart' in content:
        print("Found: <strong>Comme la plupart")
    if 'MISES EN GARDE, PRÉCAUTIONS' in content:
        print("Found: MISES EN GARDE, PRÉCAUTIONS")
