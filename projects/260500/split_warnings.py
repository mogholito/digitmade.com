#!/usr/bin/env python3
import re

# Read the file
with open('index.mjml', 'r', encoding='utf-8') as f:
    content = f.read()

# Find and split the massive warning text into smaller sections
# The problem is line 228 contains ALL the warnings in one giant <mj-text>

# Split points based on topic groups:
# 1. Introduction + Hépatotoxicité
# 2. Perforations → Hémorragies  
# 3. Anévrismes → Hypertension
# 4. Ostéonécrose → Anomalies biologiques
# 5. Drug interactions (CYP3A4, P-gp, MRP2) + Excipients

# Search for the exact pattern to split
# Looking for the section that starts with CONTRE-INDICATIONS button and contains the massive text

old_pattern = r'(<mj-button align="left" background-color="#105E8E"[^>]+>MISES EN GARDE, PRÉCAUTIONS D.EMPLOI ET CONDUITE À TENIR</mj-button>\s+<mj-text mj-class="sml"> <strong>Comme la plupart des effets indésirables.*?</mj-text>)'

# Check if we can find it
match = re.search(old_pattern, content, re.DOTALL)
if match:
    print("Found the massive text block")
    print(f"Length: {len(match.group(1))} characters")
    print(f"Starts at position: {match.start()}")
else:
    print("Pattern not found, trying alternative search...")
    # Try finding it by the unique starting text
    if '<strong>Comme la plupart des effets indésirables surviennent' in content:
        print("Found the text with 'Comme la plupart'")
        idx = content.find('<strong>Comme la plupart des effets indésirables surviennent')
        # Show surrounding context
        print(content[idx-100:idx+200])
