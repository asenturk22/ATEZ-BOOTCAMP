let price = "100";
let user = "Abdullah"

// == Eşitse
console.log(price == 1);      //false
console.log(price == 100);    //false


// === hem değeri hemde türü eşitse
console.log(price === 1);     //false
console.log(price === 100);   //false

// != Eşit değilse
console.log(user != "guest")

// < küçükse
console.log("price < 100", price < 100)

// <= küçük veya eşit ise
console.log("price < 100", price <= 100)


// > Büyükse
console.log("price < 100", price > 100)


// >= büyük veya eşit ise
console.log("price < 100", price >= 100)

// && ve
price = 0;
console.log(price > 0 && user != "guest")

// || veya
console.log(price > 0 || user != "guest")

// ! değil (tersi) 
console.log(!(price > 0 && user == "guest"))


//if 
let username = "Abdullah";

if (username.length > 0) {
    console.log(`Kullanici bilginiz ${username}`)
} else {
    console.log("bilgi yok")
}















