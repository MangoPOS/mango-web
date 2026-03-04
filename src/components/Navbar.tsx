import { Sun, Moon, Menu, X } from 'lucide-react';
import logo from '../assets/images/logo.png';

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (val: boolean) => void;
}

export const Navbar = ({ isDarkMode, setIsDarkMode, isMobileMenuOpen, setIsMobileMenuOpen }: NavbarProps) => {
  return (
    <nav className="fixed w-full z-50 bg-(--c-nav-bg) backdrop-blur-sm border-b border-(--c-border) transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center cursor-pointer group gap-2">
            {/* <div className="w-10 h-10 bg-linear-to-br from-(--c-accent1) to-(--c-accent2) rounded-xl flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <ShoppingBasket size={22} strokeWidth={2.5} />
            </div>
            <span className="font-logo2 italic text-5xl font-thin tracking-tight text-(--c-text-main)">
              Mango
            </span> */}

            <img src={logo} alt="Mango POS Logo" className="h-10 w-auto mb-2.5" />
            <span className="font-logo text-3xl font-thin tracking-tight text-(--c-text-main)">
              Mango
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
  );
};
