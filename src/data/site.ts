// Негізгі контакт және мекеме деректері.
// Мұнда мәтіндерді өзгерту арқылы сайттың барлық жерінде автоматты түрде жаңарады.

export const siteConfig = {
  name: "Мұрагер",
  fullName: '«Мұрагер» бөбекжай балабақшасы',
  tagline: "бөбекжай балабақшасы",
  phone: "[телефон кейінірек қосылады]",
  phoneHref: "",
  address: "[мекенжай кейінірек қосылады]",
  workingHours: "[жұмыс уақыты кейінірек қосылады]",
  instagram: "[instagram сілтемесі кейінірек қосылады]",
  instagramHref: "#",
  mapEmbedUrl: "",
};

// Мәтін «кейінірек қосылады» деп белгіленген болса, оны сайтта көрсетпейміз.
export function isPlaceholder(value: string) {
  return value.trim().startsWith("[");
}

export const navigation = [
  { label: "Басты бет", href: "#hero" },
  { label: "Біз туралы", href: "#about" },
  { label: "Топтар", href: "#groups" },
  { label: "Тамақтану", href: "#nutrition" },
  { label: "Фотосуреттер", href: "#gallery" },
  { label: "Құжаттар", href: "#documents" },
  { label: "Байланыс", href: "#contact" },
];
