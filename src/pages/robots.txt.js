// src/pages/robots.txt.js
export async function GET() {
    const siteUrl = 'https://getlinkme.app';
    
    // Build the robots.txt content
    const robotsTxt = `User-agent: *
  Allow: /
  Sitemap: ${siteUrl}/sitemap.xml
  `;
  
    // Return with the proper content type for plain text
    return new Response(robotsTxt, {
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }