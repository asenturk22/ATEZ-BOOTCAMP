"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
/*
    1- Bir text dosyasının içine istediğimiz cümleyi yazacak bir fonksiyon
    yazılması (New line olarak yazılması gerekmekte)
*/
function file_write(file_name, data) {
    data = data + "\n";
    fs.appendFile(path.join(__dirname, file_name), data, function (err) {
        if (err)
            throw err;
        console.log("saved!..");
    });
}
var data = "Ataz-bootcamp";
var file_name = "atez-bootcamp.txt";
for (var i = 0; i < 10; i++) {
    file_write(file_name, data);
}
/*
    2 - Bir text dosyasının belirtilen lokasyondan istenilen
       lokasyana bir kopyasının oluşturulması için fonksiyon
       yazılması
*/
var buf = new Buffer(1024);
function file_copy(new_file_name, read_file_name, start_byte, length_byte) {
    fs.open(read_file_name, "r+", function (err, fd) {
        if (err)
            return console.error(err);
        console.log("File opened successfully!");
        fs.read(fd, buf, 0, length_byte, start_byte, function (err, bytes) {
            if (err)
                return console.log(err);
            console.log(bytes + ' byte read');
            if (bytes > 0) {
                console.log("test : ", buf.slice(0, bytes).toString());
                var newData = buf.slice(0, bytes).toString();
                fs.writeFile(new_file_name, data, function (err) {
                    if (err)
                        return console.error(err);
                    console.log("successfull");
                });
            }
        });
    });
}
file_name = "atez-bootcamp.txt";
var copy_file = "atez-bootcamp2.txt";
file_copy(copy_file, file_name, 6, "bootcamp".length);
