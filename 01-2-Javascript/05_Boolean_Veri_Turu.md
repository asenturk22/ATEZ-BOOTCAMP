# **Javascript Boolean Veri Türü**

<br>

Bazı ifadeleri sadece iki ihtimale göre değerlendirmek JavaScript programlarımızı yazarken oldukça işimize yarar. Bu alternatifler "evet veya hayır", " var ya da yok","1 veya 0", "evet veya hayır" gibi değerler olabilir. Bu tür iki alternatiften bahsettiğimiz veri tipine **"Boolean"** veri tipi diyoruz.

Boolean veri tipleri sadece iki değerden birini ifade eder. Bunlar **true** ya da **false** 'dur.

## **Boolean() fonksiyonu**
<br>

```javascript
console.log(Boolean(10>0))
Output : true
```

Boolean() fonksiyonu bize sadece iki farklı değer dönebilir. Bunlar ya **true** ya da **false**'dur.

```javascript
const b1 = Boolean(100);
const b2 = Boolean(3.14);
const b3 = Boolean(-15);
const b4 = Boolean("Hello");
const b5 = Boolean('false');
const b6 = Boolean(1 + 7 + 3.14);

Output : true
```

```javascript
const c1 = Boolean(undefined);
const c2 = Boolean(null);
const c3 = Boolean("");
const c4 = Boolean(false);
const c5 = Boolean(NaN);
const c6 = Boolean(0);
const c6 = Boolean(-0);

Output : false
```


## Değişkenler Arasında Tür Dönüştürme

string(metinsel) bilgileri **int** ve **float**' a dönüştürmek. 

```javascript

let number = "11"
number = parseInt(number);
console.log("number : ", number, "türü :", typeof(number))
Output : 
number : 11 türü : number

let number2 = "11px"
number2 = parseInt(number2);
console.log("number2 : ", number2, "türü : ",  typeof(number2))

Output : 
number : 11 türü : number
```

Yukarıdaki 2. örnekte string ifade içerisindeki sayısal ilk karakterleri alıp sayısal türüne dönüştür. 


```javascript
let floatNumber = "11.2";
floatNumber = parseFloat(floatNumber);
console.log("float : ", floatNumber, "türü : ", typeof(floatNumber));

Output : 
float : 11.2 türü : number
```

sayısal bir değeri string türüne dönüştürmek içinde **.toString()** methodu ile yapabiliriz. 

```javascript
let floatNumber = "11.2";
floatNumber = floatNumber.toString();
console.log("string : ", floatNumber, "türü : ", typeof(floatNumber));

Output : 
string : 11.2 türü : string
```

şeklinde çıktı verecektir. 


