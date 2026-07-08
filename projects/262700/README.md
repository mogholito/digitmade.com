# Project 262700 - ERLEADA Email Campaign

## Overview
This project contains the French MJML email template for ERLEADA (apalutamide), built for Johnson & Johnson.

The email highlights the final analysis of the TITAN study, ERLEADA indications, efficacy messaging, safety information, contraindications, precautions, interactions, and prescribing references.

## Project Structure
```
262700/
├── BUM_ERLEADA.pdf     # Source prescribing information/reference PDF
├── index.mjml          # Main MJML source file
├── index.html          # Compiled HTML email
├── index0.mjml         # Alternate/archived MJML version kept with the project
├── img/                # Campaign image assets
└── README.md           # This file
```

## Technology
- **MJML**: Responsive email markup language
- **Output**: HTML email for major email clients
- **Styling**: Inline email-safe CSS with responsive mobile rules

## Development

### Compile MJML to HTML
```bash
cd "/Users/minhtvu/DigitMade/DM website/digitmade.com/projects/262700"
mjml index.mjml -o index.html
```

For iterative work:

```bash
cd "/Users/minhtvu/DigitMade/DM website/digitmade.com/projects/262700"
mjml -w index.mjml -o index.html
```

### Requirements
- MJML CLI installed: `npm install -g mjml`
- A browser or email testing tool for previewing the compiled HTML

## Content Highlights
- TITAN final analysis headline and efficacy claims
- Indications for mHSPC and nmCRPC high-risk patients
- Contraindications and warnings/precautions blocks
- Safety tables and adverse-event content
- Footer links to the summary of product characteristics and Johnson & Johnson website

## Features
- Responsive layout for desktop and mobile email clients
- Outlook/MSO compatibility handling
- Email-safe button and table layouts
- Mobile horizontal scrolling support for wide tables
- Superscript-heavy medical references rendered for email clients

## Client Information
- **Client**: Johnson & Johnson
- **Product**: ERLEADA (apalutamide)
- **Campaign Type**: Healthcare professional email communication
- **Language**: French

## Notes
- Project URL: `https://www.digitmade.com/projects/262700/`
- Asset base URL: `https://www.digitmade.com/projects/262700/img/`
- Deployment flow: push changes to `main`

To publish project updates:

```bash
cd "/Users/minhtvu/DigitMade/DM website/digitmade.com"
git add projects/262700
git commit -m "Update project 262700"
git push origin main

# Example
cd '/Users/minhtvu/DigitMade/DM website/digitmade.com' && git add README.md projects/262700/index.html && git commit -m "Regenerate 262700 HTML output" && git push origin main
```

## Last Updated
July 3, 2026
