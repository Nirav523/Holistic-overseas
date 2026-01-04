
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { GlobalReach } from './components/GlobalReach';
import { Services } from './components/Services';
import { Destinations } from './components/Destinations';
import { Process } from './components/Process';
import { Philosophy } from './components/Philosophy';
import { Contact } from './components/Contact';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';

function App() {
  return (
    <main className="w-full min-h-screen bg-[#e5e5e5]">
      <Navbar />
      <Hero />
      <div id="intro"><Intro /></div>
      <div id="global-reach"><GlobalReach /></div>
      <div id="services"><Services /></div>
      <div id="global-hubs"><Destinations /></div>
      <div id="blueprint"><Process /></div>
      <Philosophy />
      <Contact />
      <div id="faq"><Faq /></div>
      <Footer />
    </main>
  );
}

export default App;
