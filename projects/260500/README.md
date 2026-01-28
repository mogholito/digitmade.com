# Project 260500 - CABOMETYX Email Campaign

## Overview
This project contains an email template for CABOMETYX® (cabozantinib), a pharmaceutical product by IPSEN for the treatment of neuroendocrine tumors (NETs).

## Project Structure
```
260500/
├── index.mjml          # MJML source file
├── index.html          # Compiled HTML email
├── img/                # Image assets folder
│   ├── header.png
│   ├── illust1.png
│   ├── tneep.png
│   ├── tnep.png
│   ├── suivi-median.png
│   ├── hr038.png
│   ├── hr023.png
│   ├── duree-mediane.png
│   ├── duree-mediane-tnep.png
│   ├── tneep-table.png
│   ├── tnep-table.png
│   ├── effets-indesirables-table.png
│   ├── bullet.png
│   ├── footer.png
│   └── btn-*.png       # Button images
└── README.md           # This file
```

## Content
The email template presents clinical data from the CABINET study on CABOMETYX® for treating non-resectable or metastatic neuroendocrine tumors.

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
- **Client**: IPSEN / VIDAL France
- **Product**: CABOMETYX® (cabozantinib)
- **Campaign Type**: Healthcare Professional Communication
- **Language**: French

## Notes
- The HTML is accessible at: `https://www.digitmade.com/projects/260500/`
- All images are hosted on: `https://www.digitmade.com/projects/260500/img/`

To push the project:
```bash
cd "/Users/minht.vu/DigitMade/DM website/digitmade.com" && git add projects/260500/ && git commit -m "Update projects/260500 with latest changes" && git push origin main
```

## Last Updated
January 28, 2026
