import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <div
                className="relative w-full h-96 bg-cover bg-center text-white flex items-center justify-center"
                style={{ backgroundImage: "url('https://www.solmazdekorasyon.com/wp-content/uploads/2019/02/06-boya-konya-alci-alcipan-duvar-bolme-asma-tavan-konya-boyaci-sap-fayans-ustasi.jpg')", backgroundAttachment: 'fixed' }}
            >
                <h1 className="text-4xl font-bold drop-shadow-lg">Hakkımızda</h1>
            </div>
            <div className="container mx-auto  p-8 lg:px-60 text-gray-700 my-16">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-800">RMODEL</h2>
                    <p className="leading-relaxed">
                        RMODEL uzun yıllar boyunca müşterilerinin ihtiyaçlarına ve zevklerine yönelik, fonksiyonel ve dönüşebilen çözümler sunmaktadır. Alçıpan, Gerçi tavan ve Dekorasyon alanlarında beklentilere cevap verir. Müşteri memnuniyeti odaklı, disiplinden kopmayan çalışmalarını, titiz bir uygulamayla birleştiren RMODEL, özgünlüğünün gücünü dinamizminin ardından alır.
                    </p>
                    <p className="leading-relaxed">
                        RMODEL yılların verdiği bilgi birikimi ve tecrübeyle günümüze kadar gelmiş ve bu alanda başarılı işler çıkarmıştır. Her geçen gün daha da tecrübe edinen uzman kadromuz ile sizlere hizmet vermekten gurur duymaktayız.
                    </p>

                    <h3 className="text-2xl font-semibold text-gray-800">Kalıcı Çözümler İçin Kusursuz Hizmetler!</h3>
                    <p className="leading-relaxed">
                        Uygun malzemeyi doğru işçilikle buluşturan deneyimli ve eğitimli personelimiz ile hangi malzemeyi nereye hangi şartların altında kullanacağını bilerek belli bir süre değil çalışmalarımızda malzemenin ömrü boyunca dayanıklı ve sağlam uygulama hizmetleri vermekteyiz. Beklentileriniz doğrultusunda sizleri ve projenizi en iyi şekilde hayata geçirecek, doğru planlama zamanında uygulama ve uygulama sonrasında destekleri ile sizlere hizmet vermekten gurur duymaktayız.
                    </p>

                    <h3 className="text-2xl font-semibold text-gray-800">Projelerinizi Hayata Geçirelim!</h3>
                    <p className="leading-relaxed">
                        Uygulama öncesinde kaliteli geniş malzeme seçeneklerini elinde bulunduran hızlı tedarik ağı ve stoğu sayesinde sorunları ortan kaldıran Türkiye ve Dünyada kalitesini ispatlamış, marklar ile sizleri buluşturan Yapı Dekorasyon malzeme satış ve dağıtım sistemi ile zamanında ve en iyi ürünleri sizinle buluşturuyor.
                    </p>

                    <h3 className="text-2xl font-semibold text-gray-800">Vizyonumuz</h3>
                    <p className="leading-relaxed">
                        Faaliyet gösterdiğimiz her alanda yenilikçi olmak, teknolojik gelişmeleri sürekli takip ederek kaliteli ürün ve hizmet vermek, bunun için gerekli iş gücünü bünyemizde yaşatmaktır.
                    </p>

                    <h3 className="text-2xl font-semibold text-gray-800">Misyonumuz</h3>
                    <p className="leading-relaxed">
                        Projelerimiz, çözümlerimiz, ürün gamımız, satış sonrası sağladığımız güvenilirlik ve yüksek iş ahlakımız ile sürekli tercih edilen önerilen ve müşterilerimiz için değer yaratan bir şirket olmak.
                    </p>

                    <h3 className="text-2xl font-semibold text-gray-800">Kalite Anlayışımız</h3>
                    <ul className="list-disc list-inside pl-4 space-y-2">
                        <li>Güler yüzlü hizmet</li>
                        <li>Güvenilir, kaliteli ve garantili hizmetler</li>
                        <li>Sorunsuz ve zamanında teslimat</li>
                        <li>Müşterilerimizin beklentisine cevap verecek doğru çalışma projeleri üretmek</li>
                        <li>Proje kapsamında kullanılacak aracın en iyisinin ve müşteri memnuniyetinin sağlanması</li>
                        <li>Müşteri şikayet ve isteklerinde hızlı ve etkin çözüm üretmek</li>
                        <li>Müşterilerin en iyi ödeme koşullarını sağlamak</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
