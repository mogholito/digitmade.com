# Project 263800 - Moderna Spikevax Email Campaign

## Overview
This project contains an email template for Moderna Spikevax, a COVID-19 vaccine.

## Project Structure
```
263800/
├── index.mjml          # MJML source file
├── index.html          # Compiled HTML email
├── img/                # Image assets folder
└── README.md           # This file
```


## Development

### Compiling MJML to HTML
To compile the MJML file to HTML:

```bash
# Using MJML CLI
mjml index.mjml -o index.html

# Or with watch mode for development
mjml -w index.mjml -o index.html
```

### Requirements
- MJML CLI installed (`npm install -g mjml`)
- Web server for previewing (optional)

## Client Information
- **Client**: VIDAL France
- **Product**: Moderna Spikevax
- **Campaign Type**: Healthcare Professional Communication
- **Language**: French

## Notes
- The HTML is accessible at: `https://www.digitmade.com/projects/263800/`
- All images are hosted on: `https://www.digitmade.com/projects/263800/img/`

To push the project:
```bash
cd "/Users/minhtvu/DigitMade/DM website/digitmade.com" && git add projects/263800/ && git commit -m "Add projects/263800" && git push origin main

git add projects/263800/index.mjml projects/263800/index.html projects/263800/README.md && git commit -m "Debuging and compiling email" && git push origin main && git status --short --branch && git log -1 --oneline --decorate
```

## Last Updated
September 18, 2026
