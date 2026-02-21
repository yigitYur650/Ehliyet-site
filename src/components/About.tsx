import { Heart, Users, Target, TrendingUp } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Heart,
      title: 'Sabırlı Eğitim',
      description: 'Her öğrencinin öğrenme hızına ve ihtiyaçlarına göre özel yaklaşım.',
    },
    {
      icon: Users,
      title: 'Anlaşılır İletişim',
      description: 'Yeni başlayanların endişelerini ve korkularını anlayan samimi bir rehber.',
    },
    {
      icon: Target,
      title: 'Hedef Odaklı',
      description: 'Sadece sınav geçmek değil, trafikte kendinden emin bir sürücü olmak.',
    },
    {
      icon: TrendingUp,
      title: 'Pratik Gelişim',
      description: 'Her ders sonunda ilerleme hissedecek şekilde yapılandırılmış eğitim.',
    },
  ];

  return (
    <section id="hakkimda" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Neden Ahmet Hoca?
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070"
              alt="Eğitmen"
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Merhaba, Ben Ahmet
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              15 yılı aşkın süredir direksiyon eğitimi veriyorum. Bu süreçte binlerce öğrencinin
              hem ehliyetini almasına hem de trafikte kendine güvenli bir sürücü olmasına
              yardımcı oldum.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Özellikle ilk kez direksiyon başına geçecek olan öğrencilerin stresini ve
              endişelerini çok iyi anlıyorum. Benim eğitim felsefem basit: Sabır, anlayış
              ve adım adım ilerleme.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Direksiyon kullanmak bir beceridir ve herkes öğrenebilir. Tek ihtiyacınız olan
              doğru rehber ve düzenli pratik. Gelin birlikte bu yolculuğa çıkalım.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Icon className="text-blue-600" size={28} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
