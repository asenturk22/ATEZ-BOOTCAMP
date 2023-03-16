let email = "senturkabdullah@gmail.com";
let firstName = "Abdullah";
let lastName ="Şentürk";

//stringte karakter sayısını bulma
console.log(email.length)

//ilk karakteri bulmak 
console.log(email[0])
console.log(email.charAt(0))

//büyük harf / küçük harf 
firstName = firstName.toUpperCase();
console.log(firstName)

firstName = firstName.toLowerCase();
console.log(firstName)

//string içinde istediğimiz bilgiyi aramak ve yerini bulmak -> search: 
//-> search
console.log(email.search("@"))
console.log( email[15])

//string içinde belli bir metni almak 
//-> slice
let DOMAIN = email.slice(email.search("@") + 1 );
console.log(DOMAIN.slice(0, DOMAIN.indexOf('.')))

//bilgiyi değiştir -> replace
email = email.replace('gmail.com', 'yandex.com');
console.log(email)

//istedigim bilgi var mı? 
//-> includes
console.log(email.includes('@'))  //true
console.log(email.includes('mmmm'))  //false

//istedigim bilgi ile basladi mi? bitti mi?
//-> startswidth, endswidth
console.log(
    email.startsWith('s'),
    email.endsWith('yandex.com')
);

//ilk harfleri büyük yapmak
firstName = "abdullah"
lastName = "şentürk"
let fullName =  `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}` 
console.log(fullName);


console.log(firstName.indexOf('l'))
console.log(firstName.lastIndexOf('l'))
console.log(firstName.search('l'))
console.log(firstName.concat(' ', lastName))
console.log(firstName + ' ' + lastName + ' : ' + 3000)
console.log(firstName.charCodeAt(1))
let names = fullName.split(',');
console.log(names)