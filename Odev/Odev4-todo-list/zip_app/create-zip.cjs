//import AdmZip from "adm-zip";
const AdmZip = require("adm-zip")


async function createZipArchive(folder_name, zip_name) {
    try {
        const zip = new AdmZip();
        const output_file = zip_name;
        zip.addLocalFolder("./" + folder_name);
        zip.writeZip(output_file);
        console.log(`Created ${output_file} successfully!`);
    } catch (e) {
        console.error(e)
    }
}

createZipArchive("test", "test.zip");