//Odev 2 : Birden fazla degisken yada sinirsiz degisken alan bir carpma islemini yapan fonksiyon. 
function multiplication(...arguments){
    let total = 1;
    let argLenght = arguments.length;


    for (let i = 0; i < argLenght; i++) {
        if (typeof arguments[i] != "number")
            return "Error : " + i + ". argümana lütfen sayisal deger giriniz."
        total *= arguments[i];
    }

    return total;
}

//Hatalı kullanım
let result = multiplication(2,3,4, "test");
console.log('Sonuç : ',result);

//Doğru kullanım
result = multiplication(5, 4, 3, 2, 1);
console.log("Sonuç : ", result);
