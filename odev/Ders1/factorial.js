//Odev 1 : Faktoriyel Hesabi Yapan Fonksiyon
function fact(number) {
    let result = 1;
    let i;

    if (typeof number != 'number') {
        return "Erorr : Lutfen sayisal bir deger giriniz. "
    }

    if (number == 0 || number == 1) 
        return result;

    for (i = 2; i <= number; i++) {
        result *= i;
    } 

    return result;
}

console.log("Faktoriyel 'deneme' = ", fuct("deneme"))
console.log("Faktoriyel 0 = ", fuct(0))
console.log("Faktoriyel 1 = ", fuct(1))
console.log("Faktoriyel 5 = ", fuct(5))




