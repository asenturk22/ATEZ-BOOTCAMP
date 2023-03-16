# Dizi(Array) Oluşturmak ve Dizi İçindeki Elemanlara Ulaşmak

JavaScript'te array(dizi) tanımı birden çok value(değer) saklamamızı sağlar. Bu diziler içinde string, number, boolean, object, tipinde veriler saklanabilir. Diziler de object(nesne) tipindedir. Bir dizi oluşturmak için yapmamız gereken dizi ismini verip eşittir dedikten sonra köşeli parantezler içinde dizi elemanlarını yazmak. Her eleman arasında bir virgül koymamız gereklidir.

```javascript
//Array Data
let testArray = [
    "ATEZ-BOOTCAMP", "123", testObj = {
        sth : "ATEZ BOOTCAMP",
        number : 123,
        isTrue : true,    
    }
]
```

### Dizi İçerisindeki Elemanlara Erişim

Her dizi elemanının index değeri vardır. İlk elemanın index değeri 0 dır. Buna göre ikinci elemanın index değeri 1 ve böylece devam eder. Bu index değerlerini kullanarak bizler dizi elemanlarına erişebiliriz. Örneğin;

```javascript
console.log(testArray[0]);
console.log(testArray[1]);
console.log(testArray[2].isTrue);

Output : 
ATEZ-BOOTCAMP
123
true
```

## Array Nedir?
<br>

Programlamanın temel amaçlarından birisi verileri saklamak ve manipüle edebilmektir. Arrays (diziler) bu işe yaramaktadır. Array'lerde bir değişken (variable) tanımlayarak birden fazla değeri (value) saklayabilir ve onları daha sonra çeşitli metotlarla kullanabiliriz. Array oluşturmak için köşeli parantez kullanırız. Oluşturulan array'de her bir değere 'element' (eleman) denir.

```javascript
let favoriArabalar = ['audi', 'volvo', 'mercedes']
```

Bir array'in içine yazabileceğimiz elemanların veri tipi (data type) önemli değildir. Örneğin aynı array'de bir string ile number değer olarak atanabilir.

```javascript
let randomDizi = [2023, 'Atez-Bootcamp', true]
```


### Array İçindeki Elemanlara Ulaşmak

Array içindeki bir elemana ulaşılmak istendiğinde yazılış sırasına göre çağırılmaktadır. Elemanların yazılış sıralarını numaralandırmaya 0' dan başlarız. Bu demek oluyor ki bir array'e yazdığımız ilk elemanın (yani birinci sırada yazdığımız eleman) numarası 0'dır. Elemana ulaşmak için önce dizinin değişken adı yazılır daha sonra köşeli parantez açılarak elemanın numarası girilir.

```javascript
console.log(testArray[0]);
console.log(testArray[1]);
console.log(testArray[3].isTrue);

```

Yukarıda yaptığımız örnekte görüldüğü gibi dizinin içinde 3 tane eleman varken çağırdığımız son elemanımızın numarası 2'dir. Bu demek oluyor ki ((dizideki toplam eleman sayısı) - 1) bize dizinin son elemanını verir.

O halde içinde kaç tane eleman olduğunu bilmediğimiz bir dizinin son elemanına ulaşmak için şu yöntemi kullanabiliriz.

```javascript
console.log(testObj.length)
```

### Type Of Array

Bir array'in veri tipi object'dir. 

```javascript
console.log(typeof testObj);

Output : object
```

### Array'in Let Veya Const İle Deklare Edilmesi Arasındaki Farklar

Array'leri tanımladığımız değişkenin let veya const ile deklare edilmesi arasında fark bulunmaktadır. Let ile deklare ettiğimiz bir array daha sonra yeniden tanımlanabilirken const ile deklare edilen dizilerde değişiklik yapamayız. 

```javascript
let gunler = ['pazartesi','sali','carsamba'];

gunler = ['cuma','cumartesi','pazar']; 
console.log(gunler); 

Output : ['cuma','cumartesi','pazar']
```

yukarıdaki dizi let ile deklare edildiğinden değiştirilebildi ancak aynı örneği const ile deklare ettiğimizde aşağdaki gibi bir hata verecektir. 

```javascript
const gunler = ['pazartesi','sali','carsamba'];

gunler = ['cuma','cumartesi','pazar']; 
console.log(gunler); 

Output : 'TypeError: Assignment to constant variable' 
```

yukarıdaki kodu **const** ile düzenlediğimizde **"TypeError: Assignment to constant variable "** hatasını alırız.

