export const RESTAURANT = {
  name: 'Chopras Indian Restaurant',
  tagline: 'Authentic Indian Street Food in Den Haag',
  address: {
    street: 'Leyweg 986',
    postcode: '2545 GW',
    city: 'Den Haag',
    country: 'Netherlands',
    countryCode: 'NL',
    full: 'Leyweg 986, 2545 GW Den Haag, Netherlands',
    coordinates: { lat: 52.0583, lng: 4.2932 },
  },
  contact: {
    phone: '+31630645930',
    phoneDisplay: '+31 6 30645930',
    email: 'info@chopras.nl',
    website: 'https://chopras.nl',
  },
  hours: [
    { day: 'Monday', dayNl: 'Maandag', open: false },
    { day: 'Tuesday', dayNl: 'Dinsdag', open: true, from: '16:30', to: '22:30' },
    { day: 'Wednesday', dayNl: 'Woensdag', open: true, from: '16:30', to: '22:30' },
    { day: 'Thursday', dayNl: 'Donderdag', open: true, from: '16:30', to: '22:30' },
    { day: 'Friday', dayNl: 'Vrijdag', open: true, from: '16:30', to: '22:30' },
    { day: 'Saturday', dayNl: 'Zaterdag', open: true, from: '16:30', to: '22:30' },
    { day: 'Sunday', dayNl: 'Zondag', open: true, from: '16:30', to: '22:30' },
  ],
  social: {
    tripadvisor: 'https://www.tripadvisor.com/Restaurant_Review-g188633-d27464805',
  },
  logo: 'https://chopras.nl/wp-content/uploads/2025/11/Chopras-logo-main-500-x-300-px7.png',
  cuisines: ['North Indian', 'Indo-Chinese', 'Indian Street Food'],
  features: [
    'Halal Certified',
    'Vegetarian Options',
    'Vegan Options',
    'Wheelchair Accessible',
    'Family Friendly',
    'Pet Friendly',
    'Private Event Hall',
    'Catering Available',
    'Free Parking',
  ],
  serviceAreas: ['Den Haag', 'Rijswijk', 'Delft', 'Zoetermeer', 'Voorburg', 'Leidschendam', 'Westland'],
  priceRange: '€€',
} as const

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://chopras.nl'
