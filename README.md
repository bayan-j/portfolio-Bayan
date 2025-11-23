# Bayan's Professional Portfolio

This is a personal portfolio website showcasing projects, skills, and experience.

## Deployment Instructions

To deploy this portfolio to Cloudflare Pages:

1. **Using Wrangler CLI** (if you have it installed):
   ```bash
   npm run deploy
   ```
   or directly:
   ```bash
   npx wrangler deploy --assets=./
   ```

2. **Using Cloudflare Pages Dashboard**:
   - Connect your GitHub repository
   - Set the build command to: `echo "Deploying static site"`
   - Set the build output directory to: `/`
   - The project will automatically deploy as a static site

## Project Structure

All files in this directory are static assets ready for deployment:
- `index.html` - Main portfolio page
- `style.css` - Main styles
- `utilities.css` - Additional styling
- `script.js` - JavaScript functionality
- Image assets (PNG, SVG files)

## Requirements

- No build step required
- Pure HTML, CSS, and JavaScript
- Ready for static site deployment

## Custom Domain

To use your custom domain `bayanbakehil.com`:
1. After deployment, go to Cloudflare Pages dashboard
2. Select your project
3. Go to "Custom Domains"
4. Add your domain `bayanbakehil.com`
5. Follow Cloudflare's DNS configuration instructions