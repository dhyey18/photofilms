import type { WeddingStory } from '@/types'

const W = (n: string) => `https://photofilms.in/images/portfolio/wedding/${n}.webp`
const S = (n: string) => `https://photofilms.in/images/slider/${n}.webp`

const photo = (src: string, alt: string) => ({ src, alt, width: 1200, height: 800 })

const PW = (n: string) => `/prewedding-20260619T072911Z-3-001/prewedding/${n}`
const WD = (n: string) => `/wedd-20260619T073956Z-3-001/wedd/${n}`

export const portfolioStories: WeddingStory[] = [
  {
    slug: 'aanya-rajan-vadodara',
    couple: 'Aanya & Rajan',
    venue: 'Moti Baug Palace',
    city: 'Vadodara',
    location: 'Gujarat',
    date: '2026-06-19',
    category: 'Wedding',
    coverImage: WD('01.jpg'),
    tags: ['Moti Baug Palace', 'Heritage', 'Vadodara'],
    narrative:
      'Aanya and Rajan chose the timeless grandeur of Moti Baug Palace for their wedding — a celebration woven with heirloom jewellery, candlelit rituals, and the kind of joy that fills every corner of a room. We followed them from the first mehendi to the last dance, capturing every stolen glance and every tear of happiness along the way.',
    services: ['wedding-photography', 'cinematography', 'drone'],
    storySections: [
      {
        image: WD('21.jpg'),
        quote:
          'From the very first moment the team arrived, we knew our day was in the best hands. Every photograph feels alive — like we can step right back into that moment.',
        quoteAuthor: 'Aanya',
      },
      {
        image: WD('45.jpg'),
        quote:
          'Looking at our wedding gallery is like watching a film of the most beautiful day of our lives. Photofilms truly captured our story, not just our faces.',
        quoteAuthor: 'Rajan',
      },
    ],
    photos: [
      photo(WD('01.jpg'), 'Aanya and Rajan wedding'),
      photo(WD('02.jpg'), 'Wedding ceremony'),
      photo(WD('03.jpg'), 'Bridal portrait'),
      photo(WD('04.jpg'), 'Wedding rituals'),
      photo(WD('05.jpg'), 'Couple wedding portrait'),
      photo(WD('06.jpg'), 'Wedding celebration'),
      photo(WD('07.jpg'), 'Candid wedding moment'),
      photo(WD('08.jpg'), 'Wedding photography'),
      photo(WD('09.jpg'), 'Heritage wedding'),
      photo(WD('10.jpg'), 'Wedding day story'),
      photo(WD('11.jpg'), 'Bridal detail'),
      photo(WD('12.jpg'), 'Wedding ceremony moment'),
      photo(WD('13.jpg'), 'Couple portrait'),
      photo(WD('14.jpg'), 'Wedding candid'),
      photo(WD('15.jpg'), 'Mandap ceremony'),
      photo(WD('16.jpg'), 'Wedding ritual'),
      photo(WD('17.jpg'), 'Bridal portrait'),
      photo(WD('18.jpg'), 'Wedding celebration'),
      photo(WD('19.jpg'), 'Candid moment'),
      photo(WD('20.jpg'), 'Wedding day portrait'),
      photo(WD('21.jpg'), 'Couple at Moti Baug'),
      photo(WD('22.jpg'), 'Wedding ceremony'),
      photo(WD('23.jpg'), 'Bridal detail shot'),
      photo(WD('24.jpg'), 'Wedding story'),
      photo(WD('25.jpg'), 'Heritage palace wedding'),
      photo(WD('26.jpg'), 'Wedding rituals'),
      photo(WD('27.jpg'), 'Couple portrait'),
      photo(WD('29.jpg'), 'Wedding candid'),
      photo(WD('30.jpg'), 'Ceremony moment'),
      photo(WD('31.jpg'), 'Wedding portrait'),
      photo(WD('32.jpg'), 'Bridal photography'),
      photo(WD('33.jpg'), 'Wedding day'),
      photo(WD('34.jpg'), 'Candid wedding'),
      photo(WD('35.jpg'), 'Wedding story'),
      photo(WD('36.jpg'), 'Heritage wedding photography'),
      photo(WD('37.jpg'), 'Couple celebration'),
      photo(WD('38.jpg'), 'Wedding moment'),
      photo(WD('39.jpg'), 'Bridal portrait'),
      photo(WD('40.jpg'), 'Wedding ceremony'),
      photo(WD('41.jpg'), 'Couple candid'),
      photo(WD('42.jpg'), 'Wedding rituals'),
      photo(WD('43.jpg'), 'Wedding photography'),
      photo(WD('44.jpg'), 'Ceremony detail'),
      photo(WD('45.jpg'), 'Wedding portrait'),
      photo(WD('46.jpg'), 'Candid moment'),
      photo(WD('47.jpg'), 'Wedding celebration'),
      photo(WD('48.jpg'), 'Bridal story'),
      photo(WD('49.jpg'), 'Wedding day moment'),
      photo(WD('50.jpg'), 'Couple at palace'),
      photo(WD('51.jpg'), 'Wedding ceremony'),
      photo(WD('52.jpg'), 'Heritage wedding'),
      photo(WD('53.jpg'), 'Wedding portrait'),
      photo(WD('54.jpg'), 'Candid wedding shot'),
      photo(WD('55.jpg'), 'Wedding photography'),
      photo(WD('56.jpg'), 'Bridal detail'),
      photo(WD('57.jpg'), 'Wedding moment'),
      photo(WD('58.jpg'), 'Ceremony portrait'),
      photo(WD('59.jpg'), 'Wedding story'),
      photo(WD('60.jpg'), 'Couple wedding'),
      photo(WD('61.jpg'), 'Wedding rituals'),
      photo(WD('62.jpg'), 'Candid celebration'),
      photo(WD('63.jpg'), 'Wedding day'),
      photo(WD('64.jpg'), 'Bridal portrait'),
      photo(WD('65.jpg'), 'Wedding ceremony'),
      photo(WD('66.jpg'), 'Heritage palace'),
      photo(WD('67.jpg'), 'Wedding candid'),
      photo(WD('68.jpg'), 'Couple portrait'),
      photo(WD('69.jpg'), 'Wedding moment'),
      photo(WD('70.jpg'), 'Ceremony detail'),
      photo(WD('71.jpg'), 'Wedding photography'),
      photo(WD('72.jpg'), 'Bridal story'),
      photo(WD('73.jpg'), 'Wedding celebration'),
      photo(WD('74.jpg'), 'Candid moment'),
      photo(WD('75.jpg'), 'Wedding day portrait'),
      photo(WD('76.jpg'), 'Heritage wedding'),
      photo(WD('77.jpg'), 'Wedding ceremony'),
      photo(WD('78.jpg'), 'Couple candid'),
      photo(WD('79.jpg'), 'Wedding rituals'),
      photo(WD('80.jpg'), 'Bridal portrait'),
      photo(WD('81.jpg'), 'Wedding story'),
      photo(WD('82.jpg'), 'Ceremony moment'),
      photo(WD('83.jpg'), 'Wedding photography'),
      photo(WD('84.jpg'), 'Wedding celebration'),
    ],
  },

  {
    slug: 'isha-kush-prewedding',
    couple: 'Isha & Kush',
    venue: 'Vadodara',
    city: 'Vadodara',
    location: 'Gujarat',
    date: '2026-06-19',
    category: 'Pre-Wedding',
    coverImage: PW('IshaKush-093.jpg'),
    tags: ['Pre-Wedding', 'Vadodara', 'Gujarat'],
    narrative:
      'Isha and Kush — a quiet chemistry, a thousand unspoken moments. We followed them through the golden streets of Vadodara, letting love unfold at its own pace. Every frame carries the warmth of two people who have found their forever in each other.',
    services: ['pre-wedding'],
    storySections: [
      {
        image: PW('IshaKush-097.jpg'),
        quote:
          'We were so nervous before the shoot but the team made us feel completely at ease. The photographs are absolutely stunning — they captured us so naturally, so genuinely.',
        quoteAuthor: 'Isha',
      },
      {
        image: PW('NR-40.jpg'),
        quote:
          'Every single photo tells a story. We keep coming back to look at them. This is the most beautiful gift we could have given ourselves before our wedding.',
        quoteAuthor: 'Kush',
      },
    ],
    photos: [
      photo(PW('068A9775.jpg'),    'Isha and Kush pre-wedding portrait'),
      photo(PW('IshaKush-093.jpg'),'Isha and Kush romantic moment'),
      photo(PW('068A4118-2.jpg'),  'Couple outdoor shoot'),
      photo(PW('NR-40.jpg'),       'Natural candid moment'),
      photo(PW('IshaKush-097.jpg'),'Isha and Kush golden hour'),
      photo(PW('074A1436.jpg'),    'Pre-wedding photography Vadodara'),
      photo(PW('068A3416.jpg'),    'Couple portrait session'),
      photo(PW('068A3431.jpg'),    'Romantic pre-wedding shot'),
      photo(PW('1W7A8565.jpg'),    'Love story photography'),
      photo(PW('074A1408.jpg'),    'Pre-wedding candid'),
      photo(PW('068A1000.jpg'),    'Couple in Vadodara'),
      photo(PW('068A0347.jpg'),    'Pre-wedding portrait'),
      photo(PW('002.jpg'),         'Romantic couple shot'),
      photo(PW('1W7A8136.jpg'),    'Pre-wedding session'),
      photo(PW('068A0387.jpg'),    'Couple photography'),
      photo(PW('068A0038.jpg'),    'Pre-wedding story'),
      photo(PW('068A9781.jpg'),    'Love portrait'),
      photo(PW('068A4090.jpg'),    'Candid pre-wedding'),
      photo(PW('068A0705.jpg'),    'Outdoor couple shoot'),
      photo(PW('1W7A5434.jpg'),    'Pre-wedding romance'),
      photo(PW('NR-43.jpg'),       'Natural light portrait'),
      photo(PW('3Y8A1210.jpg'),    'Golden hour couple'),
      photo(PW('068A9997.jpg'),    'Pre-wedding photography'),
      photo(PW('068A1162.jpg'),    'Couple portrait'),
      photo(PW('068A9640.jpg'),    'Romantic portrait session'),
      photo(PW('1W7A4943.jpg'),    'Pre-wedding story frame'),
      photo(PW('074A8702.jpg'),    'Couple candid shot'),
      photo(PW('068A0044.jpg'),    'Love story frame'),
      photo(PW('1W7A5362.jpg'),    'Pre-wedding couple'),
      photo(PW('068A0388.jpg'),    'Portrait photography'),
      photo(PW('068A8680.jpg'),    'Couple outdoor portrait'),
      photo(PW('_H3A4305.jpg'),    'Pre-wedding natural shot'),
      photo(PW('074A4284.jpg'),    'Romantic couple frame'),
      photo(PW('_H3A4500.jpg'),    'Pre-wedding session'),
      photo(PW('074A8311-.jpg'),   'Couple story frame'),
      photo(PW('1W7A5411.jpg'),    'Pre-wedding portrait'),
      photo(PW('1W7A6485.jpg'),    'Love photography'),
      photo(PW('074A9473.jpg'),    'Couple candid'),
      photo(PW('074A3514.jpg'),    'Pre-wedding shoot'),
      photo(PW('074A4473.jpg'),    'Romantic frame'),
      photo(PW('074A0773.jpg'),    'Pre-wedding photography'),
      photo(PW('1W7A6487.jpg'),    'Couple portrait Vadodara'),
      photo(PW('068A0112.jpg'),    'Pre-wedding love story'),
    ],
  },

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
