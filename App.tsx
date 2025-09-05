import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background-dark text-light-text font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <Projects />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;