# **Fonksiyon Nedir?**

Fonksiyonlar adından anlaşılacağı gibi belli bir amacı gerçekleştirmek için oluşturulmuş yapılardır. Koda işlevsellik katmak için bunu sık sık kullanırız. 

## Fonksiyonu Adlandırmak

- İlk olarak **function** ibaresinden sonra fonksiyon adı yazılır. Bir fonksiyonu adı varsa bunlara Normal-Adlandırılmış Fonksiyonlar **(Regular/Named Functions)** deriz.

- Burada önemli olan kodun okunabilirliği açısından fonksiyonu işlevine uygun bir biçimde adlandırmaktır, dahası bu bir işlevi belirttiği için fonksiyon adımız bir eylem olmalıdır. Bunun için bazı ön ekler kullanabiliriz.
- Örneğin değer almak istediğimiz bir fonksiyon adında ön ek olarak **get** kullanabiliriz.
- Bununla birlikte şunu da unutmamalıyız istendiğinde adı olmayan anonim bir fonksiyon da kullanılabilir. 

## Fonksiyon Parametreleri ve Gövdesi

- Sonrasında parantezler içinde alacağı parametreler belirlenir. Parametre olması zorunlu olmadığı gibi fazla parametre geçmek kodun okunurluğunu bozabilir.
- Parametre alan fonksiyonları kullandığımız zaman o parametrelere kendimiz bir değer atarız. Atanan bu değere argüman adı verilir.
- Son olarak da süslü parantezleri açarak içine çalışmasını istediğimiz JavaScript kodunu eklenir. Bu JavaScript koduna fonksiyonun gövdesi- body denir.
- Yukarıda fonksiyonu adlandırmadan da kullanabileceğimizden bahsetmiştik: Anonim fonksiyonların (Anonymous Functions) bir adı yoktur ve bir değişkene atanarak yeri geldiğinde kullanılırlar.
- Değişken adı kullanılarak çağrıldıkları için birden çok anonim fonksiyonu aynı dizide kullanabilirsiniz.
- Dahası bir değişkene atandıklarından bu değişkeni başka bir fonksiyonun parametresine koyarak callback (geri arama) yapabilirsiniz.

```javascript

```

## Değer Döndüren Fonksiyonlar
<br>

Bazen fonksiyonun geriye göndereceği değeri ekrana çıktı vermek yerine bir değişken ya da başka bir fonksiyonda daha sonra kullanmamız gerekebilir. Bu gibi durumlarda fonksiyon gövdesinde **return** ifadesini kullanırız.

```javascript
function returnSomething () {
    const a = 5;
    const b = 6;

    return a + b;
}

console.log(returnSomething());
```


## Fonksiyon Kapsamı

JavaScript'de fonksiyon içinde tanımlamış olduğunuz değişkene fonksiyon dışındaki herhangi bir yerden erişemezsiniz. Çünkü o değişken tanımlandığı fonksiyonun kapsamındadır. Bu sebeple değişkenimiz o fonksiyon içinde kullanılan bir lokal değişkendir. Fakat tanımlanan fonksiyon tanımlandığı kapsamdaki diğer değişkenlere erişebilir. Yani fonksiyon kendi dışında tanımlanan fakat aynı kapsamda bulunduğu global değişkenlere de erişebilir. 

```javascript
console.log("GLOBAL ===>", globalScope);
//console.log("FUNCTION ===>", fnScopeVariable);


function functionScope2() {
    const fnScopeVariable = "FUNCTION SCOPE VARIABLE";    
    console.log("GLOBAL ===>", globalScope);
    console.log("FUNCTION2 ===>", fnScopeVariable);

    if(globalScope) {
        let ifScopeValue = "IF SCOPE VALUE";
    }    
}

functionScope2();
```

## Callback Fonksiyonlar ve Asenkron Çalışma

<br>

Senkron dediğimiz kavram şunu ifade etmektedir: kodumuz yukarıdan aşağı doğru sırayla işlenir ve bir satırdaki işlem bitmeden bir sonraki satıra geçilmez. Asenkron yapıda ise fonksiyonların birbirlerini beklemelerine gerek yoktur. Uzun zaman ala veya farklı görevleri olan fonksiyonlar aynı anda çalışabilir. JavaScript asenkron yapıdaki bir programlama dilidir. 

