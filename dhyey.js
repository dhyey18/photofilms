const axios = require("axios");
const cheerio = require("cheerio");

async function getImages(url) {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const images = new Set();

    // img tags
    $("img").each((_, el) => {
        const src = $(el).attr("src");
        if (src) {
            images.add(new URL(src, url).href);
        }
    });

    // inline background-image styles
    $("[style]").each((_, el) => {
        const style = $(el).attr("style");
        const match = style?.match(/url\(['"]?(.*?)['"]?\)/);
        if (match) {
            images.add(new URL(match[1], url).href);
        }
    });

    console.log([...images]);
}

getImages("https://photofilms.in/");