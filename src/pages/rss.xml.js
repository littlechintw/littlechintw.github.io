import rss from '@astrojs/rss';
import { getPosts, postUrl } from '../lib/posts';

export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: 'littlechin.tw 文章',
    description: '小群的開發筆記、資安與社群活動紀錄、實習與職涯心得。',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: postUrl(post),
      categories: post.data.tags,
    })),
    customData: '<language>zh-tw</language>',
  });
}
