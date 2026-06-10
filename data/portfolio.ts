import type { WeddingStory } from '@/types'

const W = (n: string) => `https://photofilms.in/images/portfolio/wedding/${n}.webp`
const S = (n: string) => `https://photofilms.in/images/slider/${n}.webp`

const photo = (src: string, alt: string) => ({ src, alt, width: 1200, height: 800 })

export const portfolioStories: WeddingStory[] = [
  {
    slug: 'priya-rahul-udaipur',
    couple: 'Priya & Rahul',
    venue: 'The Leela Palace',
    city: 'Udaipur',
    location: 'Rajasthan',
    date: '2024-02-14',
    category: 'Wedding',
    coverImage: W('1'),
    tags: ['The Leela Palace', 'Lake Pichola', 'Rajasthan'],
    narrative:
      'Priya and Rahul chose the majestic Lake Pichola backdrop for their royal Udaipur wedding. Three days of rituals, colour, and pure joy — captured in every frame. Somewhere between the golden light and the sound of shehnai, we were reminded exactly why we love what we do.',
    services: ['wedding-photography', 'cinematography', 'drone'],
    storySections: [
      {
        image: W('2'),
        quote:
          'We loved every single frame. It actually felt so filmy — the way the light caught the mandap, how our families looked in every candid. We couldn\'t stop crying and laughing at the same time. Thank you so much!',
        quoteAuthor: 'Priya Kapoor',
      },
      {
        image: W('4'),
        quote:
          'All of us loved the film. Mom and Dad loved it so much too! It\'s like it\'s a Bollywood movie with laughs and tears and we wouldn\'t have it any other way.',
        quoteAuthor: 'Rahul Sharma',
      },
    ],
    filmStripImage: W('5'),
    videoUrl: '/136133-764371501_medium.mp4',
    photos: [
      photo(W('6'), 'Bride and groom at The Leela Palace'),
      photo(W('7'), 'Wedding ceremony at Lake Pichola'),
      photo(W('8'), 'Bridal portrait golden hour'),
      photo(W('9'), 'Reception celebration'),
    ],
  },

  {
    slug: 'ananya-vikram-jaipur',
    couple: 'Ananya & Vikram',
    venue: 'Jai Mahal Palace',
    city: 'Jaipur',
    location: 'Rajasthan',
    date: '2024-01-20',
    category: 'Wedding',
    coverImage: W('10'),
    tags: ['Jai Mahal Palace', 'Pink City', 'Rajasthan'],
    narrative:
      'A pink-city fairy tale unfolded at Jai Mahal Palace. Ananya\'s Kanjivaram silk and Vikram\'s ivory sherwani against Jaipur\'s golden forts created photographs that looked like paintings.',
    services: ['wedding-photography', 'drone'],
    storySections: [
      {
        image: W('11'),
        quote:
          'The pink city and our photographs together — I couldn\'t imagine it turning out this beautiful. Every frame tells a complete story of our day. We still look at them every anniversary.',
        quoteAuthor: 'Ananya Mehta',
      },
      {
        image: W('12'),
        quote:
          'When I saw the final gallery, I was genuinely moved. There are moments they captured that I didn\'t even know happened. That\'s the true art — being invisible but seeing everything.',
        quoteAuthor: 'Vikram Nair',
      },
    ],
    videoUrl: '/157657-815175893_medium.mp4',
    photos: [
      photo(W('13'), 'Couple at Jai Mahal Palace Jaipur'),
      photo(W('14'), 'Bridal portrait in pink city'),
    ],
  },

  {
    slug: 'meera-arjun-goa',
    couple: 'Meera & Arjun',
    venue: 'Taj Exotica',
    city: 'Goa',
    location: 'Goa',
    date: '2023-12-28',
    category: 'Wedding',
    coverImage: W('16'),
    tags: ['Taj Exotica', 'Beachside', 'Goa'],
    narrative:
      'Barefoot on the beach at sunset, Meera and Arjun exchanged vows as the Arabian Sea whispered in the background. A destination wedding that felt like a dream — and looked like one too.',
    services: ['wedding-photography', 'cinematography', 'drone'],
    storySections: [
      {
        image: W('18'),
        quote:
          'The sunset ceremony was everything we dreamed of. The photographs capture every detail — the salt air, the warm light, our family\'s tears of joy. We couldn\'t have asked for a more perfect memory.',
        quoteAuthor: 'Meera Iyer',
      },
      {
        image: W('19'),
        quote:
          'Looking at our wedding film feels like living that evening all over again. The sound of waves, the colours of the sky — Photofilms made time stand still.',
        quoteAuthor: 'Arjun Pillai',
      },
    ],
    videoUrl: '/14299460-hd_1920_1080_25fps.mp4',
    photos: [
      photo(W('21'), 'Beach wedding at Taj Exotica Goa'),
    ],
  },

  {
    slug: 'kavya-rohan-vadodara',
    couple: 'Kavya & Rohan',
    venue: 'Laxmi Vilas Palace',
    city: 'Vadodara',
    location: 'Gujarat',
    date: '2024-03-10',
    category: 'Pre-Wedding',
    coverImage: W('21'),
    tags: ['Laxmi Vilas Palace', 'Heritage', 'Vadodara'],
    narrative:
      'The heritage splendour of Laxmi Vilas Palace provided the perfect canvas for Kavya and Rohan\'s pre-wedding shoot. Golden corridors and garden walks made every frame feel timeless.',
    services: ['pre-wedding'],
    storySections: [
      {
        image: W('2'),
        quote:
          'We were so nervous before the shoot but within minutes we forgot the camera was even there. The photographs feel so natural — so us. We cannot wait to display these at our wedding.',
        quoteAuthor: 'Kavya Desai',
      },
    ],
    videoUrl: '/14249219_1920_1080_100fps.mp4',
    photos: [
      photo(W('4'), 'Pre-wedding at Laxmi Vilas Palace'),
      photo(W('5'), 'Couple in palace gardens'),
    ],
  },

  {
    slug: 'riya-siddharth-aerial',
    couple: 'Riya & Siddharth',
    venue: 'Umaid Bhawan Palace',
    city: 'Jodhpur',
    location: 'Rajasthan',
    date: '2023-11-18',
    category: 'Drone',
    coverImage: W('6'),
    tags: ['Umaid Bhawan', 'Blue City', 'Aerial'],
    narrative:
      'Drone footage transformed Riya and Siddharth\'s Jodhpur celebration into an epic cinematic experience. The Blue City spread out beneath them like a living painting.',
    services: ['wedding-photography', 'drone'],
    storySections: [
      {
        image: W('7'),
        quote:
          'The aerial shots took our breath away. Seeing our wedding from above — the palace, the Blue City, our family gathered — it made us realise just how grand and beautiful the day truly was.',
        quoteAuthor: 'Riya Joshi',
      },
    ],
    videoUrl: '/16024728_1920_1080_25fps.mp4',
    photos: [
      photo(W('8'), 'Aerial view of Umaid Bhawan Palace'),
      photo(W('9'), 'Drone shot of baraat procession'),
    ],
  },

  {
    slug: 'nisha-dhruv-cinematic',
    couple: 'Nisha & Dhruv',
    venue: 'Amanbagh Resort',
    city: 'Alwar',
    location: 'Rajasthan',
    date: '2024-04-05',
    category: 'Film',
    coverImage: W('13'),
    tags: ['Amanbagh Resort', 'Cinematic Film', 'Rajasthan'],
    narrative:
      'Their wedding film swept festival audiences. Nisha and Dhruv wanted a cinematic narrative of their Rajasthani wedding — and we delivered a 12-minute film that still makes them cry.',
    services: ['cinematography', 'wedding-photography'],
    storySections: [
      {
        image: W('14'),
        quote:
          'The film is beyond words. They captured something deeply personal — the way we look at each other, the way our parents held hands watching us. It\'s the most precious thing we own.',
        quoteAuthor: 'Nisha Agarwal',
      },
    ],
    videoUrl: '/8751561-uhd_4096_2160_24fps.mp4',
    photos: [
      photo(W('16'), 'Cinematic still from wedding film'),
      photo(W('18'), 'Film grade wedding portrait'),
    ],
  },
]
