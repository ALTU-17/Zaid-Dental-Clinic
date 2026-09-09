// Shared clinic data — single source of truth for the Express server and Vercel functions.

const clinicInfo = {
  name: 'Zaid Dental Clinic',
  tagline: 'Crafting Confident Smiles',
  address: 'Yashmeen Plaza, Roshan Gate Rd, Siddheshwar Colony, Kaiser Colony,CSN (Aurangabad) - 431001, Maharashtra, India',
  phone: '+91 98765 43210',
  email: 'Drziamd10@gmail.com',
  hours: {
    morning: '11:00 AM - 3:00 PM',
    evening: '6:30 PM - 10:30 PM',
    sunday: 'By Appointment Only'
  },
  stats: [
    { value: '5000+', label: 'Happy Patients' },
    { value: '15+', label: 'Years of Excellence' },
    { value: '98%', label: 'Satisfaction Rate' },
    { value: '3', label: 'Expert Specialists' }
  ],
  doctors: [
      {
    name: 'Dr. Mohammad Ziauddin',
    sname: 'Dr. Mohammad Ziauddin',
    qualification: 'B.D.S.',
    role: 'Dental Surgeon',
    regd: 'Regd. No. A-9312',
    experience: '15+ Years Experience',
    initials: 'MZ',
    photo: 'primedoc.jpeg',
    prime: true
  },
   {
    name: 'Dr. Syeda Samiya Mir Hidayat Ali',
    sname: 'Dr. Syeda Samiya',
    qualification: 'B.D.S.',
    role: 'General Dentist',
    regd: 'Regd. No. A-52000',
    experience: '5+ Years Experience',
    photo: 'mask.jpg',
    initials: 'SS',
    email: 'syedasamiya7@gmail.com',
    phone: '+91 92847 86071'
  },
  {
     name: 'Dr. Seema Yasmeen',
     sname: 'Dr. Seema Yasmeen',
      role: 'General Dentist',
       qualification: 'B.D.S.',
        initials: 'SY',
         experience: '10+ Years Experience'
         },
 
]
};

