import type { WeddingStory } from '@/types'

const S = (n: string) => `https://photofilms.in/images/slider/${n}.webp`

const makePhotos = (indices: string[], labels: string[]) =>
  indices.map((n, i) => ({
    src: S(n),
    alt: labels[i] ?? `Wedding photograph ${i + 1}`,
    width: 1200,
    height: 800,
  }))

export const portfolioStories: WeddingStory[] = [
  {
    slug: 'priya-rahul-udaipur',
    couple: 'Priya & Rahul',
    venue: 'The Leela Palace',
    city: 'Udaipur',
    date: '2024-02-14',
    category: 'Wedding',
    coverImage: S('01'),
    narrative: 'Priya and Rahul chose the majestic Lake Pichola backdrop for their royal Udaipur wedding. Three days of rituals, colour, and pure joy — captured in every frame.',
    services: ['wedding-photography', 'cinematography', 'drone'],
    photos: makePhotos(
      ['01','02','03','04','05','06','07','08'],
      ['Bride and groom at The Leela Palace','Pre-ceremony portrait session','Wedding ceremony at Lake Pichola','Bride\'s bridal portrait','Reception celebration','Couple golden hour portrait','Mehendi ceremony','Sangeet night']
    ),
  },
  {
    slug: 'ananya-vikram-jaipur',
    couple: 'Ananya & Vikram',
    venue: 'Jai Mahal Palace',
    city: 'Jaipur',
    date: '2024-01-20',
    category: 'Wedding',
    coverImage: S('02'),
    narrative: 'A pink-city fairy tale unfolded at Jai Mahal Palace. Ananya\'s Kanjivaram silk and Vikram\'s ivory sherwani against Jaipur\'s golden forts created photographs that looked like paintings.',
    services: ['wedding-photography', 'drone'],
    photos: makePhotos(
      ['02','03','04','05','06','07','08','09'],
      ['Couple at Jai Mahal Palace Jaipur','Bridal portrait in pink city','Baraat procession in Jaipur','Couple portrait at golden hour','Haldi ceremony','Mandap ceremony shot','Night reception party','Intimate couple moment']
    ),
  },
  {
    slug: 'meera-arjun-goa',
    couple: 'Meera & Arjun',
    venue: 'Taj Exotica',
    city: 'Goa',
    date: '2023-12-28',
    category: 'Wedding',
    coverImage: S('03'),
    narrative: 'Barefoot on the beach at sunset, Meera and Arjun exchanged vows as the Arabian Sea whispered in the background. A destination wedding that felt like a dream.',
    services: ['wedding-photography', 'cinematography', 'drone'],
    photos: makePhotos(
      ['03','04','05','06','07','08','09','10'],
      ['Beach wedding at Taj Exotica Goa','Sunset ceremony on the beach','Couple at the shoreline','Pre-reception portraits','Evening reception at resort','Bride\'s bridal portrait Goa','Mehndi by the pool','Night celebration Goa beach']
    ),
  },
  {
    slug: 'kavya-rohan-vadodara',
    couple: 'Kavya & Rohan',
    venue: 'Laxmi Vilas Palace',
    city: 'Vadodara',
    date: '2024-03-10',
    category: 'Pre-Wedding',
    coverImage: S('04'),
    narrative: 'The heritage splendour of Laxmi Vilas Palace provided the perfect canvas for Kavya and Rohan\'s pre-wedding shoot. Golden corridors and garden walks made every frame magical.',
    services: ['pre-wedding'],
    photos: makePhotos(
      ['04','05','06','07','08','09'],
      ['Pre-wedding at Laxmi Vilas Palace','Couple in palace gardens','Golden hour portrait Vadodara','Candid couple moment at palace','Portrait against heritage architecture','Couple walk through palace corridor']
    ),
  },
  {
    slug: 'riya-siddharth-aerial',
    couple: 'Riya & Siddharth',
    venue: 'Umaid Bhawan Palace',
    city: 'Jodhpur',
    date: '2023-11-18',
    category: 'Drone',
    coverImage: S('05'),
    narrative: 'Drone footage transformed Riya and Siddharth\'s Jodhpur celebration into an epic cinematic experience. The Blue City spread out beneath them like a living painting.',
    services: ['wedding-photography', 'drone'],
    photos: makePhotos(
      ['05','06','07','08','09','10'],
      ['Aerial view of Umaid Bhawan Palace','Drone shot of baraat procession','Aerial blue city Jodhpur','Couple portrait with palace backdrop','Wedding mandap aerial view','Ground portrait with aerial']
    ),
  },
  {
    slug: 'nisha-dhruv-cinematic',
    couple: 'Nisha & Dhruv',
    venue: 'Amanbagh Resort',
    city: 'Alwar',
    date: '2024-04-05',
    category: 'Film',
    coverImage: S('06'),
    narrative: 'Their wedding film swept festival audiences. Nisha and Dhruv wanted a cinematic narrative of their Rajasthani wedding — and we delivered a 12-minute film that still makes them cry.',
    services: ['cinematography', 'wedding-photography'],
    photos: makePhotos(
      ['06','07','08','09','10','01'],
      ['Cinematic still from wedding film','Film grade wedding portrait','Ceremony footage still','Golden hour film still','Reception film still Alwar','Behind the scenes film shoot']
    ),
  },
]
