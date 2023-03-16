const url = require("url")
const websiteUrl = "http://www.atez.com.tr:8080/about"
const websiteUrlEN = "http://www.atez.com.tr:8080/en/about"


const urlParams = url.parse(websiteUrl)
const urlParamsEn = url.parse(websiteUrlEN)
console.table(urlParams)
console.table(urlParamsEn)
