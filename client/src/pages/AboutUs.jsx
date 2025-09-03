
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faLightbulb, faUsers, faStar, faHandshake } from '@fortawesome/free-solid-svg-icons';

const AboutUs = () => {
    return (
        <section className="relative bg-gradient-to-br from-cyan-900 via-cyan-700 to-cyan-400 min-h-[60vh] overflow-hidden">
            {/* Banner */}
                    <div className="relative w-full h-80 md:h-96 flex items-center justify-center overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: "url('https://www.solmazdekorasyon.com/wp-content/uploads/2019/02/06-boya-konya-alci-alcipan-duvar-bolme-asma-tavan-konya-boyaci-sap-fayans-ustasi.jpg')", backgroundAttachment: 'fixed' }}
                                />
                                {/* Daha şeffaf overlay */}
                                <div className="absolute inset-0 bg-cyan-950/50 backdrop-blur-[2px]" />
                                <h1 className="relative z-10 text-4xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-2xl px-8 py-4 rounded-2xl text-center shadow-xl">
                                    Hakkımızda
                                </h1>
                    </div>
            {/* İçerik */}
                    <div className="container mx-auto py-16 px-6 lg:px-40 flex flex-col gap-12">
                                <div className="bg-white/20 rounded-3xl shadow-2xl p-8 border-4 border-white/30 animate-fadeInUp">
                                    <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-400 mb-4 flex items-center gap-3">
                                        <FontAwesomeIcon icon={faLightbulb} className="text-yellow-400" /> RMODEL
                                    </h2>
                                      <p className="text-lg text-white mb-2">
                                        RMODEL uzun yıllar boyunca müşterilerinin ihtiyaçlarına ve zevklerine yönelik, fonksiyonel ve dönüşebilen çözümler sunmaktadır. Alçıpan, Gerçi tavan ve Dekorasyon alanlarında beklentilere cevap verir. Müşteri memnuniyeti odaklı, disiplinden kopmayan çalışmalarını, titiz bir uygulamayla birleştiren RMODEL, özgünlüğünün gücünü dinamizminin ardından alır.
                                    </p>
                                      <p className="text-lg text-white">
                                        RMODEL yılların verdiği bilgi birikimi ve tecrübeyle günümüze kadar gelmiş ve bu alanda başarılı işler çıkarmıştır. Her geçen gün daha da tecrübe edinen uzman kadromuz ile sizlere hizmet vermekten gurur duymaktayız.
                                    </p>
                                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white/20 rounded-3xl shadow-2xl p-8 border-4 border-white/30 animate-fadeInUp flex flex-col gap-4">
                                    <h3 className="text-2xl font-bold text-yellow-300 flex items-center gap-2"><FontAwesomeIcon icon={faCheckCircle} /> Kalıcı Çözümler İçin Kusursuz Hizmetler!</h3>
                                    <p className="text-white text-lg">
                            Uygun malzemeyi doğru işçilikle buluşturan deneyimli ve eğitimli personelimiz ile hangi malzemeyi nereye hangi şartların altında kullanacağını bilerek belli bir süre değil, malzemenin ömrü boyunca dayanıklı ve sağlam uygulama hizmetleri vermekteyiz. Beklentileriniz doğrultusunda sizleri ve projenizi en iyi şekilde hayata geçirecek, doğru planlama, zamanında uygulama ve uygulama sonrasında destekleri ile sizlere hizmet vermekten gurur duymaktayız.
                        </p>
                    </div>
                                <div className="bg-white/20 rounded-3xl shadow-2xl p-8 border-4 border-white/30 animate-fadeInUp flex flex-col gap-4">
                                    <h3 className="text-2xl font-bold text-yellow-300 flex items-center gap-2"><FontAwesomeIcon icon={faHandshake} /> Projelerinizi Hayata Geçirelim!</h3>
                                    <p className="text-white text-lg">
                            Uygulama öncesinde kaliteli geniş malzeme seçeneklerini elinde bulunduran hızlı tedarik ağı ve stoğu sayesinde sorunları ortadan kaldıran, Türkiye ve Dünyada kalitesini ispatlamış markalar ile sizleri buluşturan Yapı Dekorasyon malzeme satış ve dağıtım sistemi ile zamanında ve en iyi ürünleri sizinle buluşturuyoruz.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white/20 rounded-3xl shadow-2xl p-8 border-4 border-white/30 animate-fadeInUp flex flex-col gap-4">
                                    <h3 className="text-2xl font-bold text-yellow-300 flex items-center gap-2"><FontAwesomeIcon icon={faStar} /> Vizyonumuz</h3>
                                    <p className="text-white text-lg">
                            Faaliyet gösterdiğimiz her alanda yenilikçi olmak, teknolojik gelişmeleri sürekli takip ederek kaliteli ürün ve hizmet vermek, bunun için gerekli iş gücünü bünyemizde yaşatmaktır.
                        </p>
                    </div>
                                <div className="bg-white/20 rounded-3xl shadow-2xl p-8 border-4 border-white/30 animate-fadeInUp flex flex-col gap-4">
                                    <h3 className="text-2xl font-bold text-yellow-300 flex items-center gap-2"><FontAwesomeIcon icon={faUsers} /> Misyonumuz</h3>
                                    <p className="text-white text-lg">
                            Projelerimiz, çözümlerimiz, ürün gamımız, satış sonrası sağladığımız güvenilirlik ve yüksek iş ahlakımız ile sürekli tercih edilen, önerilen ve müşterilerimiz için değer yaratan bir şirket olmak.
                        </p>
                    </div>
                </div>
                <div className="bg-white/20 rounded-3xl shadow-2xl p-8 border-4 border-white/30 animate-fadeInUp flex flex-col gap-4">
                    <h3 className="text-2xl font-bold text-yellow-300 flex items-center gap-2"><FontAwesomeIcon icon={faCheckCircle} /> Kalite Anlayışımız</h3>
                      <ul className="list-disc list-inside pl-4 space-y-2 text-white text-lg">
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
            {/* Dekoratif arka plan efektleri */}
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-yellow-300/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-white/10 to-transparent pointer-events-none" />
        </section>
    );
};

export default AboutUs;
