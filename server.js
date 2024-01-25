const http = require("http");
const fs = require("fs").promises;
const url = require("url");
const path = require("path");

const contentType = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".jpg": "image/jpeg",
  ".ico": "image/x-icon",
};

http.createServer(async (req, res) => {
    ``;
    const { pathname } = url.parse(req.url);
    // console.log(pathname);
    // console.log(req.url)
    let filename = pathname.substring(1);
    // console.log(filename)
    if (pathname === "/") {
      filename = "index.html";
    }
    const type = contentType[path.extname(filename)];
    console.log(type);
    res.writeHead(200, { "Content-Type": type });
    if (type.includes("image")) {
      const img = await fs.readFile(filename);
      res.write(img, "hex");
    } else {
      const content = await fs.readFile(filename, "utf8");
      res.write(content);
    }
    res.end();
  })
  .listen(3300, () => console.log("Listen server on port 3300"));
