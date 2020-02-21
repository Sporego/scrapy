const puppeteer = require("puppeteer");

let data = [];
let Title = "";
let Telephone = "";

async function scrapeProduct(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  //
  //
  //

  const [el1a] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[1]/div/div/div[2]/h2/a/span"
  );
  const text1a = await el1a.getProperty("textContent");
  Title = await text1a.jsonValue();

  const [el1b] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[1]/div/div/div[2]/div[2]/div[1]"
  );
  const text1b = await el1b.getProperty("textContent");
  Telephone = await text1b.jsonValue();

  data.push({ Title, Telephone });
  console.log("1 AB Completed");

  //
  //
  //

  const [el2a] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[2]/div/div/div[2]/h2/a/span"
  );
  const text2a = await el2a.getProperty("textContent");
  Title = await text2a.jsonValue();

  const [el2b] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[2]/div/div/div[2]/div[2]/div[1]"
  );
  const text2b = await el2b.getProperty("textContent");
  Telephone = await text2b.jsonValue();

  data.push({ Title, Telephone });
  console.log("2 AB Completed");

  //
  //
  //

  const [el3a] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[3]/div/div/div[2]/h2/a/span"
  );
  const text3a = await el3a.getProperty("textContent");
  Title = await text3a.jsonValue();

  const [el3b] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[3]/div/div/div[2]/div[2]/div[1]"
  );
  const text3b = await el3b.getProperty("textContent");
  Telephone = await text3b.jsonValue();

  data.push({ Title, Telephone });
  console.log("3 AB Completed");

  //
  //
  //

  const [el4a] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[4]/div/div/div[2]/h2/a/span"
  );
  const text4a = await el4a.getProperty("textContent");
  Title = await text4a.jsonValue();

  const [el4b] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[4]/div/div/div[2]/div[2]/div[1]"
  );
  const text4b = await el4b.getProperty("textContent");
  Telephone = await text4b.jsonValue();

  data.push({ Title, Telephone });
  console.log("4 AB Completed");

  //
  //
  //

  const [el5a] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[5]/div/div/div[2]/h2/a/span"
  );
  const text5a = await el5a.getProperty("textContent");
  Title = await text5a.jsonValue();

  const [el5b] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[5]/div/div/div[2]/div[2]/div[1]"
  );
  const text5b = await el5b.getProperty("textContent");
  Telephone = await text5b.jsonValue();

  data.push({ Title, Telephone });
  console.log("5 AB Completed");

  //
  //
  //

  const [el6a] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[6]/div/div/div[2]/h2/a/span"
  );
  const text6a = await el6a.getProperty("textContent");
  Title = await text6a.jsonValue();

  const [el6b] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[6]/div/div/div[2]/div[2]/div[1]"
  );
  const text6b = await el6b.getProperty("textContent");
  Telephone = await text6b.jsonValue();

  data.push({ Title, Telephone });
  console.log("6 AB Completed");

  //
  //
  //

  const [el7a] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[7]/div/div/div[2]/h2/a/span"
  );
  const text7a = await el7a.getProperty("textContent");
  Title = await text7a.jsonValue();

  const [el7b] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[7]/div/div/div[2]/div[2]/div[1]"
  );
  const text7b = await el7b.getProperty("textContent");
  Telephone = await text7b.jsonValue();

  data.push({ Title, Telephone });
  console.log("7 AB Completed");

  //
  //
  //

  const [el8a] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[8]/div/div/div[2]/h2/a/span"
  );
  const text8a = await el8a.getProperty("textContent");
  Title = await text8a.jsonValue();

  const [el8b] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[8]/div/div/div[2]/div[2]/div[1]"
  );
  const text8b = await el8b.getProperty("textContent");
  Telephone = await text8b.jsonValue();

  data.push({ Title, Telephone });
  console.log("8 AB Completed");

  //
  //
  //

  const [el9a] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[9]/div/div/div[2]/h2/a/span"
  );
  const text9a = await el9a.getProperty("textContent");
  Title = await text9a.jsonValue();

  const [el9b] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[9]/div/div/div[2]/div[2]/div[1]"
  );
  const text9b = await el9b.getProperty("textContent");
  Telephone = await text9b.jsonValue();

  data.push({ Title, Telephone });
  console.log("9 AB Completed");

  //
  //
  //

  const [el10a] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[10]/div/div/div[2]/h2/a/span"
  );
  const text10a = await el10a.getProperty("textContent");
  Title = await text10a.jsonValue();

  const [el10b] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[10]/div/div/div[2]/div[2]/div[1]"
  );
  const text10b = await el10b.getProperty("textContent");
  Telephone = await text10b.jsonValue();

  data.push({ Title, Telephone });
  console.log("10 AB Completed");

  //
  //
  //

  const [el11a] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[11]/div/div/div[2]/h2/a/span"
  );
  const text11a = await el11a.getProperty("textContent");
  Title = await text11a.jsonValue();

  const [el11b] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[11]/div/div/div[2]/div[2]/div[1]"
  );
  const text11b = await el11b.getProperty("textContent");
  Telephone = await text11b.jsonValue();

  data.push({ Title, Telephone });
  console.log("11 AB Completed");

  //
  //
  //

  const [el12a] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[12]/div/div/div[2]/h2/a/span"
  );
  const text12a = await el12a.getProperty("textContent");
  Title = await text12a.jsonValue();

  const [el12b] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[12]/div/div/div[2]/div[2]/div[1]"
  );
  const text12b = await el12b.getProperty("textContent");
  Telephone = await text12b.jsonValue();

  data.push({ Title, Telephone });
  console.log("12 AB Completed");

  //
  //
  //

  const [el13a] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[13]/div/div/div[2]/h2/a/span"
  );
  const text13a = await el13a.getProperty("textContent");
  Title = await text13a.jsonValue();

  const [el13b] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[13]/div/div/div[2]/div[2]/div[1]"
  );
  const text13b = await el13b.getProperty("textContent");
  Telephone = await text13b.jsonValue();

  data.push({ Title, Telephone });
  console.log("13 AB Completed");

  //
  //
  //

  const [el14a] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[14]/div/div/div[2]/h2/a/span"
  );
  const text14a = await el14a.getProperty("textContent");
  Title = await text14a.jsonValue();

  const [el14b] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[14]/div/div/div[2]/div[2]/div[1]"
  );
  const text14b = await el14b.getProperty("textContent");
  Telephone = await text14b.jsonValue();

  data.push({ Title, Telephone });
  console.log("14 AB Completed");

  //
  //
  //

  const [el15a] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[15]/div/div/div[2]/h2/a/span"
  );
  const text15a = await el15a.getProperty("textContent");
  Title = await text15a.jsonValue();

  const [el15b] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[15]/div/div/div[2]/div[2]/div[1]"
  );
  const text15b = await el15b.getProperty("textContent");
  Telephone = await text15b.jsonValue();

  data.push({ Title, Telephone });
  console.log("15 AB Completed");

  //
  //
  //

  const [el16a] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[16]/div/div/div[2]/h2/a/span"
  );
  const text16a = await el16a.getProperty("textContent");
  Title = await text16a.jsonValue();

  const [el16b] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[16]/div/div/div[2]/div[2]/div[1]"
  );
  const text16b = await el16b.getProperty("textContent");
  Telephone = await text16b.jsonValue();

  data.push({ Title, Telephone });
  console.log("16 AB Completed");

  //
  //
  //

  const [el17a] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[17]/div/div/div[2]/h2/a/span"
  );
  const text17a = await el17a.getProperty("textContent");
  Title = await text17a.jsonValue();

  const [el17b] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[17]/div/div/div[2]/div[2]/div[1]"
  );
  const text17b = await el17b.getProperty("textContent");
  Telephone = await text17b.jsonValue();

  data.push({ Title, Telephone });
  console.log("17 AB Completed");

  //
  //
  //

  const [el18a] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[18]/div/div/div[2]/h2/a/span"
  );
  const text18a = await el18a.getProperty("textContent");
  Title = await text18a.jsonValue();

  const [el18b] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[18]/div/div/div[2]/div[2]/div[1]"
  );
  const text18b = await el18b.getProperty("textContent");
  Telephone = await text18b.jsonValue();

  data.push({ Title, Telephone });
  console.log("18 AB Completed");

  //
  //
  //

  const [el19a] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[19]/div/div/div[2]/h2/a/span"
  );
  const text19a = await el19a.getProperty("textContent");
  Title = await text19a.jsonValue();

  const [el19b] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[19]/div/div/div[2]/div[2]/div[1]"
  );
  const text19b = await el19b.getProperty("textContent");
  Telephone = await text19b.jsonValue();

  data.push({ Title, Telephone });
  console.log("19 AB Completed");

  //
  //
  //

  const [el20a] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[20]/div/div/div[2]/h2/a/span"
  );
  const text20a = await el20a.getProperty("textContent");
  Title = await text20a.jsonValue();

  const [el20b] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[20]/div/div/div[2]/div[2]/div[1]"
  );
  const text20b = await el20b.getProperty("textContent");
  Telephone = await text20b.jsonValue();

  data.push({ Title, Telephone });
  console.log("20 AB Completed");

  //
  //
  //

  const [el21a] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[21]/div/div/div[2]/h2/a/span"
  );
  const text21a = await el21a.getProperty("textContent");
  Title = await text21a.jsonValue();

  const [el21b] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[21]/div/div/div[2]/div[2]/div[1]"
  );
  const text21b = await el21b.getProperty("textContent");
  Telephone = await text21b.jsonValue();

  data.push({ Title, Telephone });
  console.log("21 AB Completed");

  //
  //
  //

  const [el22a] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[22]/div/div/div[2]/h2/a/span"
  );
  const text22a = await el22a.getProperty("textContent");
  Title = await text22a.jsonValue();

  const [el22b] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[22]/div/div/div[2]/div[2]/div[1]"
  );
  const text22b = await el22b.getProperty("textContent");
  Telephone = await text22b.jsonValue();

  data.push({ Title, Telephone });
  console.log("22 AB Completed");

  //
  //
  //

  const [el23a] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[23]/div/div/div[2]/h2/a/span"
  );
  const text23a = await el23a.getProperty("textContent");
  Title = await text23a.jsonValue();

  const [el23b] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[23]/div/div/div[2]/div[2]/div[1]"
  );
  const text23b = await el23b.getProperty("textContent");
  Telephone = await text23b.jsonValue();

  data.push({ Title, Telephone });
  console.log("23 AB Completed");

  //
  //
  //

  const [el24a] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[24]/div/div/div[2]/h2/a/span"
  );
  const text24a = await el24a.getProperty("textContent");
  Title = await text24a.jsonValue();

  const [el24b] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[24]/div/div/div[2]/div[2]/div[1]"
  );
  const text24b = await el24b.getProperty("textContent");
  Telephone = await text24b.jsonValue();

  data.push({ Title, Telephone });
  console.log("24 AB Completed");

  //
  //
  //

  const [el25a] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[25]/div/div/div[2]/h2/a/span"
  );
  const text25a = await el25a.getProperty("textContent");
  Title = await text25a.jsonValue();

  const [el25b] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[25]/div/div/div[2]/div[2]/div[1]"
  );
  const text25b = await el25b.getProperty("textContent");
  Telephone = await text25b.jsonValue();

  data.push({ Title, Telephone });
  console.log("25 AB Completed");

  //
  //
  //

  const [el26a] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[26]/div/div/div[2]/h2/a/span"
  );
  const text26a = await el26a.getProperty("textContent");
  Title = await text26a.jsonValue();

  const [el26b] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[26]/div/div/div[2]/div[2]/div[1]"
  );
  const text26b = await el26b.getProperty("textContent");
  Telephone = await text26b.jsonValue();

  data.push({ Title, Telephone });
  console.log("26 AB Completed");

  //
  //
  //

  const [el27a] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[27]/div/div/div[2]/h2/a/span"
  );
  const text27a = await el27a.getProperty("textContent");
  Title = await text27a.jsonValue();

  const [el27b] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[27]/div/div/div[2]/div[2]/div[1]"
  );
  const text27b = await el27b.getProperty("textContent");
  Telephone = await text27b.jsonValue();

  data.push({ Title, Telephone });
  console.log("27 AB Completed");

  //
  //
  //

  const [el28a] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[28]/div/div/div[2]/h2/a/span"
  );
  const text28a = await el28a.getProperty("textContent");
  Title = await text28a.jsonValue();

  const [el28b] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[28]/div/div/div[2]/div[2]/div[1]"
  );
  const text28b = await el28b.getProperty("textContent");
  Telephone = await text28b.jsonValue();

  data.push({ Title, Telephone });
  console.log("28 AB Completed");

  //
  //
  //

  const [el29a] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[29]/div/div/div[2]/h2/a/span"
  );
  const text29a = await el29a.getProperty("textContent");
  Title = await text29a.jsonValue();

  const [el29b] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[29]/div/div/div[2]/div[2]/div[1]"
  );
  const text29b = await el29b.getProperty("textContent");
  Telephone = await text29b.jsonValue();

  data.push({ Title, Telephone });
  console.log("29 AB Completed");

  //
  //
  //

  const [el30a] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[30]/div/div/div[2]/h2/a/span"
  );
  const text30a = await el30a.getProperty("textContent");
  Title = await text30a.jsonValue();

  const [el30b] = await page.$x(
    "/html/body/div[2]/div/div[1]/div[1]/div[2]/div[2]/div[30]/div/div/div[2]/div[2]/div[1]"
  );
  const text30b = await el30b.getProperty("textContent");
  Telephone = await text30b.jsonValue();

  data.push({ Title, Telephone });
  console.log("30 AB Completed");

  //
  //
  //

  //
  console.log(data);
  //

  console.log("Begin JSON WRITE")

  
}

scrapeProduct(
  "https://www.yellowpages.com/search?search_terms=cpa&geo_location_terms=New%20York%2C%20NY&page=2"
);

let arr = [];

for (i = 1; i < 99; i++) {
  const url2 =
    "https://www.yellowpages.com/search?search_terms=cpa&geo_location_terms=New%20York%2C%20NY&page=" +
    i;

  arr.push(url2);
}

console.log(arr);
