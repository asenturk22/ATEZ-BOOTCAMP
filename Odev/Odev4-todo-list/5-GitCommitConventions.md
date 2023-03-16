### 5 - Git Commit Conventions

Conventional Commits şartnamesi, commit mesajları hakkında kolayca takip edilebilecek bir sözleşmedir. Otomatik araçlar yazılarak anlaşılabilecek açık bir commit geçmişi oluşturmak için kolay bir dizi kural sağlar. Bu sözleşme SemVer ile uyumludur ve commit mesajlarında yeni özellik ekleme (features), hata düzeltme (fixes) ve yıkıcı değişiklik (breaking change) tanımlamalarını yapar.

Commit mesajı aşağıdaki gibi yapılandırılmalıdır:

><tip>[kapsam, zorunlu değil]: <açıklama>

>[zorunlu olmayan mesaj metni]

>[zorunlu olmayan alt metin(ler)]

1. `fix:` fix tipi bir commit kodunuzdaki bir hatayı düzeltir (Semantik versiyonlamadaki **PATCH** ile paraleldir).

2. `feat:` feat tipi commit kodunuza yeni bir özellik ekler (Semantik versiyonlamadaki **MINOR** ile paraleldir).

3. `BREAKING CHANGE: BREAKING CHANGE:` ile başlayan bir alt metin ya da tip/kapsam sonuna eklenmiş bir ! içeren commit yıkıcı bir değişiklik getiriyordur (Semantik versiyonlamadaki MAJOR ile paraleldir). Bir BREAKING CHANGE harhangi bir tip commit içinde olabilir.

4. `fix: ve feat: `dışında tipler de kullanılabilir. Örneğin @commitlint/config-conventional `build:`, `chore:`, `ci`:, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, ve birkaç başka tipi de tavsiye eder (bu the Angular sözleşmesinden esinlenmiştir).
5. `BREAKING CHANGE: <description>` dışında alt metinler de kullanılabilir ve git trailer format takip edilebilir.

**Açıklama ve yıkıcı değişiklik içeren alt metin sahibi bir commit mesajı**

```
feat: config neslelerinin birbirinden türetilmesi sağlandı

BREAKING CHANGE: `extends` artık başka bir ayar dosyasından türetildiğini belirtiyor
```

> refactor!: Node 6 desteği kaldırıldı

> refactor(runtime)!: Node 6 desteği kaldırıldı

<br>

```
BREAKING CHANGE alt metni içeren commit mesajı

refactor!: Node 6 desteği kaldırıldı

BREAKING CHANGE: Sadece Node 6 içinde olan Javascript özellikleri kullanan yerler yeniden yazılmalı.
```

```
Mesaj metni olmayan commit

docs: CHANGELOG'daki yazım hataları düzeltildi
```
```
Kapsam içeren commit mesajı

feat(lang): Türkçe çeviri eklendi
```
```
fix: bazı küçük yazım hataları düzeltildi

Detaylar için ilgili issue'ya bakabilirsiniz.

Daha detaylı bakılması da gerekebilir.

Reviewed-by: Z
Refs #133
```


### Neden Conventional Commits’e Uymalıyız
<br>

- CHANGELOG’ları otomatik olarak oluşturma.
- Bir semantik version tümcesini otomatik olarak belirleme (commit işlemlerinin tiplerine göre).
- Değişikliklerin doğasını ekip arkadaşlarına, kamuya ve diğer paydaşlara iletmek.
- Derleme ve yayınlama işlemlerini tetikleme.
- İnsanların daha yapılandırılmış bir commit geçmişini kendi kendilerine keşfetmelerine imkan vererek projelerinize katkıda bulunmalarını kolaylaştırmak.


> Kaynak : https://www.conventionalcommits.org/tr/v1.0.0/
