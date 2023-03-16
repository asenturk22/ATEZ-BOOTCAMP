const fs = require("fs");
const path = require("path");


const createDirectory = (directoryName) => {
    fs.mkdir(path.join(__dirname, directoryName), (err)=> {
        if (err) {
            return console.error(err);
        }
        console.table("Dosya oluşturuldu. ");
    })
}

createDirectory('http')

