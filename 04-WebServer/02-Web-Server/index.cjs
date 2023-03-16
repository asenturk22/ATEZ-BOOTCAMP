const http = require("http");
const url = require("url");
const fs = require("fs");

/* http.createServer( (reg, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html'})
    console.log("URL : ", reg.url)
    res.write("Hello Atez Bootcamp students");
    res.write("pages/index.html")
    res.end();
}).listen(1860) */

http.createServer( (reg, res) => {
    const pathQuery = url.parse(reg.url, true);
    const fileName = `.${pathQuery.pathname}`;
    fs.readFile(fileName, (err, data) => {
        if (err) {
             res.writeHead(404, {"Content-Type" : "text/html"});
            return res.end("Böyle bir sayfa bulunamadı")
        }
        res.writeHead(200, {"Content-Type" : "text/html"});
        res.write(data);
        return res.end();
    })
}).listen(1860)