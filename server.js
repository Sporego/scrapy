const puppeteer = require("puppeteer");

async function scrapeProduct(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const [el] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[1]/div/div/div[2]/h2/a/span"
  );
  const src = await el.getProperty("src");
  const srcTxt = await src.jsonValue();

  console.log({ srcTxt });
}

scrapeProduct(
  "https://www.yellowpages.com/search?search_terms=cpa&geo_location_terms=New%20York%2C%20NY&page=1"
);
