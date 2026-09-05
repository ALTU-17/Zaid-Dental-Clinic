// Shared clinic data — single source of truth for the Express server and Vercel functions.

const clinicInfo = {
  name: 'Zaid Dental Clinic',
  tagline: 'Crafting Confident Smiles',
  address: 'Yashmeen Plaza, Roshan Gate Rd, Siddheshwar Colony, Kaiser Colony, Aurangabad - 431001, Maharashtra, India',
  phone: '+91 98765 43210',
  email: 'hello@zaiddentalclinic.com',
  hours: {
    weekdays: '9:00 AM - 8:00 PM',
    saturday: '9:00 AM - 6:00 PM',
    sunday: 'By Appointment Only'
  },
  stats: [
    { value: '5000+', label: 'Happy Patients' },
    { value: '15+', label: 'Years of Excellence' },
    { value: '98%', label: 'Satisfaction Rate' },
    { value: '12', label: 'Expert Specialists' }
  ],
  doctors: [
    { name: 'Dr. Mohammad Ziauddin', specialty: 'Chief Dental Surgeon', initials: 'MZ', photo: 'dr-mohammad-ziauddin.jpeg' },
    { name: 'Dr. Seema Yasmeen', specialty: 'General Dentist', initials: 'SY' },
    { name: 'Dr. Syeda Samiya', specialty: 'General Dentist', initials: 'SS', photo: 'dr-syeda-samiya.jpg' }
  ]
};

const services = [
  {
    id: 1,
    icon: 'tooth',
    title: 'General Dentistry',
    desc: 'Comprehensive oral health care including cleanings, fillings, and preventive treatments for the whole family.',
    color: '#2DD4BF'
  },
  {
    id: 2,
    icon: 'sparkle',
    title: 'Teeth Whitening',
    desc: 'Professional-grade whitening treatments that deliver dramatic results safely and comfortably.',
    color: '#818CF8'
  },
  {
    id: 3,
    icon: 'shield',
    title: 'Dental Implants',
    desc: 'Permanent tooth replacement solutions that look, feel, and function like your natural teeth.',
    color: '#FB7185'
  },
  {
    id: 4,
    icon: 'align',
    title: 'Orthodontics',
    desc: 'Clear aligners and braces to straighten teeth and perfect your bite at any age.',
    color: '#FBBF24'
  },
  {
    id: 5,
    icon: 'smile',
    title: 'Smile Makeover',
    desc: 'Complete aesthetic transformations combining veneers, contouring, and bonding for your dream smile.',
    color: '#34D399'
  },
  {
    id: 6,
    icon: 'heart',
    title: 'Pediatric Dentistry',
    desc: 'Gentle, child-friendly dental care in a warm and welcoming environment kids actually enjoy.',
    color: '#F472B6'
  }
];

const testimonials = [
  {
    id: 1,
    name: 'Altamash Shaikh',
    rating: 5,
    text: 'The team at Zaid Dental transformed my smile completely. The veneers look absolutely natural. Best investment I\'ve ever made!',
    treatment: 'Smile Makeover',
    avatar: 'PS',
    photo: 'patent1.jpeg'
  },
  {
    id: 2,
    name: 'Rahul Gupta',
    rating: 5,
    text: 'I was terrified of dentists but the staff made me feel completely at ease. My implant procedure was painless and the results are phenomenal.',
    treatment: 'Dental Implant',
    avatar: 'RG',
    photo: 'patent2.jpeg'
  },
  {
    id: 3,
    name: 'Anjali Verma',
    rating: 5,
    text: 'Took my kids here and they loved it! The pediatric team is so patient and fun. My children actually look forward to their check-ups now.',
    treatment: 'Pediatric Care',
    avatar: 'AV'
  }
];

module.exports = { clinicInfo, services, testimonials };