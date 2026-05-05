import {load} from 'cheerio';

export async function loader() {
  try {
    const resp = await fetch('https://news.ycombinator.com/favorites?id=noaoh', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome Safari',
        'Content-Type': 'text/html',
      },
    });
    const html = await resp.text();

    const $ = load(html);
    const favorites = $('tr.athing.submission')
      .map((_, el) => {
        const id = $(el).attr('id') || '';
        const titleAnchor = $(el).find('span.titleline > a').first();
        const title = titleAnchor.text();
        const url = titleAnchor.attr('href') || '';
        const site = $(el).find('.sitebit .sitestr').text() || null;

        const detailsRow = $(el).next();
        const scoreText = detailsRow.find('.subtext .score').text();
        const scoreMatch = scoreText.match(/\d+/);
        const score = scoreMatch ? Number(scoreMatch[0]) : null;

        const by = detailsRow.find('.subtext .hnuser').text() || '';
        const ageLink = detailsRow.find('.subtext .age > a');
        const age = ageLink.text() || '';
        const itemPath = ageLink.attr('href') || '';
        const itemUrl = itemPath ? `https://news.ycombinator.com/${itemPath}` : '';

        const commentsText = detailsRow.find('.subtext a[href^="item?id="]').last().text();
        const commentsMatch = commentsText.match(/\d+/);
        const comments = commentsMatch ? Number(commentsMatch[0]) : 0;

        return {id, title, url, site, score, by, age, itemUrl, comments};
      })
      .get()
      .slice(0, 10);

    return Response.json({favorites});
  } catch (e) {
    console.error(e);
    return Response.json({error: 'unable to retrieve favorites'}, {status: 500});
  }
}
