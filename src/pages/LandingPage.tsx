import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { DownloadApp } from '../components/DownloadApp';
import { Features } from '../components/Features';
import { HowItWorks } from '../components/HowItWorks';
import { Industries } from '../components/Industries';
import { DetailedFeatures } from '../components/DetailedFeatures';
import { Comparison } from '../components/Comparison';
import { FAQ } from '../components/FAQ';
import { Testimonials } from '../components/Testimonials';
import { Pricing } from '../components/Pricing';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';

const LandingPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Variables CSS dinámicas inyectadas dependiendo del modo seleccionado
  // Se conectan directamente con las variables globales de Tailwind en index.css
  const cssVars = {
    '--c-accent1': 'var(--color-mangoAmarillo)',
    '--c-accent2': 'var(--color-mangoRosado)',
    
    '--c-bg': isDarkMode ? 'var(--color-fondoOscuro1)' : 'var(--color-fondoClaro1)',
    // Usamos color-mix nativo de CSS para mantener el 90% de opacidad que usabas antes
    '--c-nav-bg': isDarkMode 
      ? 'color-mix(in srgb, var(--color-fondoOscuro1) 90%, transparent)' 
      : 'color-mix(in srgb, var(--color-fondoClaro1) 90%, transparent)', 
    '--c-card': isDarkMode ? 'var(--color-fondoOscuro2)' : 'var(--color-fondoClaro2)',
    
    '--c-text-main': isDarkMode ? 'var(--color-textoPrincipalOscuro)' : 'var(--color-textoPrincipalClaro)',
    '--c-text-muted': isDarkMode ? 'var(--color-textoSecundarioOscuro)' : 'var(--color-textoSecundarioClaro)',
    
    '--c-border': isDarkMode ? 'var(--color-bordeOscuro)' : 'var(--color-bordeClaro)',
    
    '--c-btn-bg': isDarkMode ? 'var(--color-fondoBotonOscuro)' : 'var(--color-fondoBotonClaro)',
    '--c-btn-text': isDarkMode ? 'var(--color-textoBotonOscuro)' : 'var(--color-textoBotonClaro)',
  } as React.CSSProperties;

  return (
    <div style={cssVars} className="min-h-screen bg-(--c-bg) text-(--c-text-main) font-sans selection:bg-[#FFB85C]/30 transition-colors duration-500">
      <Navbar 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode} 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />
      
      <Hero />
      <DownloadApp />
      <Features />
      <HowItWorks />
      <Industries />
      <DetailedFeatures />
      <Comparison />
      <FAQ />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};

export default LandingPage;
