# Node.Js - Fonksiyonlar (Functions)

## Fonksiyon Nedir?

Bir uygulama geliştirirken bir matematiksel hesabı onlarca kez yaptığınızı, veritabanından aynı veriyi defalarca çektiğinizi düşünün. Bu şekilde yazılmış kodların bakımı da okunması da oldukça zor olurdu. İşte tam da burada devreye **fonksiyon** giriyor.

**Fonksiyonlar**, birçok yerde kullanacağınız kod parçalarını bir kez yazmanızı, ihtiyacınız olduğu zaman sadece tanımladığınız fonksiyon ismiyle çağırarak kod tekrarından kaçınmanızı sağlar.

## Fonksiyon Tanımlama

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
Yukarıda ki  ifadeler fonsiyon içerisinde yapılabilecek işlemleri ifade etmektedir.  

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