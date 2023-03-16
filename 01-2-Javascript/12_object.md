# Object(Nesne) Nedir? Nasıl Oluşturulur?

## JavaScript Object

JavaScript’in en temel veri tipi kabul edilen objeler, son derece önemlidir ve nasıl çalıştıklarını bilmek bir front-end developer için hayati önem taşır. Bu yazıda JavaScript objelerinin teorik çalışma mantığını örneklerle göreceksiniz.


## Objenin basit tanımı

Objeler, içerisinde birden fazla değeri depolayan yapılardır. Property olarak bilinen bu değerler primitive(String,number, boolean vb.) veya başka objeler olabilirler ve her bir değer string veya sembol ile isimlendirilebilir.

```javascript

```

Objeler değiştirilebilen veri tiplerindendir. İçerdiği propertyler, objenin kendisi const keyword ile atanmış olsa bile değiştirilebilirler. Fakat primitive değerlerden farklı olarak objeler, referans yoluyla değiştirilirler ve değişen obje, yeni bir hafıza adresine sahip olur. Çünkü primitive değerlerin aksine objeler, JavaScript istemcisinin belleğinde, sahip oldukları değerlerle değil, sistemin atadığı hafıza adresleriyle kayıtlıdırlar.

```javascript

```

## Obje Oluşturmak

Objeler üç şekilde oluşturulabilir. 
- Object literal, 
- new Object keyword’ü ve 
- Object.create() 

fonksiyonuyla. Object literal ve new Object yöntemleri, normal bir objeyi oluştururken kullanılan yöntemlerdir. Object.create() yöntemi ise, mevcut bir objeden kalıtım yoluyla bazı bilgiler alarak yeni bir obje oluşturmaya yarar.

### Object Literals
<br>

JavaScript’te obje oluşturmanın en kolay yolu olarak bilinir. Süslü parantez **{}** kullanılarak oluşturulan objenin içerdiği property'lerin değerleri iki nokta **:** işaretiyle belirtilir. Property'ler birbirlerinden virgül , ile ayrılır. 

```javascript

```

### New Keyword ile Obje Oluşturmak
<br>

New keyword'ü yeni bir obje oluşturup başlatır. Oluşturulurken belli başlı bazı constructor invocation’lardan(kurucu çağrılarından) birini(Object, Array, Date vb.) yazmak ve sonuna mutlaka fonksiyon çağrısı olduğunu belirten parantezleri () eklemek gerekir. Fonksiyon çağrısı, objenin başlatılması için olmazsa olmazdır.

```javascript

```


objemizi new keyword ile initialize ettikten sonra property'lerini atadık. Dikkat, Object literal’dakinden farklı olarak iki nokta : ve süslü parantez {} kullanmadık.


### Object Prototype
<br>

Son yöntem olan **Object.create()** yöntemine geçmeden önce, prototype hakkında bilgi sahibi olmak, son yöntemi anlamak için önemli. Javascript’te hemen her objenin bağlantılı olduğu ikinci bir obje vardır ve bu ikinci objelere prototype denir. Mevcut obje, ikinci objeden yani prototype’ından kalıtım(inheritence) alır. Object literal yöntemiyle oluşturulan her objenin prototipi aynıdır: **object.prototype**. New keyword'ü kullanılarak oluşturulan objelerin ise nereden kalıtım alacakları, function invocation’larına göre değişiklik gösterebilir. Örneğin **new Date()** objesi, hem **object.prototype**’ın kalıtımını alırken hem de date.prototype’dan kalıtım alır.


### Object.create

Obje oluşturmadaki son yöntem olan object.create() yöntemi, yeni bir obje oluştururken nereden kalıtım alacağına karar vermemizi sağlayan bir yöntemdir. 

```javascript

```


Herhangi bir yerden kalıtım almasını istemediğimiz bir obje oluşturmak istediğimizde null parametresini atamak yeterli olacaktır.

