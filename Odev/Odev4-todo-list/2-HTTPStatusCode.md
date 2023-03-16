### **2 - HTTP Status Codes**
<br>
HTTP yanıtı durum kodları, belirli bir HTTP isteğinin başarıyla tamamlanıp tamamlanmadığını gösterir. Yanıtlar beş sınıfa ayrılmıştır:

|  |HTTP Durumları           |    Kodları    | 
|-:|--                       |:-:            |
|  |Bilgilendirici yanıtlar  | `100` - `199` |  
|  |Başarılı yanıtlar        | `200` - `299` |
|  |Yönlendirme mesajları    | `300` - `399` | 
|  |İstemci hatası yanıtları | `400` - `499` |
|  |Sunucu  hatası yanıtları | `500` - `599` | 


#### Bilgilendirici Yanıtlar

`100` : 

`101` :

`102` :

`103` :

#### Başarılı Yanıtlar

<br>

`200 OK` : İstek başarılı oldu. "Başarı"nın sonuç anlamı HTTP yöntemine bağlıdır:

- **GET:** Kaynak alındı ​​ve mesaj gövdesinde iletildi.
- **HEAD:** Temsil başlıkları, herhangi bir mesaj gövdesi olmadan yanıta dahil edilir.
- *PUT veya POST:* Eylemin sonucunu açıklayan kaynak, mesaj gövdesinde iletilir.
- **TRACE:** Mesaj gövdesi, sunucu tarafından alınan istek mesajını içerir.

#### İstemci Hatası Yanıtlar
<br>

`404 Bulunamadı`

Sunucu istenen kaynağı bulamıyor. Tarayıcıda bu, URL'nin tanınmadığı anlamına gelir. Bir API'de bu, uç noktanın geçerli olduğu ancak kaynağın kendisinin olmadığı anlamına da gelebilir. Sunucular, bir kaynağın varlığını yetkisiz bir istemciden gizlemek için 403 Yasak yerine bu yanıtı da gönderebilir. Bu yanıt kodu, web'de sık görülmesi nedeniyle muhtemelen en iyi bilinen koddur.

> Kaynak : https://developer.mozilla.org/en-US/docs/Web/HTTP/Status