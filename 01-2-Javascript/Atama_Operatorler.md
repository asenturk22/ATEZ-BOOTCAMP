## Atama Operatörleri 

Javascript değişkenlerine değer atamak için kullanılır. 

**Operator**|**Örnek**|**Sonuç**
--|--|--
=|x = y|x = y
+=|x += y| x = x + y
-=|x -= y| x = x - y
*=|x *= y| x = x * y
/=|x /= y| x = x / y
%=|x %= y| x = x % y
<<=|x <<= y| x = x << y
|>>=|x >>= y| x = x >>y
|>>>=|x >>>= y| x = x >>> y
&=|x &= y| x = x & y
\|=|x \|= y| x = x \| y
^=|x ^= y| x = x ^ y
**=|x **= y| x = x ** y

Atama operatörü (**=**) değişkene değer atamak için kullanılır. 

<br>

## Karşılaştırma Operatörleri 
<br>

**Operatör**|**Açıklaması**
--|--
a == b|a ve b eşit mi?
a === b|a ve b değerleri ve değer türleri eşit mi?
a != b|a ve b değerleri eşit değil mi?
a !== b|a ve b değerleri veya değer türleri eşit değil mi?
a > b | a değeri b değerinden büyük mü?
a < b | a değeri b değerinden küçük mü?
a >= b| a değeri b değerinden büyük veya eşit mi? 
a <= b| a değeri b değerinden küçük veya eşit mi?
? | kısaltılmış koşul operatörü 

<br>

Karşılaştırma operatörleri değerleri karşılaştırmak ve sonuca göre işlem yapmak için koşullu ifadelerde kullanılır. 


## Mantıksal Operatörler

<br>

Javascript mantıksal operatörleri kullanarak karşılaştırma işlemini birden fazla koşula göre yapabiliriz. 

**Operatör**|**Açıklaması**
--|--
&&|ve operatörü
\|\||veya operatörü 
!|Değil operatörü 

<br>
<br>

### **Kısa if** 
<br>
Javascript karşılaştırma operatörü sonucuna göre değişkene değer atamak için **ternary operatörü** kullanılır.  

```javascript
let a = 10;
let b = 20;
let maxNumber = (a > b) ? a : b; 
console.log(maxNumber)
```


### **Farklı Değişken Türlerini Karşılaştırmak**

<br> 

Farklı türden değşkenleri karşılaştırmak beklenmedik sonuçlar verebilir.  Metin türden bir değeri sayı veri türünden bir değerle karşılaştırırken  JavaScript metin veri türünü sayıya çevirir.

Boş metin veri türü 0 değerini alır.

Ancak sayısal olmayan metin veri türünden bir değer **NaN** değerini alacaktır.


## Tür Operatörleri 

**Operatör**|**Açıklaması**
--|--
typeof|Değişken türünü verir. 
instanceof|Değişken türünü karşılaştırır. 


```javascript
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

const auto = new Car('Honda', 'Accod', 1998);

console.log(auto instanceof Car);
console.log(auto instanceof Object);
```

yukarıdaki örnekte **instanceof** operatörü **auto** değişkeninin **Car** türünden bir fonksiyon nesnesi mi yada Object mi olup olmadığını sorgular ve geri dönüş değeri olarak **true** yada **false** değeri döndürü.  Ancak yukarıdaki her iki ifade de **true** değeri dönecektir. 

```javascript
let number = 14 
if (typeof === 'number') 
    console.log("sayısal değer");
else 
    console.log("sayısal olmayan değer");
```

**typeof** operatörü değişkenin türünü geri döndürür.  Karşılaştırma yapmaz.   


## Bit Operatörleri
<br>

Bit operatörleri değişkenleri bitsel olarak karşılaştırmayı sağlar. 

**Operatör**|**Açıklama**|**Örnek**|**Bitsel Gösterim**|**sonuç**|**Ondalık**|
--|--|--|--|--|--
&|Bitsel Ve|5 & 1|0101 & 0001|0001|1
\||Bitsel Veya|5 \| 1|0101 \| 0001|0101|5 
~|Bitsel Değil|~5| ~0101|1010|10
^|Bitsel ÖZEL VEYA|5 ^ 1|0101 ^ 0001|0100|4
<<|Sağa 0 ekle sola kaydır|5 << 1|0101 << 1|1010|10
\>>|	Sağa kaydır işareti koru|5 >> 1|0101 >> 1|	0010|2
\>>>|Sola 0 ekle sağa kaydır|5 >>> 1|0101 >>> 1|0010|2





## Aritmetik İşlemlerde İşlem Önceliği 

x


```javascript

```

```javascript

```


```javascript

```

```javascript

```


```javascript

```

```javascript

```


```javascript

```

```javascript

```


```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

