/**
 * ╔══════════════════════════════════════════════════════╗
 * ║   WEDDING CONFIG — Edit everything in this file      ║
 * ║   All names, dates, venues, contacts live here.      ║
 * ╚══════════════════════════════════════════════════════╝
 */

export const COUPLE = {
  groom: { firstName: 'Rohith',     lastName: 'Annamaneni', fullName: 'Chi. Rohith'              },
  bride: { firstName: 'Deekshitha', lastName: 'Vennamaneni', fullName: 'Chi. La. Sou. Deekshitha' },
  tagline: 'are joyfully getting married',
  hashtag: '#RohithWedDeekshitha',
};

export const WEDDING = {
  /** ISO date-time in IST — drives the live countdown */
  date:         '2026-06-25T08:38:00+05:30',
  displayDate:  'Thursday, 25th June 2026',
  time:         '08:38 AM IST',
  nakshatra:    'Swathi Nakshatram · Karkataka Lagnam',
  venue:        'Vinayaka Function Hall',
  address:      'Near Delhi Public School, H-W Highway Road, Rampur, Hanumakonda',
  feast:        'Lunch will be served at 12:00 noon',
  rsvpDeadline: '15th June 2026',
};

export const CONTACTS = {
  /** WhatsApp number for RSVP — country code + number, no + sign */
  whatsappRsvp: '917981249483',
  bride: {
    label: 'Deekshitha',
    name:  'Vennamaneni Muralidhar Rao',
    phone: '+91 79812 49483',
    wa:    '917981249483',
  },
  groom: {
    label: 'Rohith',
    name:  'Annamaneni Jayasimha Rao',
    phone: '+91 88970 14096',
    wa:    '918897014096',
  },
};

export const SHLOKA = {
  sanskrit: '"शुभे शोभने मुहूर्ते आदिब्रह्मण: प्रेरणायाम्"',
  meaning:  'At this auspicious Swathi Nakshatram, Karkataka Lagnam muhurtham, blessed by the divine, we joyfully invite you.',
};

export const FAMILIES = {
  groom: {
    parents: ['Late Annamaneni Prudhvi Rajeshwar Rao', 'Smt. Vijayalaxmi'],
    label:   'Joyfully present their only son',
    name:    'Chi. Rohith',
  },
  bride: {
    parents: ['Maharaja Sri Vennamaneni Muralidhar Rao', 'Smt. Suryakala'],
    label:   'Proudly present their eldest daughter',
    name:    'Chi. La. Sou. Deekshitha',
  },
  hosts: {
    invitedBy:   'Annamaneni Jayasimha Rao & Madhuri',
    blessings:   'Annamaneni Leeladevi (w/o Late Madhava Rao)',
    compliments: [
      'Mattapelli Padmavathi & Ramgopal Rao',
      'Annamaneni Uma Maheshwar Rao (w/o Late Rajini)',
    ],
  },
};

const WEDDING_VENUE   = 'Vinayaka Function Hall';
const WEDDING_ADDRESS = 'Near Delhi Public School, H-W Highway, Rampur, Hanumakonda';
const WEDDING_MAP     = 'https://maps.google.com/?q=Vinayaka+Function+Hall+Rampur+Hanumakonda';

const GROOM_VENUE   = "Groom's Residence";
const GROOM_ADDRESS = 'Rampur, Hanumakonda';
const GROOM_MAP     = 'https://maps.app.goo.gl/PSt3a4AJQGyBi3vj9';

export const EVENTS = [
  {
    id:        'pellikoduku',
    name:      'Pellikoduku',
    date:      'Sunday, 21st June 2026',
    time:      'Morning',
    venue:     'Nitya A/C Banquet Hall',
    address:   'Mini Function Hall',
    mapsUrl:   'https://maps.app.goo.gl/Ns6rSA4izDbgTDxJA',
    icon:      '🎊',
    gradient:  'linear-gradient(135deg, #4F46E5 0%, #7C3AED 60%, #5B21B6 100%)',
    badge:     'Jun 21',
    badgeBg:   '#D4AF37',
    badgeColor:'#4F46E5',
    btnColor:  '#4F46E5',
  },
  {
    id:        'haldi',
    name:      'Haldi & Mehendi',
    date:      'Tuesday, 23rd June 2026',
    time:      'Haldi — Morning · Mehendi — Evening',
    venue:     GROOM_VENUE,
    address:   GROOM_ADDRESS,
    mapsUrl:   GROOM_MAP,
    icon:      '🌸',
    gradient:  'linear-gradient(135deg, #F59E0B 0%, #D97706 50%, #92400E 100%)',
    badge:     'Jun 23',
    badgeBg:   '#D4AF37',
    badgeColor:'#1A4332',
    btnColor:  '#1A4332',
  },
  {
    id:        'wedding',
    name:      'Wedding Ceremony',
    date:      'Thursday, 25th June 2026',
    time:      '08:38 AM',
    note:      'Sumuhurtham',
    feast:     'Lunch will be served at 12:00 noon',
    venue:     WEDDING_VENUE,
    address:   WEDDING_ADDRESS,
    mapsUrl:   WEDDING_MAP,
    icon:      '🪷',
    gradient:  'linear-gradient(135deg, #8B0000 0%, #6B0000 55%, #3B0000 100%)',
    badge:     'Jun 25',
    badgeBg:   '#D4AF37',
    badgeColor:'#8B0000',
    btnColor:  '#8B0000',
    featured:  true,
    fullWidth: true,
  },
];

/** Replace src with your actual pre-wedding photo URLs */
export const GALLERY = [
  { src: '/DSC01851 copy.jpg',   caption: '' },
  { src: '/DSC01803 copy.jpg',   caption: '' },
  { src: '/DSC09404.JPG',        caption: '' },
  { src: '/DSC09419.JPG',        caption: 'Two families, one beautiful journey.' },
];
