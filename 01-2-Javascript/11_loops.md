# Javascript Döngüler

## for döngüsü kullanımı
<br>

Bir for döngüsü, belirtilen koşul doğru olduğu sürece komutların çalıştırılmasını sağlar. Koşul sağlanmazsa döngü çalışmayı durdurur.

```javascript
for (ilk atama; koşul;  döngüde çalışacak ifade) {
    //çalışacak komutlar. 
}
```

```javascript
function sample() {
    const testArr = [
        "ATEZ BOOTCAMP",
        "SOME VALUE",
        23,
        "AAB",
    ]

    console.log('FIRST ELEMENT OF TESTARR', testArr[0])

    for(let i = 0; i < testArr.length; i++) {
        if (typeof testArr[i] === "number") {
            console.log("VALUE FROM LOOP", testArr[i])
        }
    }
}

sample()

Output : 
FIRST ELEMENT OF TESTARR ATEZ BOOTCAMP
VALUE FROM LOOP 23
```

Örnek:

```javascript 
function samplePerson() {
    //collection
    const personArray = [
        {name: "Umut", surName: "Yalcin", age: 34},
        {name: "Umut", surName: "Yalcin", age: 35},
        {name: "Umut", surName: "Yalcin", age: 36},
        {name: "Umut", surName: "Yalcin", age: 37},
        {name: "Umut", surName: "Yalcin", age: 38},
        {name: "Umut", surName: "Yalcin", age: 39},
    ]

    for (let i = 0; i < personArray.length; i++) {
        const person = personArray[i];
        console.log("Person", person.age);
    }

    Output : 
    Person 34
    Person 35
    Person 36
    Person 37
    Person 38
    Person 39
}

samplePerson()
```

## break ve continue Kullanımı
<br>
Break ve continue döngülerde sıklıkla kullandığımız önem arz eden ifadelerimizdendir. Döngüye müdahale etmemizi ve akışı kontrol etmemizi sağlarlar.

### break
<br>
break ifadesi içinde bulunduğu döngüyü sonlandırmak diğer bir deyişle döngüden çıkılması hizmetini sunar. Bu hususta öneminin yeniden vurgulanması gereken nokta "break" ifadesinin sadece kendine en yakın yani içinde bulunduğu döngü içerisinde geçerli oluşudur.----> İç içe döngüler örneğinde daha net anlaşılacaktır.

### Continue 
<br>
Continue ifadesi ise bulunduğu döngü içinde o anki çalışacak olan devir işlemini pas geçerek bir sonraki devir işlemini başlatır. Yine burada da vurgulanması gereken nokta "continue" ifadesinin sadece kendine en yakın yani içerisinde bulunduğu döngü içinde geçerli oluşudur.

## while döngüsü
<br>

JavaScript’te tekrar eden işlemlerde kodlarımızın karışmasını önlemek ve okunabilirliği artırabilmek için döngüler kullanırız. Bunlardan bir tanesi While döngüsüdür. While döngüsü oluşturabilmek için ilk olarak parametre olarak bir koşul vermemiz gerekmektedir verdiğimiz koşul sağlandığı sürece döngü devam eder. Bu koşul sınırsız olursa döngü de sonsuz kere devam eder ve biz bunu istemeyiz genel olarak sonlanacağı bir durumla döngü sonlandırılmalıdır.

Bunu ilk olarak sözde kod (pseudocode) olarak gösterebiliriz.

```javascript
while (kosul) {
    //Yapilacak islemler. 
}
```

Örnek:

```javascript
function samplePerson() {
    //collection
    const personArray = [
        {name: "Umut", surName: "Yalcin", age: 34},
        {name: "Umut", surName: "Yalcin", age: 35},
        {name: "Umut", surName: "Yalcin", age: 36},
        {name: "Umut", surName: "Yalcin", age: 37},
        {name: "Umut", surName: "Yalcin", age: 38},
        {name: "Umut", surName: "Yalcin", age: 39},
    ]

    let expectedAge = 30;

    while (expectedAge < 37) {
        expectedAge += 1;
        console.log("Deger arttirmak", expectedAge);
    }   
}

samplePerson()

Output : 
Deger arttirmak 31
Deger arttirmak 32
Deger arttirmak 33
Deger arttirmak 34
Deger arttirmak 35
Deger arttirmak 36
Deger arttirmak 37

```

### for/in Döngüsü 
<br>

Javascript for/in döngüsü ile bir javascript nesnesinin tüm özelliklerine ulaşabiliriz. 

Kullanım şekli;

```javascript 
for (key in nesne) {
   // çalıştırılacak kod blokları.
}
```

Nesne içerisindeki tüm key bilgilerine sırayla ulaşarak key 'e karşılık gelen value bilgisini alıyoruz.

