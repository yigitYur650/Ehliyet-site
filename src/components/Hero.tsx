import { MessageCircle, Award, Shield } from 'lucide-react';

export default function Hero() {
  const whatsappNumber = '905551234567';
  const whatsappMessage = 'Merhaba, direksiyon eğitimi hakkında bilgi almak istiyorum.';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Stressiz, Güvenli ve Keyifli
            <span className="block text-blue-600 mt-2">Direksiyon Eğitimi</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Sadece ehliyet almak için değil, trafiğe güvenle çıkmak için özel dersler.
            Sabırlı ve tecrübeli yaklaşım.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 text-gray-700">
              <Award className="text-blue-600" size={24} />
              <span className="font-medium">15+ Yıl Tecrübe</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Shield className="text-blue-600" size={24} />
              <span className="font-medium">Güvenli Eğitim</span>
            </div>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <MessageCircle size={24} />
            WhatsApp'tan Bilgi Al
          </a>

          <p className="mt-6 text-sm text-gray-600">
            Ücretsiz danışmanlık için hemen iletişime geçin
          </p>
        </div>
      </div>
    </section>
  );
}
