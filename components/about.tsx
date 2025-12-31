'use client'
import { useLanguage } from '@/lib/lang'

export default function About() {
  const lang = useLanguage();

  return (
    <div className='w-full z-20 bg-gradient-to-t from-black to-transparent text-white pt-10 px-5 md:pt-0 md:px-0 pb-12 md:pb-20'>
      <div className='max-w-5xl mx-auto px-4 md:px-6'>
        <h1 className='text-2xl md:text-3xl font-semibold'>{lang === "en" ? "About Us" : "Hakkımızda"}</h1>
        <p className='mt-4 text-base md:text-lg leading-relaxed'>
          {lang === "en" 
            ? "The Personal Data Protection Club at Trabzon Social Sciences High School is dedicated to raising awareness about data privacy and protection in our digital age. We provide educational resources, organize workshops, and promote best practices for safeguarding personal information. Our mission is to empower students and the community with the knowledge and tools needed to protect their digital privacy and understand their rights under data protection regulations."
            : "Trabzon Sosyal Bilimler Lisesi Kişisel Verileri Koruma Kulübü, dijital çağımızda veri gizliliği ve koruması konusunda farkındalık yaratmaya adanmıştır. Eğitim kaynakları sağlıyor, atölyeler düzenliyor ve kişisel bilgileri koruma konusunda en iyi uygulamaları teşvik ediyoruz. Misyonumuz, öğrencilere ve topluma dijital gizliliklerini korumaları ve veri koruma düzenlemeleri kapsamındaki haklarını anlamaları için gereken bilgi ve araçlarla güç vermektir."
          }
        </p>
      </div>
    </div>
  )
}