Örneğin;
```javascript
function samplePerson() {
    //collection
    const personArray = [
        {name: "Umut", surName: "Yalcin", age: 34},
        {name: "Umut", surName: "Yalcin", age: 35},
        {name: "Umut", surName: "Yalcin", age: 36},
        {name: "Umut", surName: "Yalcin", age: 37},
        {name: "Umut", surName: "Yalcin", age: 38},
        {name: "Umut", surName: "Yalcin", age: 39},
    ]

    for (personArrayKey in personArray) {
        console.log('Person age : ', personArray[personArrayKey].age)
    }
}

samplePerson()

Output : 
Person age : 34
Person age : 35
Person age : 36
Person age : 37
Person age : 38
Person age : 39

```

### for/of Döngüsü 
<br>

Javascript for/of döngüsü ile iterable bir nesnenin tüm elemanlarına ulaşabiliriz.

Iterable nesneler yapı itibariyle elemanları üzerinde döngüler ile gezilebilir nesnelerdir. Örneğin array, set, map, string gibi javascript nesneleri iterable nesnelerdir.

```javascript
for (element of iterable) {
    // kod bloğu
}
```

**iterable** nesnenin her biri sırasıyla element değişkeni içerisine kopyalanır.

**element const, let ve var** ile tanımlanabilir.

```javascript 
    for (const p  of personArray) {
        console.log(p);
    }
Output : 
{name: "Umut", surName: "Yalcin", age: 34}
{name: "Umut", surName: "Yalcin", age: 35}
{name: "Umut", surName: "Yalcin", age: 36}
{name: "Umut", surName: "Yalcin", age: 37}
{name: "Umut", surName: "Yalcin", age: 38}
{name: "Umut", surName: "Yalcin", age: 39}
```

### forEach döngüsü
<br>
JavaScript'te forEach , döngü oluşturmamızı ve bu döngüyü sırayla çalıştırmamızı sağlayan bir array metodudur.

forEach fonksiyonu item, index, array olmak üzere 3 parametre alabilir.

Kullanımı : 
```javascript
arr.forEach(function(value, index, array) {
  // index ve array kullanmak opsiyoneldir
}
```

Örnek 

```javascript
//forEach
const carArray = [];
const carModels = ["Porche", "Tofaş", "Ferrari", "Volvo"];
carModels.forEach((x, index)=> {
    const carObject = {
        id: index,
        model : x 
    };
    carArray.push(carObject);
});

console.log('Car Array : ', carArray);

Output : 

Car Array : [
    {id : 0, model: "Porche"},
    {id : 1, model: "Tofaş"},
    {id : 2, model: "Ferrari"},
    {id : 3, model: "Volvo"},
]
```

### map fonksiyonu 

Map methodundan önce javaScript'te Array(Dizi)'leri kısaca hatırlayalım. Diziler aslında bir veri yapısıdır ve bellek üzerinde aynı tipte veri tutabilmemizi sağlar. Bir değişken tanımladığımızı düşünürsek eğer bu bizim için tek bir değer tutacaktır. Diziler ise bir değişkenin altında birden fazla değer tutabilmemizi sağlar. Daha sonra bu tanımladığımız dizinin elemanlarına farklı farklı ulaşmak istersek indeks üzerinden ulaşabiliriz.

Array Map metodu, parametre ile kendisine gönderilen dizinin her bir elemanı için ayrı ayrı çalışır ve belirlenen işleme tabi tutup, yeni bir dizi meydana getirir. Örneğin; elimizdeki dizinin tüm elemanlarının iki katını almak istediğimiz zaman kullanabiliriz. Array Map metodu, kendisine parametre olarak gönderilen diziye herhangi bir müdahalede bulunmaz. Mevcuttaki dizinin her elemanını belli bir işleme tabi tutarak yeni bir dizi oluşturur. Bu kısım önemlidir.

Öncelikle Array Map metodunun kullanımına bir göz atalım.

```javascript
array.map( function(value, index, array), this)
```

forEach yerine map metot'dunu kullanabiliriz.  

```javascript
const carModelss = carModels.map((value, index)=> {
    return {
        id: index,
        model : value
    };
});

console.log('CarModels', carModelss);

Output : 
CarModels : [
    {id : 0, model: "Porche"},
    {id : 1, model: "Tofaş"},
    {id : 2, model: "Ferrari"},
    {id : 3, model: "Volvo"},
]
```

### filter()
<br>

Bir Array metodu olan filter(), dizi elemanlarını döngüye alıp, istediğimiz koşula sahip olanlarla yeni bir dizi oluşturmak için kullanılır.

```javascript
const hasInSaleCars = [
    {id: 0, model: 'Porsche', inSale: true},
    {id: 1, model: 'Toyota', inSale: false},
    {id: 2, model: 'Ferrari', inSale: false},
    {id: 3, model: 'Volvo', inSale: true},
]

const inSaleCars = hasInSaleCars.filter( x => x.inSale);
console.log('InSaleCars', inSaleCars);

Output : 
InSaleCars [
    {id: 0, model: 'Prosche', inSale:true},
    {id: 3, model: 'Volvo', inSale : true}
]
```

### find metot
<br>
bir dizi içirisinde arama yaparken ilk bulduğu değer yada objeye döner. 

```javascript
const findCars = hasInSaleCars.find(x => x.inSale);
console.log('FoundCars', findCars);
```



