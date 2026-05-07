import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '../../../lib/utils';
import TechBridgeLogo from '/TechBridgelogo.png';

export const LaptopMockup = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className="relative w-fit mx-auto">
            {/* Laptop Mockup - Base Layer */}
            <motion.div
                className="relative z-[1]"
                animate={{
                    y: [0, -15, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                {/* Laptop Screen - Glass Card */}
                <div className="w-[320px] md:w-[400px] lg:w-[480px] aspect-[16/10] bg-white/60 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/80">
                    {/* Screen Content */}
                    <div className="w-full h-full bg-white rounded-lg flex items-center justify-center relative overflow-hidden">
                        <img src={TechBridgeLogo} alt="TechBridge" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* Laptop Base */}
                <div className="w-[360px] md:w-[440px] lg:w-[520px] h-3 bg-gradient-to-r from-secondary via-slate-300 to-secondary rounded-b-xl mx-auto -mt-1 shadow-lg" />
            </motion.div>

            {/* Floating Card 1: "0 EGP Upfront" - Top Left */}
            <motion.div
                className={cn("absolute bottom-[15%] z-10", i18n.language === 'ar' ? "-right-[8%]" : "-left-[8%]")}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                whileHover={{ scale: 1.05, y: -5 }}
            >
                <motion.div
                    className="px-4 py-2 bg-white/60 backdrop-blur-lg rounded-full shadow-lg border border-white/80 text-xs font-semibold text-slate-700 whitespace-nowrap"
                    animate={{ rotate: [0, 5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                    {t('hero.floatingCard1')}
                </motion.div>
            </motion.div>

            {/* Floating Card 3: "Grade A Hardware" - Top Right */}
            <motion.div
                className={cn("absolute top-[10%] z-10", i18n.language === 'ar' ? "left-[-10%]" : "right-[-10%]")}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ scale: 1.05, y: -5 }}
            >
                <motion.div
                    className="px-6 py-4 bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl border border-white/60 flex items-center gap-3"
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                    <div className="p-2 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg">
                        <Sparkles className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="text-start">
                        <p className="text-xs text-slate-500 font-medium">{t('hero.floatingCard2Label')}</p>
                        <p className="text-sm font-bold text-slate-900">{t('hero.floatingCard2')}</p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};
