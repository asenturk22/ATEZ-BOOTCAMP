### NodeJS Events (NodeJS Olay Yöneticisi)

Olaya dayalı programlama Node.js’in en önemli özelliklerinden biridir.

Bilgisayardaki her eylem bir olaydır.

Eylemlere örnek olarak; bilgisayarın açılması, dosyanın açılması, dosyanın kapatılması, web sayfanın açılması, klavyeden bir tuşa basılması gibi örnekler verilebilir.

Node.js events modülü çeşitli eylemler için olay tanımlamaya imkan verir.

Modül içerisinde özel olay eklemek kaldırmak için kullanılan EventEmitter nesnesine sahiptir.

Projeye events modülünü dahil etmek için aşağıdaki sözdizimi kullanılır.

```javascript
'use strict';

const events = require('events');
const eventEmitter = new events.EventEmitter();
```

**EventEmitter** nesnesi içerisinde yer alan **on** metodu ile bir olay oluşturulur.

```javascript
function merhaba() {
  console.log('Merhaba Dünya');
}

eventEmitter.on('yaz', merhaba);
```
Daha sonra kullanılmak üzere yaz isminde bir olay oluşturduk ve bu olay tetiklenince merhaba isimli fonksiyonun çalıştırılmasını sağladık.

Bir olayı tetiklemek için EventEmitter nesnesi içerisinde yer alan emit metodu kullanılır.

```javascript
eventEmitter.on('yaz', merhaba);
eventEmitter.emit('yaz');
```

Kodlar çalıştırıldığından aşağıdaki sonuca benzer bir sonuç verecektir.

```javascript
node index.js
Merhaba Dünya
```

Olay için tanımlanmış fonksiyona parametre geçirilmesi gerekebilir.

Parametre geçirilmesi olay tetiklemek için kullanılan emit metoduna ek parametrelerin yazılmasıyla sağlanır.

```javascript
'use strict';

const events = require('events');
const eventEmitter = new events.EventEmitter();

function mesaj(msj) {
  console.log(msj);
}

eventEmitter.on('mesaj', mesaj);

eventEmitter.emit('mesaj', 'Dışarıdan bir mesaj');
```

Bazen bir olayın sadece bir kere gerçekleşmesi istenebilir.

Bir olayın sadece bir kere gerçekleştirilmesi için EventEmitter nesnesine ait once metodu kullanılır.

```javascript
'use strict';

const events = require('events');
const eventEmitter = new events.EventEmitter();

function merhaba() {
  console.log('Merhaba Dünya');
}

eventEmitter.once('yaz', merhaba);

eventEmitter.emit('yaz');
eventEmitter.emit('yaz');
eventEmitter.emit('yaz');
```

> Kaynak : https://www.yusufsezer.com.tr/node-js-events/