## Fonksiyon Bildirimi(Function Declaration)

<br>

Fonksiyon oluşturmak için fonksiyon bildirimi yapabiliriz. Mesela;

```javascript
function functionName() {
    //...
}

functionName()

```

function anahtar kelimesini takiben fonksiyon ismi ve parantez içerisinde parametreler(virgülle ayrılacak şekilde) ve son olarak da süslü parantez içerisinde fonksiyonun içereceği kod(ki bu bölüme fonksiyonun gövdesi(body) denir.) sırasıyla fonksiyonu oluşturur.

Yukarıda  functionName() şeklinde de fonksiyon çağırlma işlemi yapılır. Fonksiyon çağrıldığı anda fonksiyon bildiriminin olduğu yere gider ve fonksiyon gövdesinde tanımlı olan işlemleri yapar eğer bir sonuç geri döndürülmesi istenmişse de sonucu geri döndürür istenmemişse işlemlerini yapar ve fonksiyon sonlandırılır.  


## Fonksiyon İfadeleri (Function Expressions)

### Arrow Functions

Fonksiyon yaratmanın bir diğer yolu ise ES6 ile birlikte hayatımıza giren, daha okunabilir daha basit bir syntax yapısına sahip olan arrow functions yapısıdır.

```javascript
//arrow function
const returnSum = (a, b) => {
    return a + b;
}

console.log(returnSum(2,5))
Output : 7
}
```

yukarıdaki arrow fonksiyonunu tek satır halinde parantezleri kaldırarak da yazabiliriz ve aynı sonucu alırız. 

```javascript
//arrow function
const returnSum = (a, b) => return a + b;

console.log(returnSum(2,5))
Output : 7
}
```

### Recursion

Direkt örnek vererek açıklamak gerekirse, yapmamız gereken bir task var diyelim ve biz bu task'i birden fazla parçaya ayırıp daha basit halde yazmak istersek veya bu task'ı aksiyon alacak bir fonksiyona ve bu task'i daha basit bir task'e dönüştürmek istersek veya belirli bir data yapısı ile ilgileniyorsak, recursion bu noktada bize yardımı dokunabilecek bir programlama pattern'idir diyebiliriz.

Bir fonksiyonu çağırdığımız zaman o fonksiyon bir çok fonksiyonu daha çalıştırabilir. Kısaca bir fonksiyon kendisini tekrar çağırıyor ise biz buna recursion diyoruz.

```javascript 
//recursion : üs alma fonksiynunu 
function pow(x, n) {
    if (n == 1)
        return x;

    return x * pow(x, n - 1)
}

console.log(pow(5,2))
```

### Variable Scope, Closure

Bir fonksiyonu istediğiniz bir an oluşturabiliriz, başka bir fonksiyona parametre olarak girebilir ve yazdığımız programın çok farklı bir yerinde biz tekrar bu fonksiyonu çalıştırabiliriz. JavaScript function-oriented bir dil olduğundan bize bir çok özgürlük sağlar.

### Code Blocks

Eğer bir değişkeni bir code bloğu içerisinde tanımlarsak {...}, o değişken sadece bu code block arasında ulaşılabilir olur.

If, for, while gibi döngüler de değişkenleri code block'larında tanımlar ve sadece orada ulaşılabilirler.

```javascript
//fucntion scope
function functionScope2() {
    const fnScopeVariable = "FUNCTION SCOPE VARIABLE";    
    console.log("GLOBAL ===>", globalScope);
    console.log("FUNCTION2 ===>", fnScopeVariable);

    if(globalScope) {
        let ifScopeValue = "IF SCOPE VALUE";
    }    
}

functionScope2();
```

### Nested Functions

Nested Functions ( İç içe fonksiyonlar ) JavaScript'te yaygın olarak kullandığımız bir yapı. Bir Fonksiyon içerisinde başka bir fonksiyonu tanımladığımız zaman buna nested functions yapısı diyoruz aslında.

```javascript 
//nested functions
function programDetayi(bootcamp, organizasyon) {
    const fullNameProgram = () => bootcamp + ' ' + organizasyon;

    console.log('basladi : ', fullNameProgram());
    console.log('bitti   : ', fullNameProgram());
}


programDetayi('NodeJS', 'ATEZ')
```

