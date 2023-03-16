const fs = require("fs");
const path = require("path")


console.log("path", path)
console.log("path", path.dirname())

fs.exists("newFile.txt", function(exists){
    console.log(exists ? "dosya var" : "dosya yok");
    if (exists) {
        fs.readFile("newFile.txt", "utf-8", function(err, data) {
            console.log("Data",err, data);
        })
    } else {
        //throw Error("Böyle bir dosya yok. ");
    }
});
