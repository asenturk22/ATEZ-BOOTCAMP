# Javascript - String Veri Türü 

Javascript metinlerin tümü **"string"** veri türünde tutulur ve **string** veri türü ile ilgili yapabileceğimiz birden fazla işlem vardır. 

**Örnek**
```javascript
let email = "senturkabdullah@gmail.com";
let firstName = "Abdullah";
let lastName ="Şentürk";
```

### length Özelliği

string veri tipinde bulunan bir ifadenin ne kadar uzun olduğunu bulmak için **length** özelliğimizi kullanırız. 

```javascript
//stringte karakter sayısını bulma
console.log(email.length)
Output : 25
```

### indexOf - Metin içinde arama yapmak

Metin içinde aramak istediğimiz değerin **index** numarasını bize verir. 

```javascript
console.log(firstName.indexOf('l'))
Output : 4
```

### lastIndexOf - Metin içinde arama yapmak
Metin içinde aramak istediğimiz değerin birden fazla olması durumunda son indeksi verir.  

```javascript
console.log(firstName.lastIndexOf('l'))
Output : 5
```

### seach - Metin içinde arama yapmak
indexOf ile aynı sonuçlara ulaşırız. Genel olarak **"Regular Expressions"** işlemleri için çok kullanılan bir metottur.  

String bir ifade içerisinde, istediğimiz bir bilginin yerini bulmak için **search()** metodunu kullanırız. Kontrol ettiğimiz ifade nereden başlıyor ise bize onun yerini verir.

**Not: Eğer arattığımız şey yok ise -1 sonucu verir.**

```javascript 
console.log(firstName.search('l'))
Output : 4
```

### slice - Metin içinden parça almak
Metin içinden almak istediğimiz yerlerin index numaralarını vererek metin içinde bulunan parçayı alabiliriz.

```javascript 
let DOMAIN = email.slice(email.search("@") + 1 );
console.log(DOMAIN.slice(0, DOMAIN.indexOf('.')))
Output : gmail
```
### **replace – Metin Bulma ve Değiştirme***
Aranan metni istediğimiz metin ile değiştirmemize olanak sağlar.

```javascript 
email = email.replace('gmail.com', 'yandex.com');
console.log(email)
Output: senturkabdullah@yandex.com
```

### toUpperCase(), toLowerCase()
metni büyük harf veya küçük harf yapma metotudur. 

```javascript
//büyük harf / küçük harf 
firstName = firstName.toUpperCase();
console.log(firstName)
Output :ABDULLAH

firstName = firstName.toLowerCase();
console.log(firstName)
Output : abdullah 
```

### concat - Metin birleştirme

Elimizde bulunan iki string türündeki veriyi birleştirmemize olanak sağlar.

```javascript
console.log(firstName.concat(' ', lastName))
Output : 
Abdullah Şentürk
```

Metin birleştirmek için ayrıca **"+""** operatörü de kullanabiliriz. + operatörü iki stringi birleştirebileceği gibi aynı zamanda bir string ifade ve bir sayısal değeri ekrana basmak için sayısal ifadeyi otomatik tür dönüşümüne sokar ve stringe dönüştürülmüş ifadeyi diğer stringle beraber birleştirir.  

```javascript
console.log(firstName + ' ' + lastName + ' : ' + 3000)

Output : 
Abdullah Şentürk : 3000
```

### charAt- İndex Numarasına Göre Karakter Bulmak

Belirtilen index numarasında yer alan karakteri verir.

```javascript
//ilk karakteri bulmak 
console.log(email[0])
console.log(email.charAt(0))
Output : s
```

### charCodeAt – İndex Numarasına Göre Karakterin Unicode Değerini Bulma
Belirtilen index numarasında yer alan karakterin Unicode değerini verir.

```javascript
console.log('e : ', firstName.charCodeAt(1))
Output : e : 98
```

### split – Metni Diziye Çevirme

Split metodu ile istenilen metin diziye çevrilebilir. Kullanılan parametre ile metnin nasıl parçalanacağı belirtilir.

```javascript
let names = fullName.split(',');
console.log(names)
Output: ['Abdullah', 'Şentürk']
```

### İlk Harfi Büyük Kalan Harfleri Küçük Yapma

```javascript

//ilk harfleri büyük yapmak
firstName = "abdullah"
lastName = "şentürk"
let fullName =  `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}` 
console.log(fullName);
Output : Abdullah Şentürk
```

### includes - istediğim bilgi var mı?

Aradığımız bilginin değişken içerisinde olup olmadığını kontrol etmek için **includes()** metodunu kullanırız. true veya false döner.

```javascript
console.log(email.includes('@'))  //true
Output : true
console.log(email.includes('mmmm'))  //false
Output : false
```

### startsWith() ve endsWith() - nasıl başladı nasıl bitti?
Aldığımız veri istediğimiz bilgiyle başladı mı? Veya istediğimiz bilgiyle bitti mi? Bu durumu kontrol etmek için **startsWith()** ve **endsWith()** metodunu kullanırız.

```javascript
console.log(
    email.startsWith('s'),
    email.endsWith('yandex.com')
);
Output : true, false
```



















