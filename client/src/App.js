import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import About from './components/About';
import Doctors from './components/Doctors';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Equipment from './components/Equipment';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [clinicData, setClinicData] = useState(null);
  const [services, setServices] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [clinicRes, servicesRes, testimonialsRes] = await Promise.all([
          fetch('/api/clinic-info'),
          fetch('/api/services'),
          fetch('/api/testimonials')
        ]);
        const [clinic, svc, test] = await Promise.all([
          clinicRes.json(),
          servicesRes.json(),
          testimonialsRes.json()
        ]);
        setClinicData(clinic);
        setServices(svc);
        setTestimonials(test);
      } catch (err) {
        console.error('API fetch failed, using defaults');
      } finally {
        setTimeout(() => setLoading(false), 3200);
      }
    };
    fetchAll();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="app">
      <Navbar clinicData={clinicData} />
      <main>
        <Hero clinicData={clinicData} />
        <Stats clinicData={clinicData} />
        <Services services={services} />
        <About />
        <Doctors clinicData={clinicData} />
        <Equipment />
        <Testimonials testimonials={testimonials} />
        <Gallery />
        
        <Booking clinicData={clinicData} />
      </main>
      <Footer clinicData={clinicData} />
    </div>
  );
}

export default App;
