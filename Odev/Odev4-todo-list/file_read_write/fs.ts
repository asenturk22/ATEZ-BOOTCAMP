import  * as fs   from "fs";
import  * as path from "path";
import {Buffer} from "node:buffer"
/* 
    1- Bir text dosyasının içine istediğimiz cümleyi yazacak bir fonksiyon 
    yazılması (New line olarak yazılması gerekmekte)
*/

function file_write(file_name : string, data:string) {
    data = data + "\n";
    fs.appendFile(path.join(__dirname, file_name), data, (err) => {
        if (err) throw err;
        console.log("saved!..");
    })   
}

let data = "Ataz-bootcamp";
let file_name = "atez-bootcamp.txt";

for (let i = 0; i < 10; i++) {
    file_write(file_name, data)
}


/*
    2 - Bir text dosyasının belirtilen lokasyondan istenilen 
       lokasyana bir kopyasının oluşturulması için fonksiyon 
       yazılması
*/

const buf = new Buffer(1024)



function file_copy(new_file: string, source_file:string,
    start_byte : number, length_byte : number) : void {
    fs.open(source_file, "r+", function(err, fd){
        if(err) return console.error(err);
    
        console.log("File opened successfully!")

        fs.read(fd, buf, 0, length_byte, start_byte, function(err, bytes) {
            if (err) return console.log(err)
            console.log(bytes + ' byte read');

            if (bytes > 0) {
                console.log("test : ", buf.slice(0, bytes).toString());
                let newData : string = buf.slice(0, bytes).toString();
                fs.writeFile(new_file, newData, (err)=> {
                    if (err) return console.error(err);
                    console.log("successfull")
                })
            }
        })
    })
}

file_name = "atez-bootcamp.txt";
let copy_file = "atez-bootcamp2.txt";

file_copy(copy_file, file_name, 6, "bootcamp".length)



