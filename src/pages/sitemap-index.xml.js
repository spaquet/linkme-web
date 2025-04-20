// src/pages/sitemap-index.xml.js
export async function GET() {
    const siteUrl = 'https://getlinkme.app';
  
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap>
      <loc>${siteUrl}/sitemap-main.xml</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </sitemap>
    <sitemap>
      <loc>${siteUrl}/sitemap-blog.xml</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </sitemap>
  </sitemapindex>`;
  
    return new Response(xml, {
      headers: { 'Content-Type': 'application/xml' },
      status: 200,
    });
  }
  
  export const revalidate = 3600; // Revalidate hourly