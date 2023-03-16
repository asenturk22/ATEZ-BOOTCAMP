"use strict";
exports.__esModule = true;
var http = require("http");
var url = require("url");
var fs = require("fs");
var path = require("path");
var port = 3000;
var contentTypes = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript"
};
var server = http.createServer(function (req, res) {
    var pathQuery = url.parse(req.url, true);
    var fileName = "./pages".concat(pathQuery.pathname);
    var ext = path.extname(pathQuery.pathname).replace(/\./g, "");
    fs.readFile(fileName, function (err, data) {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/html" });
            return res.end("Boyle bir sayfa bulunamadi.");
        }
        res.writeHead(200, { "Content-Type": contentTypes[ext] });
        return res.end(data);
    });

    console.log(pathQuery)
    console.log(fileName)
    console.log(ext)
});
server.listen(port, function () {
    console.log("Server running at http://localhost:".concat(port));
});
