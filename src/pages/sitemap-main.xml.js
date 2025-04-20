// src/pages/sitemap-main.xml.js
export async function GET() {
    const siteUrl = 'https://getlinkme.app';
    const pages = [
      '', '/about', '/features', '/pricing', '/contact',
      '/privacy', '/terms-of-service', '/cookies',
    ];
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages.map(page => `  <url>
     <loc>${siteUrl}${page}</loc>
     <changefreq>weekly</changefreq>
     <priority>0.7</priority>
     <lastmod>${new Date().toISOString()}</lastmod>
   </url>`).join('\n')}
    </urlset>`;
    return new Response(xml, {
      headers: { 'Content-Type': 'application/xml' },
      status: 200,
    });
  }