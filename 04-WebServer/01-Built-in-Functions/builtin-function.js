import process from "process";
import os from "os";
/* 
    argv : node 'un bulunduğu konumu ve dosyamızın bulunduğu path'i 
    vermektedir. 
*/
console.log(process.argv)
console.log(process.env)
console.log("Development env", process.env.NODE_ENV)

const isDev = process.env.NODE_ENV === "development";

console.log(isDev ? "Dev ortamındayım debug edebilirim." : "prod ortamındayım debug edemem")

console.log("ATEZ", process.env.ATEZ_BOOTCAMP);
console.log("PWD", process.cwd());
console.log("Platform", process.platform);

//Operating System
console.log(os.hostname())
console.log(os.cpus());
console.log(os.uptime());
