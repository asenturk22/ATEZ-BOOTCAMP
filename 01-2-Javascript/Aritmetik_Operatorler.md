# Javascript'te Operatörler

Javascript dili weakly-typed yani güçsüz türlü bir dildir. Değişkenlerin ve parametrelerin türlerini bildirmek gerekmez. 

Tüm programlama dillerinde olduğu gibi Javascript ile çeşitli işlemler için,
- aritmetik operatörler,  
- atama operatörleri, 
- karşılaştırma operatörleri, 
- mantıksal operatörler, 
- koşul operatörleri, 
- tür operatörleri ve 
- bit operatörlerini 

kullanabiliriz.   

## Aritmetik Operatörler

Temel aritmetik operatörler iki sayı üzerinde işlem yapar. 

Sembol |  İşlem 
--- | ---
+|Toplama
-|Çıkarma
*|Çarpma
/|Bölme
**|Üs Alma
%|Mod Alma
++|Arttırma
--|Azaltma


## Number (Sayı) Veri Türü 

<br>

```javascript
    //number veri türü tanımlamak
    let price = 100;
    let tax = 0.18;
    let priceTax = price * tax;
    let total = price + priceTax;

    console.log(
    "Fiyat   : ", price, 
    "%18 Kdv : ", priceTax, 
    "Genel Toplam : ", total
);
```
Yukarıdaki örnekte **price** tam sayi bir değer tutmaktadır. **tax** float türden sayısal bir değer tutmaktadır. 

Aritmetik operatörlerle ilgili bir örnek atayalım. Bunun için **counter** adlı bir değişken tanımlayalım ilgili işlemleri sırası ile yapalım. 

```javascript
// arttırma ve azaltma işlemleri 
let counter = 320;
```

```javascript
//arttırma işlemleri
counter = counter + 1;  //1. yöntem
counter += 1;           //2. yöntem
counter++;              //3. yöntem
console.log(counter);
```

```javascript
//azaltma işlemleri 
counter = counter - 1;
counter -= 1;
counter--;
console.log(counter);
```

```javascript
//çarpma işlemleri 
counter = counter * 2;
counter *= 2;
console.log(counter);
```


```javascript
//Bölme işlemleri 
counter = counter / 2;
counter /= 2;
console.log(counter);
```

```javascript
//Mod Alma işlemi
counter = counter % 4;
counter %= 4;
console.log(counter);
```

```javascript
//Üs alma 
console.log(2 ** 2);
```

## Math kütüphanesindeki bazı fonksiyonlar

```javascript
//aşağı yuvarlama işlemi -> Math.floor:
console.log(Math.floor(1.9));
```

```javascript
//yukarı yuvarlama işlemi -> Math.ceil:
console.log(Math.ceil(1.3));
```

```javascript
//Yakına yuvarlama işlemi -> Math.round:
console.log(Math.round(1.2));
```

<br>

Bazen string bir ifade ile gelen veri içerisindeki sayısal değeri türü string olarak alındığından bunu sayısal türe dönüştürmemiz gerekebilir. Bunun için de

```javascript
let newNumber = Number(stringNumber);
```
şeklinde bir dönüştürme işlemi yapmamız gerekir.  Örneğin; 

```javascript
let stringNumber = "11";
console.log(stringNumber);
let newNumber = Number(stringNumber);
console.log("NEW NUMBER", newNumber);

```

Yukarıdaki kod bloğunda **stringNumber** değişkenine atanan "11" string ifadesi aslında rakam olmasına rağmen ".." içerisinde yazıldığı için bir string ifadedir.  Bu "11"  string değerini 11 sayısal değierine dönüştürmek için 

```javascript
let newNumber =  Number(stringNumber);
```
şeklinde bir tür dönüşümü yapılmıştır ve artık **newNumber** değişkenine bu sayısal değer atanmıştır. Artık **newNumber** bir sayısal değerdir. 

