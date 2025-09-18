# Codezone Case - Recep Terzi
#### Next.js, TypeScript ve Tailwind CSS kullanılarak, modern web geliştirme standartlarına uygun şekilde hazırlanmış bir case projesi.
Deploy Link : (https://codezone-recep.netlify.app/)

## Case Hakkında
-  Projede Next.js'in güncel versiyonlarından biri olan v15.5.3 ile kodlamayı gerçekleştirdim.
-  Figma UI tasarımına sadık kalarak, projeyi pixel-perfect şekilde kodladım. Uygun folder yapısı oluşturarak kod tekrarını en aza indirdim. Tasarımı clean code prensiplerine uygun şekilde düzenledim ve tasarımda belirtilen blog, blog detay sayfalarını ve ekstra durumları eksiksiz olarak hazırladım.
-  Kod tekrarı oluşabilecek veya farklı yerlerde yeniden kullanılacak bölümleri component haline getirdim. Componentlere gerekli propsları vererek esnek ve tekrar kullanılabilir bir yapı oluşturdum.
-  Projelerimde hız ve kullanım kolaylığı açısından `Tailwind CSS` tercih ediyorum; bu projede de Tailwind CSS kullanmayı tercih ettim. Ayrıca theme, layer gibi özellikler, component ve stil yönetimini büyük ölçüde kolaylaştırıyor.
-  Projede `TypeScript` kullandım. Bu sayede kodun okunabilirliği ve güvenliği artırıldı. Gerekli durumlarda TypeScript ile projeleri hazırlayabiliyorum.
-  Mobil ekranda da Figma tasarımında bulunmayan menü ağacını tasarıma uygun bir şekilde hazırlayıp ekledim.
-  Animasyonlar için sizin de beklediğiniz `Swiper` kütüphanesini kullanmaya özen gösterdim. Gerekli yerlerde Swiper kullanarak tasarıma haraket ve canlılık kattım. Ekstra olarak da projelerimde sık sık kullandığım işimi kolaylaştıran animasyon kütüphaneleri olan `react-awesome-reveal` ve `animate.css` kütüphanelerini de kullandım. Anasayfa ve blog sayfalarında detayları rahatlıkla görebilirsiniz.
-  Verilen mock datayı doğrudan kullanmak yerine, fetch ile API isteğinde bulundum. Tekrarlayan API çağrılarını önlemek için gelen veriyi `Redux` global state içerisinde tuttum, böylece farklı componentlerde ve sayfalarda rahatlıkla kullanabildim.
-  API’dan gelen SEO etiketlerini blog detay sayfalarında generateMetadata fonksiyonu ile işleyerek title, description ve canonical verilerini head tag’leri arasına ekledim.
-  Projedeki tüm görseller ve ikonlar, assets/icons ve assets/images klasörlerinde düzenli bir şekilde topladım. Bu sayede görselleri farklı componentlerde rahatlıkla kullanmam mümkün oldu.
-  Projeyi geliştirirken Lighthouse ile performans, erişilebilirlik, SEO ve en iyi uygulamalar testlerini gerçekleştirdim ve tüm testlerden başarılı sonuçlar aldım. Bu sayede proje hem kullanıcı deneyimi hem de teknik kalite açısından optimize edildi.
-  Projede ekip çalışması ve commit geçmişinin anlaşılabilirliği için genellikle kullandığım `Conventional Commit` yaklaşımını benimsedim. Tüm commitler bu standartlara uygun şekilde oluşturuldu.
  
NOT: Navbar kısmında blog yazmadığı için haberler kısmına o sayfanın link yönlendirmesini koydum. Oradan tıklayarak veya /blog üzerinden erişim sağlayabilirsiniz. Özel blog detayları da cardların üstüne tıklayarak erişebilirsiniz.

## Kullanılan Teknolojiler
- **Next.js v15.5.3** – Modern React framework, SSR ve SSG desteği.
- **TypeScript** – Kod güvenliği ve okunabilirlik.
- **Redux** – Global state yönetimi.
- **Tailwind CSS** – Hızlı ve responsive tasarım.
- **Swiper, react-awesome-reveal, animate.css** – Animasyon ve etkileşimler.
- **Netlify** – Proje deploy ve hosting.
