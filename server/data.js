// Shared clinic data — single source of truth for the Express server and Vercel functions.

const clinicInfo = {
  name: 'Zaid Dental Clinic',
  tagline: 'Crafting Confident Smiles',
  address: 'Yashmeen Plaza, Roshan Gate Rd, Siddheshwar Colony, Kaiser Colony,CSN (Aurangabad) - 431001, Maharashtra, India',
  phone: '+91 98765 43210',
  email: 'hello@zaiddentalclinic.com',
  hours: {
    morning: '11:00 AM - 3:00 PM',
    evening: '6:30 PM - 10:30 PM',
    sunday: 'By Appointment Only'
  },
  stats: [
    { value: '5000+', label: 'Happy Patients' },
    { value: '15+', label: 'Years of Excellence' },
    { value: '98%', label: 'Satisfaction Rate' },
    { value: '12', label: 'Expert Specialists' }
  ],
  doctors: [
    {
      name: 'Dr. Mohammad Ziauddin',
      qualification: 'B.D.S.',
      role: 'Dental Surgeon',
      regd: 'Regd. No. A-9312',
      experience: '15+ Years Experience',
      initials: 'MZ',
      photo: 'primedoc.jpeg',
      prime: true
    },
    { name: 'Dr. Seema Yasmeen', role: 'General Dentist', initials: 'SY',qualification: 'B.D.S.'},
    { name: 'Dr. Syeda Samiya', role: 'General Dentist', initials: 'SS' }
  ]
};

// Facilities & treatments offered at the clinic (from the clinic's printed facility list).
const facilities = [
  { id: 1, title: 'X-Ray Unit', desc: 'In-house digital X-ray for fast, accurate diagnosis.', color: '#2DD4BF' },
  { id: 2, title: 'Root Canal Treatment', desc: 'Gentle root canal therapy that saves damaged teeth.', color: '#818CF8' },
  { id: 3, title: 'Cosmetic Fillings', desc: 'Tooth-coloured composite fillings that blend invisibly.', color: '#FB7185' },
  { id: 4, title: 'Dental Surgery', desc: 'Safe, expert surgical procedures under strict sterile conditions.', color: '#FBBF24' },
  { id: 5, title: 'Ultra Sonic Scaling', desc: 'Deep cleaning that lifts plaque and tartar with ultrasonic precision.', color: '#34D399' },
  { id: 6, title: 'Fixed Metal Bridges', desc: 'Strong, durable metal bridges that restore missing teeth.', color: '#F472B6' },
  { id: 7, title: 'Fixed Ceramic Bridges', desc: 'Natural-looking ceramic bridges matched to your smile.', color: '#2DD4BF' },
  { id: 8, title: 'Imported Complete Dentures', desc: 'Premium imported full dentures built for comfort and fit.', color: '#818CF8' },
  { id: 9, title: 'Removable Partial Dentures', desc: 'Comfortable, removable partials to replace missing teeth.', color: '#FB7185' },
  { id: 10, title: 'Gum Surgery', desc: 'Advanced gum treatment for healthier teeth and tissue.', color: '#FBBF24' },
  { id: 11, title: 'Fractures', desc: 'Complete care for cracked, chipped and fractured teeth.', color: '#34D399' },
  { id: 12, title: 'Orthodontic Treatment', desc: 'Braces and alignment care to straighten teeth at any age.', color: '#F472B6' },
  { id: 13, title: 'Silver Filling', desc: 'Long-lasting amalgam fillings for strong, reliable repairs.', color: '#2DD4BF' },
  { id: 14, title: 'Impactions', desc: 'Safe removal of impacted teeth, including wisdom teeth.', color: '#818CF8' }
];

// Backwards-compatible export name — /api/services now serves the facilities list.
const services = facilities;

const testimonials = [
  {
    id: 1,
    name: 'Noor Khan',
    rating: 5,
    text: 'The team at Zaid Dental transformed my smile completely. The veneers look absolutely natural. Best investment I\'ve ever made!',
    treatment: 'Smile Makeover',
    avatar: 'PS',
    photo: 'patent1.jpeg'
  },
  {
    id: 2,
    name: 'Abdul Rehman',
    rating: 5,
    text: 'I was terrified of dentists but the staff made me feel completely at ease. My implant procedure was painless and the results are phenomenal.',
    treatment: 'Dental Implant',
    avatar: 'RG',
    photo: 'patent2.jpeg'
  },
  {
    id: 3,
    name: 'Zainab Ali',
    rating: 5,
    text: 'Took my kids here and they loved it! The pediatric team is so patient and fun. My children actually look forward to their check-ups now.',
    treatment: 'Pediatric Care',
    avatar: 'AV',
    photo: 'patent3.jpeg'
  }
];

module.exports = { clinicInfo, services, testimonials };
