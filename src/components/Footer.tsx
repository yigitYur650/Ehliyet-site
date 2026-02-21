import { MessageCircle, Phone, MapPin, Mail, Clock } from 'lucide-react';

export default function Footer() {
  const whatsappNumber = '905551234567';
  const whatsappMessage = 'Merhaba, randevu oluşturmak istiyorum.';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      value: '+90 555 123 45 67',
      link: 'tel:+905551234567',
    },
    {
      icon: Mail,
      title: 'E-posta',
      value: 'ahmet@direksiyon.com',
      link: 'mailto:ahmet@direksiyon.com',
    },
    {
      icon: MapPin,
      title: 'Bölge',
      value: 'İstanbul Anadolu Yakası',
      link: null,
    },
    {
      icon: Clock,
      title: 'Çalışma Saatleri',
      value: 'Hafta içi 08:00 - 20:00',
      link: null,
    },
  ];

  return (
    <footer id="iletisim" className="bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trafiğe Güvenle Çıkmaya Hazır Mısın?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            İlk adımı atmak için hemen iletişime geçin
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-10 py-5 rounded-full text-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <MessageCircle size={28} />
            WhatsApp ile Randevu Oluştur
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            const content = (
              <>
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Icon className="text-blue-600" size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-600">{info.value}</p>
              </>
            );

            return info.link ? (
              <a
                key={index}
                href={info.link}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                {content}
              </a>
            ) : (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center"
              >
                {content}
              </div>
            );
          })}
        </div>

        <div className="border-t border-gray-300 pt-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Ahmet Hoca Direksiyon
            </h3>
            <p className="text-gray-600 mb-6">
              Profesyonel, sabırlı ve güvenli direksiyon eğitimi
            </p>
            <div className="flex justify-center gap-6 text-sm text-gray-600">
              <button
                onClick={() => {
                  const element = document.querySelector('#hakkimda');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:text-blue-600 transition-colors"
              >
                Hakkımda
              </button>
              <button
                onClick={() => {
                  const element = document.querySelector('#egitimler');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:text-blue-600 transition-colors"
              >
                Eğitimler
              </button>
              <button
                onClick={() => {
                  const element = document.querySelector('#arac');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:text-blue-600 transition-colors"
              >
                Araç
              </button>
              <button
                onClick={() => {
                  const element = document.querySelector('#yorumlar');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:text-blue-600 transition-colors"
              >
                Yorumlar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-gray-400 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Ahmet Hoca Direksiyon. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
