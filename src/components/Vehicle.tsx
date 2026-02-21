import { CheckCircle2, Shield, Gauge, Wrench } from 'lucide-react';

export default function Vehicle() {
  const features = [
    {
      icon: Shield,
      title: 'Çift Pedal Sistemi',
      description: 'Güvenliğiniz için eğitmen kontrollü fren ve debriyaj pedallı sistem',
    },
    {
      icon: Gauge,
      title: 'Düzenli Bakımlı',
      description: 'Periyodik bakım ve kontrollerle her zaman güvenli sürüş',
    },
    {
      icon: Wrench,
      title: 'Modern Donanım',
      description: 'Kliması, servo direksiyonu ve tüm konforu ile rahat eğitim ortamı',
    },
  ];

  const specs = [
    'Manuel & Otomatik Seçeneği',
    'Klimalı ve Konforlu',
    'Çift Pedal Güvenlik Sistemi',
    'Düzenli Bakım ve Temizlik',
    'Yeni Model Araç',
    'Kasko Sigortalı',
  ];

  return (
    <section id="arac" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Eğitim Aracımız
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Güvenli ve konforlu eğitim deneyimi için modern donanımlı araç
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              2023 Model Volkswagen Polo
            </h3>

            <p className="text-gray-700 mb-8 leading-relaxed">
              Eğitim aracımız, güvenlik ve konfor açısından en üst düzeyde donanıma sahiptir.
              Özellikle yeni başlayanlar için ideal olan kompakt yapısı sayesinde kolay
              manevra yapabilir, park çalışmalarınızı rahatça gerçekleştirebilirsiniz.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {specs.map((spec, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{spec}</span>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon className="text-blue-600" size={24} />
                    </div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1617469767053-d3b523a0b982?q=80&w=2070"
                alt="Eğitim Aracı"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white px-6 py-4 rounded-xl shadow-xl">
                <p className="text-sm font-medium">Güvenli Eğitim</p>
                <p className="text-2xl font-bold">Garantisi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
