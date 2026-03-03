import { useState } from 'react';
import { Zap, Cloud, MonitorSmartphone, Printer, Box, CheckCircle2, Store, ShoppingBag, BadgeDollarSign, ArrowRight, ShoppingBasket, Sun, Moon, Download, Wallet, Target, BarChart3, ShieldCheck, FileText, Package, MapPin, Users, Menu, X, InfoIcon } from 'lucide-react';

// === CONFIGURACIÓN DE COLORES ===
// Modificá estos valores para cambiar los colores en toda la landing page
// El tema oscuro utilizará automáticamente el color principal como fondo.
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
// ================================

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
      
      {/* Navbar - Minimalist */}
      <nav className="fixed w-full z-50 bg-(--c-nav-bg) backdrop-blur-sm border-b border-(--c-border) transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-10 h-10 bg-linear-to-br from-(--c-accent1) to-(--c-accent2) rounded-xl flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
                <ShoppingBasket size={22} strokeWidth={2.5} />
              </div>
              <span className="font-titulo text-2xl font-black tracking-tight text-(--c-text-main)">
                NexPOS
              </span>
            </div>
            <div className="hidden md:flex items-center gap-10">
              <a href="#caracteristicas" className="text-(--c-text-muted) hover:text-(--c-text-main) font-medium transition-colors">Características</a>
              <a href="#rubros" className="text-(--c-text-muted) hover:text-(--c-text-main) font-medium transition-colors">Rubros</a>
              <a href="#precios" className="text-(--c-text-muted) hover:text-(--c-text-main) font-medium transition-colors">Precios</a>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)} 
                className="p-2.5 text-(--c-text-muted) hover:text-(--c-text-main) bg-(--c-card) border border-(--c-border) hover:border-(--c-text-muted) rounded-full transition-all flex items-center justify-center"
                aria-label="Alternar Dark Mode"
              >
                {isDarkMode ? <Sun size={20} strokeWidth={2.5} /> : <Moon size={20} strokeWidth={2.5} />}
              </button>
              <button className="hidden md:block text-(--c-text-muted) font-medium hover:text-(--c-text-main) transition-colors px-2">
                Iniciar Sesión
              </button>
              <button className="hidden md:flex bg-(--c-btn-bg) text-(--c-btn-text) px-6 py-2.5 rounded-full font-medium transition-all hover:opacity-90 items-center gap-2 shadow-sm">
                Solicitar Demo
              </button>
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                className="md:hidden p-2 bg-(--c-accent1) text-[#1f2937] hover:opacity-90 rounded-lg transition-all"
                aria-label="Menú"
              >
                {isMobileMenuOpen ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
              </button>
            </div>
          </div>
        </div>
          
        {/* Menú Mobile */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-(--c-border) bg-(--c-bg) px-4 pt-2 pb-6 space-y-2 shadow-lg absolute w-full z-40">
            <a href="#caracteristicas" onClick={() => setIsMobileMenuOpen(false)} className="block text-(--c-text-main) hover:bg-(--c-card) font-medium text-lg py-3 px-4 rounded-xl transition-colors">Características</a>
            <a href="#rubros" onClick={() => setIsMobileMenuOpen(false)} className="block text-(--c-text-main) hover:bg-(--c-card) font-medium text-lg py-3 px-4 rounded-xl transition-colors">Rubros</a>
            <a href="#precios" onClick={() => setIsMobileMenuOpen(false)} className="block text-(--c-text-main) hover:bg-(--c-card) font-medium text-lg py-3 px-4 rounded-xl transition-colors">Precios</a>
          </div>
        )}
      </nav>

      {/* Hero Section - Clean & Warm */}
      <section className="relative pt-36 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
        
        {/* Subtle Grid Background */}
        <div 
          className="absolute inset-0 pointer-events-none z-0 opacity-40 md:opacity-60" 
          style={{
            backgroundImage: 'linear-gradient(to right, var(--c-border) 1px, transparent 1px), linear-gradient(to bottom, var(--c-border) 1px, transparent 1px)',
            backgroundSize: '4rem 4rem',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 20%, #000 40%, transparent 100%)',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 20%, #000 40%, transparent 100%)'
          }}
        ></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight text-(--c-text-main) mb-8 leading-[1.05]">
            Tu mostrador, <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-(--c-accent1) to-(--c-accent2)">
              más rápido y simple.
            </span>
          </h1>
          
          <p className="mt-6 text-xl md:text-2xl text-(--c-text-muted) max-w-2xl mx-auto font-light leading-relaxed mb-12">
            Gestión de inventario y facturación AFIP para comercios modernos. Diseñado con calidez, construido para la velocidad.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="w-11/12 sm:w-auto bg-(--c-btn-bg) text-(--c-btn-text) px-8 py-4 rounded-full font-medium text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-md">
              Comenzar prueba gratis
              <ArrowRight size={20} />
            </button>
            <button className="w-11/12 sm:w-auto bg-(--c-card) text-(--c-text-main) border border-(--c-border) px-8 py-4 rounded-full font-medium text-lg hover:bg-(--c-bg) transition-colors flex items-center justify-center gap-2">
              Como funciona
              <InfoIcon size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-24 bg-(--c-card) border-t border-(--c-border)">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 bg-linear-to-br from-(--c-bg) to-(--c-card) p-8 lg:p-12 rounded-3xl border border-(--c-border) shadow-sm">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-(--c-accent1)/10 text-(--c-text-main) font-bold tracking-widest uppercase text-xs mb-2">
                <MonitorSmartphone size={14} className="text-(--c-accent1)" /> Desktop App
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-(--c-text-main) tracking-tight">
                Llevá NexPOS a <br/>tu computadora
              </h2>
              <p className="text-lg text-(--c-text-muted) font-light leading-relaxed max-w-xl">
                Descargá nuestra aplicación nativa para Windows y disfrutá de una experiencia aún más fluida y rápida en tu mostrador, con atajos de teclado y funcionamiento optimizado.
              </p>
              
              <ul className="space-y-3 pt-2">
                <li className="flex items-center gap-3 text-(--c-text-main) font-medium"><CheckCircle2 size={18} className="text-(--c-accent2)"/> Atajos de teclado para ventas ágiles</li>
                <li className="flex items-center gap-3 text-(--c-text-main) font-medium"><CheckCircle2 size={18} className="text-(--c-accent2)"/> Menor consumo de recursos</li>
                <li className="flex items-center gap-3 text-(--c-text-main) font-medium"><CheckCircle2 size={18} className="text-(--c-accent2)"/> Integración directa con periféricos</li>
              </ul>
              
              <div className="pt-4">
                <button className="bg-(--c-btn-bg) text-(--c-btn-text) px-8 py-4 rounded-full font-medium text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-3 shadow-md w-full sm:w-auto">
                  <Download size={20} />
                  Descargar para Windows
                </button>
                <p className="text-xs text-(--c-text-muted) mt-5 ml-2 font-medium">Versión 1.2.0 • 45 MB</p>
              </div>
            </div>
            
            <div className="flex-1 w-full lg:w-auto flex justify-center">
              {/* Decorative Window Mockup */}
              <div className="w-full max-w-md aspect-4/3 bg-(--c-card) rounded-xl shadow-2xl border border-(--c-border) overflow-hidden flex flex-col transform lg:translate-y-4 hover:-translate-y-1 transition-transform duration-500">
                {/* Window Header */}
                <div className="h-10 bg-(--c-bg) border-b border-(--c-border) flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]"></div>
                </div>
                {/* Window Content */}
                <div className="flex-1 p-6 relative overflow-hidden bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-(--c-accent1)/5 to-(--c-bg)">
                   <div className="w-full h-8 bg-(--c-border) rounded-md mb-4 flex items-center px-2"><div className="w-4 h-4 rounded-full bg-(--c-card)"></div></div>
                   <div className="w-5/6 h-32 bg-(--c-card) shadow-sm border border-(--c-border) rounded-lg mb-4 flex flex-col gap-2 p-3">
                     <div className="h-3 w-1/3 bg-(--c-border) rounded-full"></div>
                     <div className="h-2 w-1/2 bg-(--c-bg) rounded-full"></div>
                     <div className="h-2 w-1/4 bg-(--c-bg) rounded-full"></div>
                   </div>
                   <div className="flex gap-4">
                     <div className="flex-1 h-20 bg-(--c-card) shadow-sm border border-(--c-border) rounded-lg p-3 flex items-end">
                       <div className="h-2 w-2/3 bg-(--c-border) rounded-full"></div>
                     </div>
                     <div className="w-1/3 h-20 bg-linear-to-br from-(--c-accent1) to-(--c-accent2) opacity-90 rounded-lg shadow-sm"></div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Staggered */}
      <section id="caracteristicas" className="py-24 bg-(--c-card) border-b border-(--c-border) overflow-hidden transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-(--c-accent2) font-bold tracking-widest uppercase text-lg mb-4">Potenciá tu control</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-(--c-text-main)">Todo lo necesario para vender más</h3>
          </div>

          {/* Feature 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 flex items-center justify-center text-(--c-accent2)">
                  <BadgeDollarSign size={28} />
                </div>
                <h4 className="text-3xl font-bold text-(--c-text-main)">Facturación AFIP Automática</h4>
              </div>
              <p className="text-lg text-(--c-text-muted) leading-relaxed font-light">
                Emití comprobantes A, B o C sin salir del sistema. Integración directa con los servidores de AFIP, sin molestas demoras ni caídas. Tu cliente no espera.
              </p>
              <ul className="space-y-3 pt-4">
                <li className="flex items-center gap-3 text-(--c-text-muted)"><CheckCircle2 size={18} className="text-(--c-accent1)"/> Tickets y Facturas en un clic</li>
                <li className="flex items-center gap-3 text-(--c-text-muted)"><CheckCircle2 size={18} className="text-(--c-accent1)"/> Control de caja instantáneo</li>
              </ul>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-4/3 bg-linear-to-br from-(--c-bg) to-(--c-card) rounded-3xl border border-(--c-border) relative overflow-hidden flex items-center justify-center shadow-sm group">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-(--c-accent2)/10 to-transparent"></div>
                
                {/* Abstract Ticket Mockup */}
                <div className="bg-(--c-card) p-6 rounded-2xl shadow-xl border border-(--c-border) w-2/3 relative z-10">
                   <div className="flex justify-between items-start border-b border-(--c-border) pb-4 mb-4">
                     <div className="space-y-3">
                       <div className="h-3 w-24 bg-(--c-bg) rounded-full"></div>
                       <div className="h-2 w-16 bg-(--c-bg) rounded-full"></div>
                     </div>
                     <div className="w-10 h-10 rounded-full bg-(--c-accent1)/20 flex items-center justify-center">
                       <BadgeDollarSign size={20} className="text-(--c-accent2)" />
                     </div>
                   </div>
                   <div className="space-y-4 mb-6 pt-2">
                     <div className="flex justify-between items-center"><div className="h-2 w-1/3 bg-(--c-bg) rounded-full"></div><div className="h-2 w-12 bg-(--c-accent1)/40 rounded-full"></div></div>
                     <div className="flex justify-between items-center"><div className="h-2 w-1/2 bg-(--c-bg) rounded-full"></div><div className="h-2 w-16 bg-(--c-border) rounded-full"></div></div>
                   </div>
                   <div className="flex items-center justify-between border-t border-(--c-border)/50 pt-4 mt-2">
                     <span className="text-(--c-text-muted) text-sm font-medium">Total AFIP</span>
                     <span className="text-(--c-accent2) font-black text-2xl">$12.500</span>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 (Reversed) */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 flex items-center justify-center text-(--c-accent1)">
                  <Cloud size={28} />
                </div>
                <h4 className="text-3xl font-bold text-(--c-text-main)">Nube en Tiempo Real</h4>
              </div>
              <p className="text-lg text-(--c-text-muted) leading-relaxed font-light">
                Tu stock y ventas actualizados al instante. Accedé desde cualquier dispositivo, donde sea. Toda tu información respaldada 24/7 de forma segura.
              </p>
              <ul className="space-y-3 pt-4">
                <li className="flex items-center gap-3 text-(--c-text-muted)"><CheckCircle2 size={18} className="text-(--c-accent2)"/> Sincronización automática</li>
                <li className="flex items-center gap-3 text-(--c-text-muted)"><CheckCircle2 size={18} className="text-(--c-accent2)"/> Reportes accesibles desde tu celular</li>
              </ul>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-4/3 bg-linear-to-bl from-(--c-bg) to-(--c-card) rounded-3xl border border-(--c-border) relative overflow-hidden flex items-center justify-center shadow-sm group">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,var(--tw-gradient-stops))] from-(--c-accent1)/10 to-transparent"></div>
                
                {/* Dashboard Data Cards */}
                <div className="relative w-full h-full flex items-center justify-center p-8 z-10">
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-(--c-accent1)/20 rounded-full blur-2xl"></div>
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/4 w-32 h-32 bg-(--c-accent2)/20 rounded-full blur-xl"></div>
                   
                   <div className="flex flex-col gap-4 w-full max-w-[240px] relative">
                     {/* Info Card 1 */}
                     <div className="bg-(--c-card) p-4 rounded-xl shadow-lg border border-(--c-border) flex items-center gap-4">
                       <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-linear-to-br from-(--c-accent1) to-(--c-accent2) text-white shadow-sm">
                         <Cloud size={20} />
                       </div>
                       <div className="flex-1">
                         <div className="h-2 w-16 bg-(--c-border) rounded-full mb-2"></div>
                         <div className="h-3 w-24 bg-(--c-text-main) rounded-full opacity-80"></div>
                       </div>
                     </div>
                     
                     {/* Info Card 2 */}
                     <div className="bg-(--c-card) p-4 rounded-xl shadow-lg border border-(--c-border) flex items-center gap-4 ml-6 translate-y-2">
                       <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-(--c-bg) border border-(--c-border) text-(--c-accent1)">
                         <Zap size={20} />
                       </div>
                       <div className="flex-1">
                         <div className="h-2 w-20 bg-(--c-border) rounded-full mb-2"></div>
                         <div className="h-3 w-16 bg-(--c-accent1) rounded-full"></div>
                       </div>
                     </div>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 flex items-center justify-center text-(--c-accent2)">
                  <Printer size={28} />
                </div>
                <h4 className="text-3xl font-bold text-(--c-text-main)">Adaptable al Hardware</h4>
              </div>
              <p className="text-lg text-(--c-text-muted) leading-relaxed font-light">
                Diseñado para el ritmo intenso del mostrador. Cero tiempos de carga para no hacer esperar a tus clientes. Conectá el hardware que ya tenés sin configuraciones complejas.
              </p>
              <ul className="space-y-3 pt-4 flex flex-wrap gap-x-6 gap-y-3">
                <li className="flex items-center gap-2 text-(--c-text-muted) font-medium bg-(--c-bg) px-3 py-1.5 rounded-lg border border-(--c-border)"><Zap size={16} className="text-(--c-accent1)"/> Tickeadoras</li>
                <li className="flex items-center gap-2 text-(--c-text-muted) font-medium bg-(--c-bg) px-3 py-1.5 rounded-lg border border-(--c-border)"><Zap size={16} className="text-(--c-accent1)"/> Lectores USB</li>
                <li className="flex items-center gap-2 text-(--c-text-muted) font-medium bg-(--c-bg) px-3 py-1.5 rounded-lg border border-(--c-border)"><Zap size={16} className="text-(--c-accent1)"/> Gavetas monederas</li>
              </ul>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-4/3 bg-linear-to-br from-(--c-bg) to-(--c-card) rounded-3xl border border-(--c-border) relative overflow-hidden flex items-center justify-center shadow-sm group">
                <div className="absolute inset-0 bg-linear-to-tr from-(--c-accent2)/5 via-transparent to-(--c-accent1)/5"></div>
                
                {/* Hardware Flow */}
                <div className="flex flex-col items-center justify-center gap-6 relative z-10 w-full">
                   <div className="flex items-center justify-center gap-4">
                     {/* Device block */}
                     <div className="w-20 h-20 bg-(--c-card) shadow-lg rounded-2xl border border-(--c-border) flex items-center justify-center text-(--c-text-main) relative z-10">
                       <MonitorSmartphone size={32} />
                       <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-(--c-accent1) border-2 border-(--c-card)"></div>
                     </div>
                     
                     {/* Connection animation */}
                     <div className="flex items-center justify-center relative w-16">
                       <div className="h-1 w-full bg-(--c-border) overflow-hidden relative rounded-full">
                          <div className="absolute top-0 left-0 w-1/2 h-full bg-linear-to-r from-(--c-accent1) to-(--c-accent2) animate-[translateX_2s_infinite]"></div>
                       </div>
                     </div>
                     
                     {/* Hardware block */}
                     <div className="w-20 h-20 bg-(--c-card) shadow-lg rounded-2xl border border-(--c-border) flex items-center justify-center text-(--c-accent2) relative z-10">
                       <Printer size={32} />
                       <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-(--c-accent2) border-2 border-(--c-card)"></div>
                     </div>
                   </div>
                   
                   {/* Bottom block */}
                   <div className="h-12 w-48 bg-(--c-card) rounded-xl border border-(--c-border) flex items-center justify-center gap-3 shadow-sm">
                      <div className="w-2.5 h-2.5 rounded-full bg-(--c-accent1)"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-(--c-accent2)"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-(--c-border)"></div>
                      <div className="h-1.5 w-12 bg-(--c-bg) rounded-full ml-2"></div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>      

      {/* Rubros Section - Clean Typography paired with Accents */}
      <section id="rubros" className="py-32 bg-(--c-bg)">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div className="order-2 lg:order-1 space-y-8">
                <div className="flex items-start gap-5">
                  <div className="mt-1 bg-(--c-card) border border-(--c-border) p-3 rounded-2xl shadow-sm">
                    <ShoppingBag size={24} className="text-(--c-text-main)" />
                  </div>
                  <div>
                    <h4 className="font-bold text-(--c-text-main) text-xl">Indumentaria y Pañaleras</h4>
                    <p className="text-(--c-text-muted) font-light mt-2 leading-relaxed">Gestión de talles, colores y reposición rápida de artículos de alta rotación.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="mt-1 bg-(--c-card) border border-(--c-border) p-3 rounded-2xl shadow-sm">
                    <Store size={24} className="text-(--c-text-main)" />
                  </div>
                  <div>
                    <h4 className="font-bold text-(--c-text-main) text-xl">Joyerías y Relojerías</h4>
                    <p className="text-(--c-text-muted) font-light mt-2 leading-relaxed">Control preventivo, códigos de barras precisos y seguimiento de ventas especiales.</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="mt-1 bg-(--c-card) border border-(--c-border) p-3 rounded-2xl shadow-sm">
                    <Box size={24} className="text-(--c-text-main)" />
                  </div>
                  <div>
                    <h4 className="font-bold text-(--c-text-main) text-xl">Venta por unidad / Kioskos</h4>
                    <p className="text-(--c-text-muted) font-light mt-2 leading-relaxed">Caja ágil y atajos visuales para los productos estrella. ¡No pierdas ni una venta!</p>
                  </div>
                </div>
             </div>
             
             <div className="order-1 lg:order-2">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-(--c-text-main) mb-6 leading-[1.1]">
                  Diseñado para <br/>
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-(--c-accent1) to-(--c-accent2)">
                    diferentes mundos.
                  </span>
                </h2>
                <p className="text-xl text-(--c-text-muted) mb-8 font-light leading-relaxed">
                  Ya sea que vendas productos únicos de alto valor, o tengas un flujo constante de clientes por artículos menores, nuestro sistema se amolda a tu día a día de forma orgánica.
                </p>
                <ul className="space-y-4">
                  {['Gestión de variantes y atributos', 'Lectura rápida de códigos de barras', 'Control de caja y reportes diarios'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-(--c-text-main) font-medium">
                      <CheckCircle2 size={20} className="text-(--c-accent2)" />
                      {item}
                    </li>
                  ))}
                </ul>
             </div>
           </div>
        </div>
      </section>
      
      {/* Detailed Features Grid */}
      <section className="py-24 bg-(--c-card) border-t border-(--c-border)">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-(--c-accent2) font-bold tracking-widest uppercase text-sm mb-4">Todo Incluido</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-(--c-text-main)">Funcionalidades para escalar</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Wallet, title: "Arqueo de Caja", desc: "Control de turnos, ingresos, egresos y cierre de jornada sin descuadres." },
              { icon: Target, title: "Incentivos", desc: "Motivá a tu equipo con un sistema de comisiones por porcentaje o metas." },
              { icon: BarChart3, title: "Estadísticas", desc: "Gráficos de ventas, rentabilidad y detección de productos estrella." },
              { icon: ShieldCheck, title: "Auditorías", desc: "Registro inmutable de acciones para trazabilidad total del sistema." },
              { icon: FileText, title: "Facturación AFIP", desc: "Tickets y facturas A/B/C validados con AFIP en menos de 2 segundos." },
              { icon: Package, title: "Control de Stock", desc: "Gestión de inventario, alertas de bajo stock y atributos por producto." },
              { icon: MapPin, title: "Multisucursal", desc: "Administrá diferentes locales y depósitos desde una sola cuenta central." },
              { icon: Users, title: "Roles de Usuario", desc: "Permisos estrictos para cajeros, supervisores y administradores." }
            ].map((feature, i) => (
              <div key={i} className="bg-(--c-bg) p-6 rounded-2xl border border-(--c-border) hover:border-(--c-accent1) transition-colors group">
                <div className="w-12 h-12 bg-(--c-card) rounded-xl border border-(--c-border) flex items-center justify-center text-(--c-text-main) mb-6 group-hover:text-(--c-accent2) transition-colors shadow-sm">
                  <feature.icon size={24} />
                </div>
                <h4 className="text-xl font-bold text-(--c-text-main) mb-3">{feature.title}</h4>
                <p className="text-(--c-text-muted) font-light leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precios" className="relative py-24 bg-(--c-bg) overflow-hidden">
        {/* Subtle Grid Background */}
        <div 
          className="absolute inset-0 pointer-events-none z-0 opacity-40 md:opacity-60" 
          style={{
            backgroundImage: 'linear-gradient(to right, var(--c-border) 1px, transparent 1px), linear-gradient(to bottom, var(--c-border) 1px, transparent 1px)',
            backgroundSize: '4rem 4rem',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 20%, #000 40%, transparent 100%)',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 20%, #000 40%, transparent 100%)'
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-(--c-accent1) font-bold tracking-widest uppercase text-sm mb-4">Planes Claros</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-(--c-text-main)">Elegí el plan ideal para vos</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Plan Hobby */}
            <div className="flex flex-col p-8 bg-(--c-card) rounded-3xl border border-(--c-border) relative shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-2xl font-bold text-(--c-text-main) mb-2">Hobby</h4>
              <p className="text-(--c-text-muted) font-light mb-6">Ideal para emprendimientos que recién arrancan.</p>
              <div className="mb-8">
                <span className="text-4xl font-black text-(--c-text-main)">Gratis</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3 text-(--c-text-muted)"><CheckCircle2 size={18} className="text-(--c-accent2)"/> Hasta 50 productos</li>
                <li className="flex items-center gap-3 text-(--c-text-muted)"><CheckCircle2 size={18} className="text-(--c-accent2)"/> Ventas mensuales limitadas</li>
                <li className="flex items-center gap-3 text-(--c-text-muted)"><CheckCircle2 size={18} className="text-(--c-accent2)"/> Soporte por email</li>
              </ul>
              <button className="w-full bg-(--c-bg) text-(--c-text-main) border border-(--c-border) px-6 py-3 rounded-full font-medium hover:opacity-80 transition-opacity">Empezar Gratis</button>
            </div>

            {/* Plan Premium */}
            <div className="flex flex-col p-8 bg-(--c-card) rounded-3xl border-2 border-(--c-accent2) relative shadow-xl transform md:-translate-y-4">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-linear-to-r from-(--c-accent1) to-(--c-accent2) text-white px-4 py-1 rounded-full text-sm font-bold shadow-sm whitespace-nowrap">
                Más Elegido
              </div>
              <h4 className="text-2xl font-bold text-(--c-text-main) mb-2">Premium</h4>
              <p className="text-(--c-text-muted) font-light mb-6">Para negocios en crecimiento que necesitan control total.</p>
              <div className="mb-8">
                <span className="text-4xl font-black text-(--c-text-main)">$18.500</span>
                <span className="text-(--c-text-muted) font-medium">/mes</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3 text-(--c-text-muted)"><CheckCircle2 size={18} className="text-(--c-accent1)"/> Productos ilimitados</li>
                <li className="flex items-center gap-3 text-(--c-text-muted)"><CheckCircle2 size={18} className="text-(--c-accent1)"/> Facturación AFIP integrada</li>
                <li className="flex items-center gap-3 text-(--c-text-muted)"><CheckCircle2 size={18} className="text-(--c-accent1)"/> Reportes y caja</li>
                <li className="flex items-center gap-3 text-(--c-text-muted)"><CheckCircle2 size={18} className="text-(--c-accent1)"/> Soporte VIP WhatsApp</li>
              </ul>
              <button className="w-full bg-(--c-btn-bg) text-(--c-btn-text) px-6 py-3 rounded-full font-medium shadow-md hover:opacity-90 transition-opacity">Probar 14 días</button>
            </div>

            {/* Plan Personalizado */}
            <div className="flex flex-col p-8 bg-(--c-card) rounded-3xl border border-(--c-border) relative shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-2xl font-bold text-(--c-text-main) mb-2">Empresa</h4>
              <p className="text-(--c-text-muted) font-light mb-6">Franquicias y múltiples sucursales a gran escala.</p>
              <div className="mb-8">
                <span className="text-3xl font-black text-(--c-text-main) mt-2 block">A medida</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1 mt-1">
                <li className="flex items-center gap-3 text-(--c-text-muted)"><CheckCircle2 size={18} className="text-(--c-accent2)"/> Todo el plan Premium</li>
                <li className="flex items-center gap-3 text-(--c-text-muted)"><CheckCircle2 size={18} className="text-(--c-accent2)"/> Múltiples sucursales</li>
                <li className="flex items-center gap-3 text-(--c-text-muted)"><CheckCircle2 size={18} className="text-(--c-accent2)"/> Integraciones API y custom</li>
              </ul>
              <button className="w-full bg-(--c-bg) text-(--c-text-main) border border-(--c-border) px-6 py-3 rounded-full font-medium hover:opacity-80 transition-opacity">Contactar Ventas</button>
            </div>
          </div>
        </div>
      </section>      

      {/* CTA Section - Elegant and Minimal */}
      <section className="py-24 bg-(--c-card) border-t border-(--c-border)">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 flex items-center justify-center mx-auto mb-8 text-(--c-accent1) backdrop-blur-sm">
            <Zap size={50} />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-(--c-text-main) mb-6 tracking-tight">
            Es hora de simplificar tu negocio
          </h2>
          <p className="text-xl text-(--c-text-muted) mb-10 font-light leading-relaxed">
            Dejá atrás los métodos tradicionales. La migración es sencilla y te acompañamos en cada paso para que empieces a vender hoy mismo.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="w-11/12 sm:w-auto bg-(--c-btn-bg) text-(--c-btn-text) px-10 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg">
              Solicitar Demostración
            </button>
            <button className="w-11/12 sm:w-auto bg-transparent text-(--c-text-main) border border-(--c-border) px-10 py-4 rounded-full font-semibold text-lg hover:bg-(--c-bg) transition-colors flex items-center justify-center gap-2">
              Hablar con Ventas
            </button>
          </div>
        </div>
      </section>

      {/* Footer - Clean */}
      <footer className="bg-(--c-bg) pt-16 pb-8 border-t border-(--c-border)">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
               <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-linear-to-br from-(--c-accent1) to-(--c-accent2) rounded-lg flex items-center justify-center text-white">
                  <ShoppingBasket size={18} strokeWidth={2.5} />
                </div>
                <span className="font-titulo text-xl font-bold text-(--c-text-main)">
                  NexPOS
                </span>
              </div>
              <p className="text-(--c-text-muted) max-w-sm font-light leading-relaxed">
                Empoderando comercios minoristas con tecnología rápida, confiable y fácil de usar en el mostrador.
              </p>
            </div>
            
            <div>
              <h4 className="text-(--c-text-main) font-bold mb-6">Producto</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-(--c-text-muted) hover:text-(--c-text-main) font-light transition-colors">Características</a></li>
                <li><a href="#" className="text-(--c-text-muted) hover:text-(--c-text-main) font-light transition-colors">Integraciones</a></li>
                <li><a href="#" className="text-(--c-text-muted) hover:text-(--c-text-main) font-light transition-colors">Precios</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-(--c-text-main) font-bold mb-6">Empresa</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-(--c-text-muted) hover:text-(--c-text-main) font-light transition-colors">Sobre nosotros</a></li>
                <li><a href="#" className="text-(--c-text-muted) hover:text-(--c-text-main) font-light transition-colors">Soporte Técnico</a></li>
                <li><a href="#" className="text-(--c-text-muted) hover:text-(--c-text-main) font-light transition-colors">Contacto</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between text-(--c-text-muted) text-sm gap-4 pt-8 border-t border-(--c-border)">
            <p>© {new Date().getFullYear()} NexPOS Software. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-(--c-text-main) transition-colors">Términos</a>
              <a href="#" className="hover:text-(--c-text-main) transition-colors">Privacidad</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
