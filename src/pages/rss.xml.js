import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import siteConfig from '../data/site-config.ts';
import { sortPostsByDateDesc } from '../utils/post-utils';
import { getImage } from "astro:assets";
import fs from 'node:fs/promises';

async function getFileSizeInKb(filePath) {
    try {
      const url = new URL(filePath, import.meta.url);
      const stats = await fs.stat(url);
      const fileSizeInBytes = stats.size;
      return fileSizeInBytes;
    } catch (error) {
      console.error('Error al obtener información del archivo:', error);
      throw error;
    }
  }

export async function GET(context) {
    const posts = (await getCollection('blog')).sort(sortPostsByDateDesc).filter(({data}) => !data.draft);
    const items = await Promise.all(posts.map(async (item) => {
        const image = await getImage({ src: item.data.featureImage.src, width: 1080, height: 720 });
        const image_length = await getFileSizeInKb(`../../public${image.src}`);
        return {
            title: item.data.title,
            description: item.data.excerpt,
            link: `/blog/${item.slug}/`,
            pubDate: item.data.publishDate.setUTCHours(0),
            enclosure: {
                url: image.src,
                length: image_length,
                type: 'image/' + image.rawOptions.format,
            }
        };
    }));
    
    return rss({
        title: siteConfig.title,
        description: siteConfig.description,
        site: context.site,
        items: items
    });
}

