import { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { Menu, X, Languages } from 'lucide-react';
import { cn, scrollToId } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { SITE_SECTIONS, getNavbarLinks, getSectionHref } from '../../lib/navigation';
import Logo from '/TechBridgelogo.png';

export const Navbar = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = getNavbarLinks();

    const handleNavClick = (href: string) => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                scrollToId(href);
            }, 100);
        } else {
            scrollToId(href);
        }
        setIsMenuOpen(false);
    };

    const toggleLanguage = () => {
        const newLang = i18n.language.startsWith('en') ? 'ar' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none" dir="ltr">
            <nav className={cn(
                "pointer-events-auto transition-all duration-300 ease-in-out border border-white/20",
                scrolled
                    ? "bg-white/80 backdrop-blur-md shadow-glass py-3 px-6 rounded-full w-full max-w-4xl"
                    : "bg-transparent py-4 px-6 rounded-full w-full max-w-5xl"
            )}>
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
                        <img src={Logo} alt="TechBridge Logo" className="h-8 w-auto rounded-sm" />
                        <span className="text-2xl font-display font-bold text-slate-900 tracking-tight">TechBridge</span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8 bg-white/50 backdrop-blur-sm px-6 py-2 rounded-full border border-white/30 shadow-sm">
                        {navLinks.map((link) => (
                            <a
                                key={link.id}
                                href={getSectionHref(link)}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(link.id);
                                }}
                                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors relative group"
                            >
                                {t(link.labelKey)}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>

                    {/* CTA Button & Language Toggle */}
                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-primary transition-colors border border-slate-200 rounded-full bg-white/50"
                        >
                            <Languages size={14} />
                            {i18n.language === 'en' ? 'العربية' : 'English'}
                        </button>
                        <Button
                            onClick={() => handleNavClick(SITE_SECTIONS.CONTACT.id)}
                            className="relative overflow-hidden group bg-primary hover:bg-primary/90 rounded-full px-6 shadow-glow"
                        >
                            <span className="relative z-10">{t(SITE_SECTIONS.CONTACT.labelKey)}</span>
                            <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden flex items-center gap-3">
                        <button
                            onClick={toggleLanguage}
                            className="p-2 text-slate-700 bg-white/50 rounded-full backdrop-blur-sm shadow-sm"
                        >
                            <span className="text-xs font-bold">{i18n.language === 'en' ? 'AR' : 'EN'}</span>
                        </button>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 text-slate-700 bg-white/50 rounded-full backdrop-blur-sm shadow-sm"
                        >
                            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Nav Dropdown */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            className="absolute top-full left-0 right-0 mt-4 p-4 bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 overflow-hidden md:hidden"
                        >
                            <div className="flex flex-col space-y-4">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.id}
                                        href={getSectionHref(link)}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick(link.id);
                                        }}
                                        className="text-base font-medium text-slate-700 hover:text-primary py-2 px-4 rounded-lg hover:bg-slate-50"
                                    >
                                        {t(link.labelKey)}
                                    </a>
                                ))}
                                <Button className="w-full rounded-xl" onClick={() => handleNavClick(SITE_SECTIONS.CONTACT.id)}>
                                    {t(SITE_SECTIONS.CONTACT.labelKey)}
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </div>
    );
};