// Facilities & treatments offered at the clinic (from the clinic's printed facility list).
// Each entry carries an internet photo URL (Wikimedia Commons) + an info blurb shown in the detail modal.
const facilities = [
  { id: 1, title: 'X-Ray Unit', desc: 'In-house digital X-ray for fast, accurate diagnosis.', color: '#2DD4BF',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/Stafne_defect_panorex.jpg/960px-Stafne_defect_panorex.jpg',
    info: 'Digital X-rays give our dentists a precise view of your teeth, roots and jawbone — in seconds and with far less radiation than traditional film. They help detect cavities, infections, impacted teeth and bone loss early, so treatment starts before problems grow.' },
  { id: 2, title: 'Root Canal Treatment', desc: 'Gentle root canal therapy that saves damaged teeth.', color: '#818CF8',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bb/Dental_root_canal_treatment_process.jpg/960px-Dental_root_canal_treatment_process.jpg',
    info: 'Root canal therapy removes infected pulp from inside a damaged tooth, cleans the canals and seals them to stop the infection returning. It relieves pain and saves the natural tooth — often in just one or two comfortable visits.' },
  { id: 3, title: 'Cosmetic Fillings', desc: 'Tooth-coloured composite fillings that blend invisibly.', color: '#FB7185',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/Dental_Restoration.jpg/960px-Dental_Restoration.jpg',
    info: 'Tooth-coloured composite fillings repair cavities, chips and worn edges with material that matches your natural tooth shade. They blend invisibly with your smile and can often be completed in a single sitting.' },
  { id: 4, title: 'Dental Surgery', desc: 'Safe, expert surgical procedures under strict sterile conditions.', color: '#FBBF24',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/Oral_surgery_150408-F-DD059-105.jpg/960px-Oral_surgery_150408-F-DD059-105.jpg',
    info: 'From simple extractions to complex surgical procedures, our dental surgery is performed under strict sterile conditions with modern anaesthesia. You stay comfortable throughout, and we guide your recovery step by step.' },
  { id: 5, title: 'Ultra Sonic Scaling', desc: 'Deep cleaning that lifts plaque and tartar with ultrasonic precision.', color: '#34D399',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/Dentist_Examining_Patient%E2%80%99s_Teeth_with_Dental_Mirror.jpg/960px-Dentist_Examining_Patient%E2%80%99s_Teeth_with_Dental_Mirror.jpg',
    info: 'Ultrasonic scaling uses high-frequency vibrations to gently loosen plaque, tartar and stains above and below the gumline. It is a fast, comfortable deep clean that prevents gum disease and keeps your breath fresh.' },
  { id: 6, title: 'Fixed Metal Bridges', desc: 'Strong, durable metal bridges that restore missing teeth.', color: '#F472B6',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/Teeth_prepared_for_a_bridge_restoration.jpg/960px-Teeth_prepared_for_a_bridge_restoration.jpg',
    info: 'A fixed metal bridge replaces one or more missing teeth by anchoring a strong metal framework to the neighbouring teeth. It restores your bite, stops teeth from shifting, and is built to last for years.' },
  { id: 7, title: 'Fixed Ceramic Bridges', desc: 'Natural-looking ceramic bridges matched to your smile.', color: '#2DD4BF',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/Feldspathic_VM9_Porcelain_Crowns.jpg/960px-Feldspathic_VM9_Porcelain_Crowns.jpg',
    info: 'Ceramic bridges restore missing teeth with natural, tooth-coloured material matched to your smile. The porcelain finish looks lifelike while the bridge stays firmly fixed in place — no removal needed.' },
  { id: 8, title: 'Imported Complete Dentures', desc: 'Premium imported full dentures built for comfort and fit.', color: '#818CF8',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c0/Denture_plate.jpg/960px-Denture_plate.jpg',
    info: 'Our imported complete dentures replace all missing teeth in an arch with premium materials chosen for comfort, fit and a natural look. Each set is custom-made so you can eat, speak and smile with confidence.' },
  { id: 9, title: 'Removable Partial Dentures', desc: 'Comfortable, removable partials to replace missing teeth.', color: '#FB7185',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ec/Removable_partial_golden_denture_%28cropped%29.jpg/960px-Removable_partial_golden_denture_%28cropped%29.jpg',
    info: 'Partial dentures fill the gaps left by missing teeth with a lightweight, removable appliance that clips onto your remaining teeth. They improve chewing, speech and appearance, and are easy to keep clean.' },
  { id: 10, title: 'Gum Surgery', desc: 'Advanced gum treatment for healthier teeth and tissue.', color: '#FBBF24',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/UCLA_Periodontics_Graduate_Clinic.jpg/960px-UCLA_Periodontics_Graduate_Clinic.jpg',
    info: 'Gum (periodontal) surgery treats advanced gum disease, receding gums and infected tissue that scaling alone cannot reach. It restores healthy, firm gums — the foundation your teeth stand on.' },
  { id: 11, title: 'Fractures', desc: 'Complete care for cracked, chipped and fractured teeth.', color: '#34D399',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/22/Cracked_tooth.jpg/960px-Cracked_tooth.jpg',
    info: 'Cracked, chipped or fractured teeth are assessed and repaired to protect the nerve and prevent further damage. Depending on severity, treatment ranges from bonding and crowns to full restoration.' },
  { id: 12, title: 'Orthodontic Treatment', desc: 'Braces and alignment care to straighten teeth at any age.', color: '#F472B6',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/Before_and_After_Photos_following_Orthodontic_Treatment_-_Teeth_Braces.jpg/960px-Before_and_After_Photos_following_Orthodontic_Treatment_-_Teeth_Braces.jpg',
    info: 'Braces and alignment treatment gradually straighten crooked or crowded teeth and correct your bite at any age. The result is a healthier, more confident smile that is easier to clean and care for.' },
  { id: 13, title: 'Silver Filling', desc: 'Long-lasting amalgam fillings for strong, reliable repairs.', color: '#2DD4BF',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d4/Filling_amalgam.jpg/960px-Filling_amalgam.jpg',
    info: 'Amalgam (silver) fillings are a time-tested, highly durable choice for back teeth that bear heavy chewing pressure. They are strong, long-lasting and a cost-effective way to repair decay.' },
  { id: 14, title: 'Impactions', desc: 'Safe removal of impacted teeth, including wisdom teeth.', color: '#818CF8',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1e/Impacted_wisdom_tooth.jpg/960px-Impacted_wisdom_tooth.jpg',
    info: 'An impacted tooth — often a wisdom tooth — is one that cannot fully emerge. We assess it with X-rays and, when needed, remove it safely to prevent pain, infection and damage to neighbouring teeth.' },
  { id: 15, title: 'Portable X-Ray Unit', desc: 'Mobile digital X-ray for diagnosis right at the chair.', color: '#2DD4BF',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/NomadPortableDentalXRayCropped.jpg',
    info: 'Our portable X-ray unit brings digital imaging directly to your chair — no need to move rooms. It captures instant, high-quality images with minimal radiation, making diagnosis faster and more comfortable, especially for children and patients with limited mobility.' },
  { id: 16, title: 'Fixed Zirconia Bridges', desc: 'Ultra-strong, metal-free zirconia bridges matched to your smile.', color: '#F472B6',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Zirconia_bridge.jpg/960px-Zirconia_bridge.jpg',
    info: 'Zirconia bridges are the strongest tooth-coloured restoration available — a single block of high-strength ceramic that replaces missing teeth with a natural, metal-free look. They are biocompatible, stain-resistant and built to last, with no dark metal edge at the gumline.' },
  { id: 17, title: 'Painless Extractions', desc: 'Gentle, virtually pain-free tooth removal.', color: '#FBBF24',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/Air_Force_Lt._Col._Richard_Tate%2C_dentist%2C_performs_a_tooth_extraction.jpeg/960px-Air_Force_Lt._Col._Richard_Tate%2C_dentist%2C_performs_a_tooth_extraction.jpeg',
    info: 'Modern anaesthesia and careful technique make extractions quick and virtually painless. From loose baby teeth to badly damaged molars, we numb the area completely, remove the tooth with minimal trauma and guide you through a smooth, comfortable recovery.' },
  { id: 18, title: 'Implants', desc: 'Permanent, natural-feeling replacement for missing teeth.', color: '#34D399',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1f/Single_crown_implant.jpg/960px-Single_crown_implant.jpg',
    info: 'A dental implant is a titanium root placed in the jawbone that supports a natural-looking crown. It feels, looks and functions like a real tooth — no slipping, no grinding, no harm to neighbouring teeth. Implants are the gold standard for permanently replacing missing teeth.' },
  { id: 19, title: 'Full Mouth Rehabilitation', desc: 'Complete restoration of your smile, bite and function.', color: '#FB7185',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/Primero_kronen_na_productie%2C_voor_individualisering.JPG/960px-Primero_kronen_na_productie%2C_voor_individualisering.JPG',
    info: 'Full mouth rehabilitation rebuilds damaged, worn or missing teeth across the entire arch — combining crowns, bridges, veneers and implants into one planned treatment. The result is a healthy bite, even chewing and a smile transformed from every angle.' },
  { id: 20, title: 'Ultrasonic Scaling and Polishing', desc: 'Deep clean that removes stains, plaque and tartar.', color: '#818CF8',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/28/Tooth_polishing_9332.JPG/960px-Tooth_polishing_9332.JPG',
    info: 'Ultrasonic scaling vibrates away hard tartar and plaque above and below the gumline, while polishing smooths the teeth to slow new build-up and restore their natural shine. It is the most effective way to prevent gum disease and keep your smile bright.' },
  { id: 21, title: 'Community Dentistry', desc: 'Oral health camps, awareness and care for the community.', color: '#2DD4BF',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/38/1st_Dental_Battalion_teaches_children_good_dental_hygeine_160223-M-QB247-008.jpg/960px-1st_Dental_Battalion_teaches_children_good_dental_hygeine_160223-M-QB247-008.jpg',
    info: 'Beyond the clinic, we reach out to schools and communities with free check-up camps, hygiene awareness sessions and preventive care for those who need it most. Good oral health should be within everyone\'s reach — and that work starts in the community.' }
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
