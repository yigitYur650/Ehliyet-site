import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Zeynep K.',
      age: 24,
      text: 'Direksiyon öğrenmeye çok korkarak başlamıştım. Ahmet Hoca sayesinde hem korkumu yendim hem de ilk sınavda ehliyetimi aldım. Çok sabırlı ve anlayışlı bir eğitmen.',
      rating: 5,
    },
    {
      name: 'Mehmet A.',
      age: 32,
      text: 'Rampa kalkışta çok zorlanıyordum ve sürekli geri gidiyordum. Ahmet Hoca\'nın tekniği sayesinde artık hiç stres yapmadan rampa kalkış yapabiliyorum. Kesinlikle tavsiye ederim!',
      rating: 5,
    },
    {
      name: 'Ayşe D.',
      age: 28,
      text: '5 yıldır ehliyetim vardı ama trafiğe çıkamıyordum. Akan trafik programıyla özgüvenimi kazandım. Artık rahatça şehir içinde araba kullanabiliyorum.',
      rating: 5,
    },
    {
      name: 'Can Ş.',
      age: 21,
      text: 'Paralel park yaparken sürekli başarısız oluyordum. Ahmet Hoca\'nın öğrettiği pratik yöntemlerle artık 2 dakikada park edebiliyorum. Harika bir eğitmen!',
      rating: 5,
    },
  ];

  return (
    <section id="yorumlar" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Öğrenci Yorumları
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Binlerce öğrencinin güvenle direksiyon kullanmasına yardımcı olduk
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <Quote className="text-blue-600 opacity-20" size={48} />
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.age} yaşında</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-green-50 border-2 border-green-200 rounded-xl px-6 py-4">
            <Star className="text-yellow-400 fill-yellow-400" size={24} />
            <p className="text-lg font-bold text-gray-900">
              4.9/5 Ortalama Puan
            </p>
            <span className="text-gray-600">•</span>
            <p className="text-gray-600">500+ Mutlu Öğrenci</p>
          </div>
        </div>
      </div>
    </section>
  );
}