const ile deklare ettiğimiz bir array yeniden tayin edilemese de içerisindeki elemanlara erişme ve değiştirme noktasında let ile aynıdır.


## Diziye Yeni Eleman Eklemek, Çıkartmak ve Güncellemek

### Diziye Yeni Eleman Eklemek

Dizilere **push(), unshift() ve splice()** metotlarıyla yeni eleman ekleyebiliriz.

#### push() metot
<br>

push() metot, var olan bir dizinin sonuna eleman eklemeye yarar.

```javascript

//Dizilere eleman eklemek
//-> push

testArray.push('NodeJS');
console.log(testArray);
```

#### unshift() metot
<br>

**unshift()** metot, var olan bir dizinin başına eleman eklemeye yarar.

```javascript
testArray.unshift('NodeJS');
console.log(testArray);
```

#### splice() metot
<br>

**splice()** metot diziye hem eleman eklemek için hem de eleman silmek için kullanılır. Metodun ilk parametresi işlemin yapılacağı index numarasını, ikinci parametre ise kaç elemanın silineceğini belirtir.

Eleman eklemek için;

```javascript 
testArray.splice(0, 0, "Javascript");
console.log(testArray);
```

### Diziden Eleman Silmek

Dizilerden pop(), shift() ve splice() metotlarıyla eleman silebiliriz.

### pop() metot

pop() metot, var olan bir dizinin en sonundaki eleman silmeye yarar.

```javascript
testArray.pop();
console.log(testArray);
```

### shift() metot

shift() metot, var olan bir dizinin başından eleman silmeye yarar.

```javascript
testArray.shift();
console.log(testArray);
```

### splice() metot

splice() metot diziye hem eleman eklemek için hem de eleman silmek için kullanılabileceğini yukarda belirtmiştik. Metodun ilk parametresi işlemin yapılacağı index numarasını, ikinci parametre ise kaç elemanın silineceğini belirtir.

Eleman silmek için;

```javascript 
testArray.splice(0, 0, "Javascript");
console.log(testArray);
```

şeklinde kullanılır. 


## Dizide Eleman Güncellemek

Dizi içerisindeki her bir eleman 0' dan başlayan bir indeks numarasına sahiptir. Bu sayede indeks numaralarını kullanarak güncelleme yapabiliriz.

```javascript
testArray[1] = 1234
console.log(testArray);
```

## Dizide eleman aramak

### includes()
<br>
Includes metodu bir elemanın dizi içerisinde bulunup bulunmadığını kontrol eder. Boolean (true/false) olarak çıktı alınır.

```javascript
console.log(testArray.includes(1234))
Output : true
```

## Dizilerdeki metotlar

```javascript
let arrayNumber1 = [1,2,3,4,5,6];
let arrayNumber2 = [7,8,9,10,11,12];
console.log(arrayNumber1)
console.log(arrayNumber2)
console.log()
```

### slice()
<br>

- Slice (dilimleme) metodu bir dizinin bir kısmının kopyasıyla yeni bir dizi oluşturmamıza olanak sağlıyor.
- Parantez içerisine ise kopyalamak istediğimiz elemanların aralığını başlangıç ve bitiş indeksleri olacak şekilde iki parametre olarak giriyoruz. Bitiş indeksindeki değerin aralığa dahil olmadığını unutmayalım.
- Bu metot uygulandığı dizinin orijinal halini değiştirmiyor bu yüzden yeni oluşacak diziyi farklı bir değişkende saklıyoruz.

```javascript 
let newArray = testArray.slice(0,2);
console.log(newArray);

Output : ["ATEZ-BOOTCAMP", 1234]
```

### join() metodu 
<br>

- Bazen Dizi içerisinde topladığınız verileri, string (sözdizimi) olarak yazdırmak isteyebilirsiniz. Join metodu bu konuda yardıma yetişiyor.
- Parantez içerisine dizi elemanları arasına koymak istediğimiz string'i parametre olarak girebiliriz. Eğer bir parametre vermezsek virgül bastırır.

```javascript
const newStrArray = newArray.join();
console.log(newStrArray);
Output : ATEZ-BOOTCAMP,1234
```

### concat()
<br>
Bu metot farklı dizileri birleştirip tek bir diziye çevirmemizi sağlıyor.

```javascript
let numbers = arrayNumber1.concat(arrayNumber2);
console.log(numbers);

Output : [1,2,3,4,5,6,7,8,9,10,11,12]
```

