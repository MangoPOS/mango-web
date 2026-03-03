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

// === CONFIGURACIÓN DE COLORES ===
// Modificá estos valores para cambiar los colores en toda la landing page
const THEME = {
  primary: '#445367',         // Azul pizarra (usado en botones y fondo oscuro)
  accent1: '#FFB85C',         // Amarillo/Naranja claro
  accent2: '#EE8374',         // Naranja/Salmón
  
  bgLight: '#FDFCF8',         // Fondo crema pálido (modo claro)
  bgDark: '#435061',          // Fondo azul oscuro (modo oscuro)
  
  cardLight: '#ffffff',       // Fondo de tarjetas u objetos sobre el fondo (modo claro)
  cardDark: '#323D4D',        // Fondo de tarjetas u objetos (modo oscuro)
  
  textMainLight: '#1f2937',   // Texto principal, casi negro (modo claro)
  textMainDark: '#ffffff',    // Texto principal, blanco (modo oscuro)
  
  textMutedLight: '#6b7280',  // Texto secundario (modo claro)
  textMutedDark: '#cbd5e1',   // Texto secundario (modo oscuro)
  
  borderLight: '#f3f4f6',     // Bordes sutiles (modo claro)
  borderDark: '#5E708A',      // Bordes sutiles (modo oscuro)
  
  btnBgLight: '#445367',      // Fondo de botones principales (modo claro)
  btnBgDark: '#FFB85C',       // Fondo de botones principales (modo oscuro) para mayor contraste
  
  btnTextLight: '#ffffff',    // Texto del botón principal (modo claro)
  btnTextDark: '#1f2937',     // Texto del botón principal (modo oscuro)
};

const LandingPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Variables CSS dinámicas inyectadas dependiendo del modo seleccionado
  const cssVars = {
    '--c-primary': THEME.primary,
    '--c-accent1': THEME.accent1,
    '--c-accent2': THEME.accent2,
    
    '--c-bg': isDarkMode ? THEME.bgDark : THEME.bgLight,
    '--c-nav-bg': isDarkMode ? THEME.bgDark + 'E6' : THEME.bgLight + 'E6', // E6 = 90% opacity
    '--c-card': isDarkMode ? THEME.cardDark : THEME.cardLight,
    
    '--c-text-main': isDarkMode ? THEME.textMainDark : THEME.textMainLight,
    '--c-text-muted': isDarkMode ? THEME.textMutedDark : THEME.textMutedLight,
    
    '--c-border': isDarkMode ? THEME.borderDark : THEME.borderLight,
    
    '--c-btn-bg': isDarkMode ? THEME.btnBgDark : THEME.btnBgLight,
    '--c-btn-text': isDarkMode ? THEME.btnTextDark : THEME.btnTextLight,
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
