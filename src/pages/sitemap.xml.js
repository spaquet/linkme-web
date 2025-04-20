// src/pages/sitemap.xml.js
export async function GET() {
    const siteUrl = 'https://getlinkme.app';
    
    // You can dynamically generate pages here if needed
    // For example, if you have dynamic routes or collections
    // const pages = await getAllPages();
    
    // For now, we'll create a simple sitemap with known routes
    const pages = [
      '',                     // home page
      '/about',               // about page
      '/features',            // features page
      '/pricing',             // pricing page
      '/contact',             // contact page
      '/privacy',             // privacy policy
      '/terms-of-service',    // terms of service
      '/cookies',            // cookies policy
      '/blog',               // blog index
    ];
  
    // Build the sitemap XML
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `  <url>
      <loc>${siteUrl}${page}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.7</priority>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>`).join('\n')}
  </urlset>`;
  
    // Return the XML with proper content type
    return new Response(xml, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  }