### forEach() 

forEach() metot' u parametre olarak bir fonksiyon alır ve o fonksiyon ile dizi üzerinde gezerek ilgili işlemleri yapar.   

```javascript
arrayNumber1.forEach(function(arrayNumber1){
    console.log(arrayNumber1 * 5);
})

Output : 
5
10
15
20
25
30
```

şeklinde dizi üzerinde gezerek her bir elemanı 5 ile çarpıp sonucu ekrana yazar. 

### map() metot'du
<br>

Map metodu da forEach gibi kendisine verilen fonksiyonu dizinin her elemanı için uygular fakat forEach'ten farklı olarak sonucu yeni bir dizide tutar. Orijinal dizi olduğu gibi kalır. 

```javascript
let array5Numbers = arrayNumber1.map(function(sayi) {
    return sayi * 5;
})
console.log(array5Numbers);

Output : [5, 10, 15, 20, 25, 30]
```

### some() 
<br>
parametre olarak bir fonksiyon alır ve bu fonksiyon dizinin her elemanı için yapacağı işlemi yapar eğer dizi içindeki eleman fonksiyonun işini başarılı bir şekilde yerine getirmiş ise **true** getirememiş ise **false** deeri ile döner. Örneğin arrayNumber1 dizisinde 5'ten büyük bir değer var mı? sorusunu 

<br>

```javascript
console.log(arrayNumber1.some(function(sayi) {
    return sayi > 5
}))
Output : true
```

### every()
<br>

- every metodu belirtilen bir koşulun dizideki tüm elemanlara uyup uymadığını kontrol ederiz.
- some metodunda olduğu gibi, Boolean yani true veya false olarak döner.
- true dönebilmesi için dizideki tüm elemanların fonksiyondaki koşula uyması gerekir.

<br>

```javascript
console.log(arrayNumber1.every(function(number) {
    return number < 5
}))

console.log(arrayNumber1.every(function(number) {
    return number > 7
}))
```

### filter()
<br>

- filter metodu bir dizi içerisindeki belirli bir koşulu sağlayan elemanlar ile yeni bir dizi oluşturmamıza dolayısıyla dizi elemanlarını filtrelememize yarıyor.
- Yeni oluşacak diziyi bir değişkende saklıyoruz.
- Orijinal dizi bozulmuyor.

<br>

```javascript
let filterArrayNumber = arrayNumber1.concat(arrayNumber2).filter(function(sayi){
    return sayi > 4 && sayi < 10;
}) 
```

### find()
<br>

- Bu metot belirtilen koşula uyum sağlayan dizi elemanını bulmamızı sağlar.
- Diğer metotların aksine find metodu elemanın kendisini döner.
- Koşulu sağlayan birden fazla eleman varsa, bulduğu ilk elemanı döner.
- Koşulu sağlayan bir eleman bulamazsa undefined döner.

<br>

```javascript
//find()
let findNumber = arrayNumber1.find(function(number) {
    return number === 5;
})

console.log(findNumber);

Output : 5

findNumber = arrayNumber1.find(function(number) {
    return number === 9;
})

console.log(findNumber);

Output : undefined
```

### sort()
<br>

- Bu metot, dizi içerisindeki elemanları sıralamaya yarar.
- Orijinal dizi sıralanmış şekilde döner. (Yani dizi mutate eder.)
- Eğer parametre olarak bir fonksiyon verilmezse dizi elemanları string'e çevrilir ve UTF-16 değerlerine göre sıralanır.
- Artan veya azalan olarak sıralamak için farklı bir yol izlenmelidir.

```javascript
arrayNumber1[1] = 6;
arrayNumber1[5] = 2;
console.log(arrayNumber1);
Output : [1,6,3,4,5,2] 

console.log(arrayNumber1.sort());
Output : [1,2,3,4,5,6] 
```

### reduce()
<br>
- Bu metot dizimizi yalnızca bir değere indirger.
- Parantez içerisine parametre olarak bir fonksiyon ve accumulator'ün (toplayıcının) başlangıç değeri girilir.
- Bu metot orijinal diziyi değiştirmez. (Mutate etmez.)
- Tam olarak ne yaptığını anlamak için örnekleri inceleyelim.

```javascript
function indirgeyici(akumulator, sayi) {
    return akumulator + sayi;
}

console.log(arrayNumber2.reduce(indirgeyici, 0));
Output : 57
```






    









 












