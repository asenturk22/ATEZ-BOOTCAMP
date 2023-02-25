
![Node.Js](https://nodejs.org/static/images/logo.svg)              
<hr>
<br> <br>



# Node JS Nedir? 

Node JS,  açık kaynaklı, genelde sunucu tarafında çalışan ve ağ bağlantılı uygulamalar için geliştirilmiş bir çalıştırma ortamıdır. 

## Javascript Event Loop

Javascript tek bir thread ile çalışır. Uygulamadaki tüm işleri tek bir thread ile çalıştırır. Yapılması gereken işler **Javascript Runtime**'ına  **Event**'lar ve **Callback**'ler ile iletilir. Tüm bu event'lar ve callback'ler bir kuyrukta tutulur. Thread her defasında kuyruktaki ilk event'ı işler. (FIFO) ilk giren ilk çıkar yöntemidir.  Bu işleme **Event Loop** adı verilir. 

<br>

[JavaScript Visualized: Event Loop' git](https://medium.com/kodluyoruz/javascript-visualized-event-loop-9269e4ef39ad)

[![https://miro.medium.com/v2/resize:fit:1100/1*uxMxZ6y6lzLCVP4bTiYEow.gif](https://miro.medium.com/v2/resize:fit:1100/1*BQ0QuqGwpcZCGVnbshr_ng.gif)](https://medium.com/kodluyoruz/javascript-visualized-event-loop-9269e4ef39ad)


# Npm Paket Yönetimi 

**npm** (Node package manager) javascript betik dili için geliştirilmiş olan ve Node.js' in standart olarak kabul ettiği bir paket yönetim sistemidir.  **npm** komut satırından çalıştırılır ve uygulamalar için *bağımlılık yönetimi*  sağlar.  Ayrıca geliştiricilerin merkezi bir npm kaynağından var olan paketlerin kurmasına imkan verir.  **Npm** tamamen javascript dili kullanılarak Isaac Z. Schuleter  tarafından geliştirilmiştir.  [Wikipedia](https://tr.wikipedia.org/wiki/Npm)


## Data Types
Geçici olarak **veri saklamak** için oluşturulan veri yapılarına **değişken(variable)** denir. Javascript'de değişken tanımlamak için **var**, **let** ve **const** komutları kullanılır. 

**var** anahtar kelimesi ile oluşturulan değişkenler global bir değişken durumunda olduğundan her yerde değiştirilebilir ancak **let** anahtar kelimesi ile oluşturulan değişken ise sadece tanımlı olduğu blok içerisinde varlığını devam ettirebilir.  

Javascript'te verileri tutmak için kullabilecek javascript veri tipleri 2 gruba ayrılır. 

- **Basit veri tipleri** : string, number, boolean ve undefined

### String Data Type
<br>

```javascript
//String data type
var sth = "ATEZ BOOTCHAMP"
```

### Number Data Type
<br>

```javascript
//number data type
var number = 123
```
### Boolean Data Type
<br>

```javascript
//boolean data type
var isTrue = true           //var 
var isFalse = false         //yok 
```

Boolean veri tipleri var-yok mantığı ile çalışırlar.   Boolean bir veri tipi  **true**  yada **false* bir değer alır. 
boolean veri tipini bir durumun doğru ya da yanlış, var ya da yok şeklinde bilgisini tutmak için kullanırız. 

### Undefined Data Type
<br>

```javascript
//undefined data type
var sthelse; 

//NULL data
var nullData = null;
```

Tanımlanan ancak içerisine değer atılmayan tipler için **undefined** tipi kullanılır.

- **Referans veri tipleri** : Dizi, nesne, fonksiyon ve null veri tipleri. 

### Object Data Type
<br>

```javascript
//Object data type
var testObj {
    sth : "ATEZ BOOTCHAMP",
    number : 123, 
    isTrue : false,
} 
```

Javascript'te bir nesne tanımlayarak bir gruba ait bilgileri ayrı ayrı değişken tanımlamamıza gerek kalmadan saklayabiliriz. Örneğin yukarıdaki testObj veri tipi içinde string, number ve boolean veri tipini tutan bir object nesnedir. 

```javascript
console.log(typeof testObj)     //Object
```

Nesne üzerinden bilgilere ulaşmak için nesneden sonra **"."** operatörünü kullanırız. 
```javascript
console.log(testObj.sth)
console.log(testObj.number)
console.log(testObj.isTrue)

//Sonuç console ekranında aşağıdaki sonucu ekrana basacaktır.
ATEZ BOOTCHAMP
123
false
```



### Array Data Type
<br>
String veri türünde karakter grubu saklayabildiğimiz gibi diziler içerisinde de string bir veri,number, boolean ve object türünde bir veri grubunu saklayabiliriz. Örneğin; 

<br>

```javascript
var testArray = [
    "ATEZ BOOTCHAMP", "ATEZ BOOTCHAMP 2", 123, 233,       
        testObj = {
        sth : "ATEZ BOOTCHAMP",
        number : 123, 
        isTrue : false,
        }
]
```

### Null Data Type
<br>
Javascript' de null bir nesne olarak algılanır. Yani tanımladığınız bir veri içine null değer attığınızda bellekte bir alan tahsis edilir ancak içerisinde bir değer olmadığını söylemiş oluruz.

```javascript
//Null data type
var nullData = null;
]
```

### Function Data Type
<br>
Javascript' de fonksiyonlar da bir nesne olarak nitelendirilir. 

c

**Javascript**' de  değişken tiplerini belirtmek için her veri tipine özel bir komut yoktur. Her veri tipi **var** komutu ile tanımlanır ancak değişkene attığımız veri tipine göre değişken farklı veri tipinde değerlendirilir.  


### Değişken Tanımlama Kuralları 
- Değişken isimleri rakma ile başlayamaz
```javascript
var 1variable;  //hatalı
var variable1;  //geçerli
var _variable;  //geçerli
```
- Komut isimleriyle tanımlama yapılamaz. 

Örneğin **if**, **var**, yada **for** kelimesi değişken isimleri olamaz. 

- Büyük, küçük harf duyarlılığı vardır. 
```javascript
var firsName = "Abdullah";
var FirstName = "Şentürk";
```
yukarıdaki  firstName ve FirstName farklı iki değişkendir ve farklı iki veri tutmaktadır. 

- Değişken isimlerinde türkçe karakter kullanmamalıyız.  

<br><br>

## **Veri tiplerinin geçerli olduğu yerler** 

<br>
// BLOCK SCOPE --  let & const

```javascript
const globalScopeVariable = "GLOBAL SCOPE VARIABLE";

function functionScope() {
    const fnScopeVariable = "FUNCTION SCOPE VARIABLE"; 
}

console.log("GLOBAL ===> ", globalScopeVariable);       //geçerli
console.log("FUNCTION => ", fnScopeVariable);   //hatalı
```

Yukarıdaki kod bloğunda **globalScopeVariable** değişkeni global olarak tanımlandığı için fonksiyon içinde de kullanılabilir ancak **fnScopeVariable** değişkeni ait olduğu fonksiyon bloğunda tanımlandığından fonksiyonun dışında çağrılması durumunda hata verecektir.  Ancak kodumuzu aşağdaki gibi düzenleyip çalıştırdığımızda çalışacaktır. 

```javascript
const globalScopeVariable = "GLOBAL SCOPE VARIABLE";

function functionScope() {
    const fnScopeVariable = "FUNCTION SCOPE VARIABLE"; 
    
    console.log("GLOBAL ===> ", globalScopeVariable);       //geçerli
    console.log("FUNCTION => ", fnScopeVariable);   //geçerli,
}

functionScope();
```

Yukarıdaki kod içinde hem globalScope hemde fnScopeVariable değişkenlerinin çağrılma işlemleri functionScope fonksiyonun içinde yapılmıştır ve geçerlidir.  

**const** değişkenler yeni değer verilemez. Sadece okunabililir değişkenlerdir.   

<br>
<br>
<br>

## **Fonksiyonlar (Functions)**
 <br>

### **Fonksiyon Nedir?**
 <br>

Bir uygulama geliştirirken bir matematiksel hesabı onlarca kez yaptığınızı, veritabanından aynı veriyi defalarca çektiğinizi düşünün. Bu şekilde yazılmış kodların bakımı da okunması da oldukça zor olurdu. İşte tam da burada devreye **fonksiyon** giriyor.
 
**Fonksiyonlar**, birçok yerde kullanacağınız kod parçalarını bir kez yazmanızı, ihtiyacınız olduğu zaman sadece tanımladığınız fonksiyon ismiyle çağırarak kod tekrarından kaçınmanızı sağlar.

<br>
 
### **Fonksiyon Tanımlama**
 <br>

Bir fonksiyon, function anahtar kelimesi, isim, parametreler ve dönüş değerinden oluşur. Parametreler, fonksiyonların yeniden kullanılabilir olmalarını sağlarlar. Böylece aynı kod parçasını farklı değerler için çalıştırarak farklı sonuçlar elde edebiliriz. 
 
```javascript
function functionName(param1, param2, ...) {
statement 1; 
statement 2; 
statement 3;
 
return output;
}
```

burada 
 
**function** fonksiyon tanımlaması yapıldığını söyleyen anahtar kelimedir. 
**functonName** tanımlamasi yapılacak olan fonksiyon ismidir. 
 
**param1, param2** ifadeleri ise fonksiyona gönderilecek parametreleri tanımlar. Buraya gönderilecek olan paramatre sayısını belirleyebileceğimiz gibi sınırsız sayıda parametre alabilen fonksiyonlarda tanımlayabiliriz. 
 
Fonksiyon içinde yapılacak işlerin tanımlamasının başlangıç noktası **{** karakteri başlar ve **}** karakteri ile biter. Bu karakter arasında yazılan işlemler fonksiyon gövdesini oluşturmaktadır. 
```javascript
{
statement 1; 
statement 2; 
statement 3;
}
```
Yukarıda ki ifadeler fonsiyon içerisinde yapılabilecek işlemleri ifade etmektedir. 
 
**return** output; ifadesi ise tanımlı olan fonksiyonun içerisinde yapılan işlemlerin sonucunu, fonksiyonu çağıran ifadeye geri dönüş değeri olarak sonucu döndürür. 
 
### Arguments
 
Bir fonksiyon tanımlarken parametre sayısını bilemeyebiliriz. Bu gibi durumlarda arguments imdadımıza yetişir. Örneğin gönderilen tüm parametreleri toplayan bir fonksiyona ihtiyacımız var. Bu durumda aşağıdaki gibi bir tanım yapabiliriz.
 
```javascript
function sum(...arguments){
let total = 0;
for (let i=0;i<arguments.length;i++) {
total += arguments[i];
}
return total;
}
 
let result = sum(2,3,4,5,6,7,8, 9, 10);
console.log('Sonuç : ',result);
}
```
 
Yukarıdaki örnekte sum fonksiyonu hiç parametre almıyor gibi görünsede, javascript'te fonksiyon çağrılırken gönderilen parametreler **arguments** dizisi olarak saklanır. Böylece sınırsız parametre alabilen fonksiyonlara sahip olabiliriz. 
 
```javascript
Sonuç : 54
```

<br>
<br>
<br>

- Karşılaştırma Operatörleri
- Koşul İfadesi 
- Loops (Döngüler) 

    - for
    - while
    - foreach
    - filter
    - map
    
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

![Node.Js](https://www.atez.com.tr/wp-content/uploads/2019/11/TR-COLORED-1200-800x211.png)      
