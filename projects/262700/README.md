# Project 262700 - Johnson & Johnson - ERLEADA Email Campaign

## Overview
This project contains an email template for Johnson & Johnson - ERLEADA® , a pharmaceutical product by IPSEN for the treatment of neuroendocrine tumors (NETs).

## Project Structure
```
262700/
├── index.mjml          # MJML source file
├── index.html          # Compiled HTML email
├── img/                # Image assets folder
└── README.md           # This file
```

## Technology
- **MJML Framework**: Responsive email markup language
- **Output**: HTML email compatible with major email clients
- **Styling**: Inline CSS with responsive breakpoints for mobile devices

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

## Features
- Fully responsive design (desktop, tablet, mobile)
- Outlook/MSO compatibility
- Proper superscript rendering across email clients
- Custom bullet styling
- Rounded corner sections
- Horizontal scrolling tables for mobile devices

## Client Information
- **Client**: VIDAL France
- **Product**: Johnson & Johnson - ERLEADA® 
- **Campaign Type**: Healthcare Professional Communication
- **Language**: French

## Notes
- The HTML is accessible at: `https://www.digitmade.com/projects/262700/`
- All images are hosted on: `https://www.digitmade.com/projects/262700/img/`

To push the project:
```bash
cd "/Users/minhtvu/DigitMade/DM website/digitmade.com" && git add projects/262700/ && git commit -m "Update projects/262700 with latest changes" && git push origin main
```

## Last Updated
July 1, 2026
