import { GraduationCap, Trophy, Car, Settings } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: GraduationCap,
      title: 'Temel Direksiyon Eğitimi',
      description: 'Sıfırdan başlayanlar için araç hakimiyeti, vites kullanımı, dur-kalk çalışmaları ve temel sürüş teknikleri.',
      features: ['Araç tanıma', 'Vites hakimiyeti', 'Dur-kalk egzersizleri', 'Direksiyon kontrolü'],
      color: 'blue',
    },
    {
      icon: Trophy,
      title: 'Sınav Hazırlık',
      description: 'Direksiyon sınavını başarıyla geçmek için paralel park, L park ve rampa kalkış teknikleri üzerine yoğun pratik.',
      features: ['Paralel park', 'L park', 'Rampa kalkış', 'Sınav güzergahı'],
      color: 'green',
    },
    {
      icon: Car,
      title: 'Akan Trafik & Özgüven',
      description: 'Ehliyeti olup trafiğe çıkmaya korkanlar için şehir içi, otoyol ve yoğun trafik pratikleri.',
      features: ['Şehir içi sürüş', 'Otoyol deneyimi', 'Yoğun trafik', 'Güven kazanma'],
      color: 'orange',
    },
    {
      icon: Settings,
      title: 'Manuel / Otomatik Seçeneği',
      description: 'Öğrencinin tercihine göre hem manuel hem de otomatik vites araçlarla eğitim imkanı sunuyoruz.',
      features: ['Manuel vites', 'Otomatik vites', 'Esnek program', 'Özel ders saatleri'],
      color: 'purple',
    },
  ];

  const colorClasses: Record<string, { bg: string; icon: string; badge: string }> = {
    blue: { bg: 'bg-blue-50', icon: 'text-blue-600', badge: 'bg-blue-100 text-blue-700' },
    green: { bg: 'bg-green-50', icon: 'text-green-600', badge: 'bg-green-100 text-green-700' },
    orange: { bg: 'bg-orange-50', icon: 'text-orange-600', badge: 'bg-orange-100 text-orange-700' },
    purple: { bg: 'bg-violet-50', icon: 'text-violet-600', badge: 'bg-violet-100 text-violet-700' },
  };

  return (
    <section id="egitimler" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Eğitim Programlarımız
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            İhtiyacınıza özel eğitim programları ile sürüş becerilerinizi geliştirin
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = colorClasses[service.color];

            return (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`${colors.bg} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className={colors.icon} size={32} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${colors.icon.replace('text-', 'bg-')}`}></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-blue-50 rounded-2xl p-8">
            <p className="text-lg text-gray-700 mb-4">
              Tüm eğitim programlarında esnek ders saatleri ve kişiye özel tempo
            </p>
            <p className="text-2xl font-bold text-blue-600">
              Ücretsiz danışmanlık için iletişime geçin
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
