# Node.js Built-in Modules

## procesess : 

node js  process'ler üzerinde yada servisler üzerinde çalışır. 

```javascript
import process from 'node:process';

console.log(process.argv)

// Komut satırından kurulumu yapılıyor. 
npm install process
```

## NPM NEDİR?

npm javascript betik dili için geliştirilmiş olan ve Node.js'in standart olarak kabul ettiği bir paket yönetim sistemidir. npm komut satırından çalıştırılır ve uygulamalar için bağımlılık yönetimi sağlar. 

- loopback
- lodash
- react 


npm install process  yazıp projemize proceess eklediğimizde  bununla beraber
- package.json
- package-lock.json  dosyalarını ekmektedir. 

## package.json  

Uygulamanın kendisine ait bağımlı olduğu package yani kütüphaneleri gösterir. 

```json 
{
  "dependencies": {
    "process": "^0.11.10"
  }
}
```


yukarıdaki ifadede  bu proje **dependencies** olarak  **process**' e bağımlıdır. 

**type** : 'Module'  eklentisi yapıldıktan sonra

```json 
{
  "type": "module",
  "dependencies": {
    "process": "^0.11.10"
  }
}
```

şeklinde **process**' i module olarak atamasını **type** değişkenine atadıktan sonra .js dosyasından module olarak çağırmak için aşağıdaki ifadeyi kullanabiliriz. 

```javascript
    import process from 'process';
    //...
```

## package-lock.json  

```json
{
  "name": "Server",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "dependencies": { 
        "process": "^0.11.10"
      }
    },
    "node_modules/process": {
      "version": "0.11.10",
      "resolved": "https://registry.npmjs.org/process/-/process-0.11.10.tgz",
      "integrity": "sha512-cdGef/drWFoydD1JsMzuFf8100nZl+GT+yacc2bEced5f9Rjk4z+WtFUTBu9PhOi9j/jfmBPu0mMEY4wIdAF8A==",
      "engines": {
        "node": ">= 0.6.0"
      }
    }
  }
}
```

yüklenilen paketin ne olduğunu ve bu paketin içinde hangi **dependencies** olduğu bulunmaktadır. package-lock.json olmasının sebebi; projelerde cashleme yapabilmedir. cash'leme yapabilmenin amacıda bu paketi sürekli yüklenmesi gerekebilir. Yani tekrar tekrar install etmek yerine local cash' de kurulu olan paketi kurmasını sağlıyor.  Daha hızlı olmasını sağlıyor. 

- **node_modules** kısmı ise npm paketi yüklendiği zaman kütüphaneleri tuttuğu yer. 

### Javascript Dosya Formatları 
//Commonjs   - .cjs
```javascript
    const process = require('process')
    //...

    //yazdıktan sonra komut satırından 
    $: node builtin.cjs   yazıp çalıştırabiliriz. 
```


//Modulejs   - .mjs
```javascript
    import process from 'process';
    //...


    //yazdıktan sonra komut satırından 
    $: node builtin.mjs   yazıp çalıştırabiliriz. 
```

//Typescript - .ts 

//Javascript - .js



```javascript
    console.log(process.env)
```

burda env ise bilgisayarımız hakkındaki ortamımız hakkında bilgilerin 
tutulduğu bilgileri vermekedir. 

console.log("Development env", process.env.NODE_ENV)

yazıp çalıştırdığımızda,
Development env undefined   hatası verecektir. Çünkü NODE_ENV tanımlı değil. 

Biz bunu tanıtmak için aşağıdaki kodu çalşıtıralım. 

framework yada bir sistem kullanıldığında package.json içinde 
"scripts": {
    "start": "NODE_ENV=prod node builtin-function.js",
    "dev": "NODE_ENV=development node builtin-function.js"
  } 

**npm run start** veya **npm run dev**

şeklinde ifadeler olacaktır. 

Bunu yazdıktan sonra artık 

**npm run start**   dediğimiz andan itibaren npm, script içindeki start
yazan kısım içine vermiş olduğumuz komutu çalıştıracaktır. 



// npm security flag
// bundlephobia


## os 
## fs



Ödevler

1 - Bir text dosyasının içine istediğimiz cümleyi yazacak bir fonksiyon yazılması (New line olarak yazılması gerekmekte)

2 - Bir text dosyasının belirtilen lokasyondan istenilen lokasyana bir kopyasının oluşturulması için fonksiyon yazılması

3 - Belirtilen lokasyandaki dosya veya dosyaları zip dosyası haline getirecek bir fonksiyon yazılması

4 - HTTP server yaratarak filesystem de pages klasoru altındaki farklı uzantılarda ki sayfaları serve edecek bir server yazılması (js, html, css). (Ipucu olarak regular expression)

5- TODO cli uygulamasının diğer örneklerinin tamamlanması (Update, Check task vs)

6 - TODO cli uygulamasın checkbox özelliği ekleyerek marked duruma geldiği zaman onu işaretlemiş olacak çalışma (npm üzerinden yeni paket yükleyerek deneyebilirsiniz)

7  - TODO cli commonjs den module olarak çevirilmesi


8 - (Opsiyonel ama artı puan yazacak) File Manager cli uygulaması yazılması
8 numaralı task özellikleri;
1- Bulunduğu lokasyanda ls komutu ile tablo halinde lokasyandaki dosyaları tablo halinde gösterebilmek
2- cd komutu ile istenilen lokasyona gönderilme
3- upFolder komutu ile bir üst foldera gitme sağlanması
4- os komutlarının desteklenmesi (Örnek olarak os --username dediğim de kullanıcı adımı alabilmeliyim)
5 - Kopyalama işlemi ve rename işlemi yapabilmeliyim

Yaratıcılık konusunda denilenlerin üstüne ekleyecekleriniz değerlendirmede katkı sağlayacak arkadaşlar.

Dipnot: Bu yazılanların hepsini Typescript ile entegre ederek yazılması gerekmektedir.

Araştırma Konuları

1- RegEx
2 - HTTP Status Codes
3 - Nodejs Events
4 - Semantic Versioning
5 - Git Commit Conventions