### 4 - Semantic Versioning (Anlamsal Versiyonlama)

<br>

![](https://soshace.com/wp-content/uploads/2020/08/cover-700x400.png)

İngilizce adıyla Semantic Versioning aslında bir zorunluluk değil ancak uygulandığı taktirde büyük projelerde kolaylık sağlayacak bir süreç.

Amaç, versiyonlama işlemini daha anlamlı kılmak. Bunun için tanımlar belirlenmiş.

Temelde versiyonlama işlemi için şöyle bir sürüm numarası kullanılıyor

> MAJOR.MINOR.PATCH -> BÜYÜK.KÜÇÜK.YAMA -> 2.1.15

**MAJOR / BÜYÜK -** Yalnızca büyük köklü değişikliklerde değiştirilmeli. Ve yaptığınız değişiklikler önceki sürümü etkileyen değişiklikler olmalı. (Web tarafında konuşacak olursak örneğin temanın tamamen değiştirilmesi ya da yazılım alt yapısının köklü bir değişiklik geçirmesi örnek olabilir)

**MINOR / KÜÇÜK -** Önceki sürümle uyumlu ancak küçük değişikliklerin olduğu durumlarda değiştirilmeli. (Web tarafında konuşacak olursak yeni modüllerin eklenmesi örnek olabilir)

**PATCH / YAMA -** Önceki sürümlerle uyumlu ufak tefek hata ve düzenlemler olduğu durumlarda değiştirilmeli. (Web tarafında konuşacak olursak tasarımsal küçük değişiklikler, mevcut modüllerde yapılan hata ve düzeltmeler örnek olabilir)

Kısaca sitede anlatılan tanımlar ise şöyle


- Sürüm numarası X.Y.Z formatında olmalı. X, Y ve Z negatif olmayan tam sayılar olarak tanımlanmalı ve başlarında sıfır olmamalıdır.

- Yeni bir sürüm yayınlandığında o sürümün içeriği sonradan değiştirilmemelidir. Yeni bir değişiklik yeni sürümde tanımlanmalıdır.
    
- Büyük sürümde tanımlanan 0 değeri yazılımın henüz stabil olmadığını belirtir. 1. versiyona ulaştığında artık production ortamına çıkmaya hazır olduğu ve stabil olduğu anlamına gelir.

- Yama sürümü önceki sürümlerle uyumlu hata düzeltmeleri yapıldığında arttırılmalıdır.
    
- Minor sürümü, önceki sürümle uyumlu olacak yeni modüller olduğunda artırılmalıdır. Deprecated olmuş artık kullanılmayan işlemlerde ya da yama durumunda da artırılabilir. Küçük sürüm arttırıldığında yama sürümü sıfırlanmalıdır.
    
- Büyük sürümü, önceki sürümle uyumsuz değişiklikler yapıldığında arttırılmalıdır. Büyük sürüm arttırıldığında yama ve küçük sürüm değerleri sıfırlanmalıdır.

> Kaynak : https://semver.org/lang/tr/


