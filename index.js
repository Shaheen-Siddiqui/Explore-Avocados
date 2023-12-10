const fs = require("fs");
const http = require("http");
const url = require('url');

//Internal module
const replaceTemplate = require("./module/replaceTemplet")


const singleProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, "utf-8");
const homeOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const cardPage = fs.readFileSync(`${__dirname}/templates/template-card.html`, `utf-8`);
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const jsonData = JSON.parse(data);



const server = http.createServer((req, res) => {

  const { pathname, query } = url.parse(req.url, true);

  if (pathname == "/" || pathname == "/overview") {
    const output = jsonData.map((element)=>replaceTemplate(cardPage, element)).join("");
    const listData = homeOverview.replace(/%PRODUCT_CARD%}/g, output);
    res.end( listData)
  }
   else if (pathname === "/product") {
    let showData = jsonData[query.id];
    const showDataOnpage = replaceTemplate(singleProduct, showData);
    res.end(showDataOnpage);
  }
   else if (pathname === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  }
   else {
    res.end(`<h1>route not match 404 error</h1>`);
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("server is running on port 3000");
});
