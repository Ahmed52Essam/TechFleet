import { Linkedin, MessageSquare, Mail, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, ROUTES } from '../../lib/constants';

export const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
            <div className="container px-4 mx-auto md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-start">
                        <h3 className="text-xl font-bold text-white mb-2">TechBridge</h3>
                        <p className="text-sm">{t('footer.tagline')}</p>
                        <div className="flex flex-col gap-1 mt-3">
                            <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm hover:text-white transition-colors flex items-center gap-2 justify-center md:justify-start">
                                <Mail className="h-3.5 w-3.5" />
                                {CONTACT_INFO.email}
                            </a>
                            <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="text-sm hover:text-white transition-colors flex items-center gap-2 justify-center md:justify-start">
                                <Phone className="h-3.5 w-3.5" />
                                {CONTACT_INFO.phone}
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <Link to={ROUTES.terms} className="hover:text-white transition-colors">{t('footer.terms')}</Link>
                        <Link to={ROUTES.privacy} className="hover:text-white transition-colors">{t('footer.privacy')}</Link>
                    </div>

                    <div className="flex gap-4">
                        <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="p-2 bg-slate-900 rounded-full hover:bg-slate-800 hover:text-white transition-colors" aria-label="Phone">
                            <Phone className="h-5 w-5" />
                        </a>
                        <a href={`mailto:${CONTACT_INFO.email}`} className="p-2 bg-slate-900 rounded-full hover:bg-slate-800 hover:text-white transition-colors" aria-label="Email">
                            <Mail className="h-5 w-5" />
                        </a>
                        <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 rounded-full hover:bg-slate-800 hover:text-white transition-colors" aria-label="LinkedIn">
                            <Linkedin className="h-5 w-5" />
                        </a>
                        <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 rounded-full hover:bg-slate-800 hover:text-white transition-colors" aria-label="WhatsApp">
                            <MessageSquare className="h-5 w-5" />
                        </a>
                    </div>
                </div>
                <div className="mt-8 text-center text-xs text-slate-600">
                    &copy; {new Date().getFullYear()} {t('footer.copyright')}
                </div>
            </div>
        </footer>
    );
};
