import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const TrustSection = () => {
    const { t } = useTranslation();

    return (
        <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
            >
                <div className="text-start">
                    <span className="text-secondary font-mono text-sm tracking-wider uppercase">{t('trust.badge')}</span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold mt-2">
                        {t('trust.title').split(t('trust.techImplementation'))[0]} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-emerald-400">{t('trust.techImplementation')}</span>
                    </h2>
                </div>

                <p className="text-slate-400 text-lg leading-relaxed max-w-md text-start">
                    {t('trust.description')}
                </p>

                <div className="flex gap-8 border-t border-slate-800 pt-8">
                    <div>
                        <h3 className="text-3xl font-bold text-white">45<span className="text-secondary">+</span></h3>
                        <p className="text-slate-500 text-sm mt-1">{t('trust.stats.startups')}</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-white">4h<span className="text-emerald-500">.</span></h3>
                        <p className="text-slate-500 text-sm mt-1">{t('trust.stats.response')}</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-white">100<span className="text-secondary">%</span></h3>
                        <p className="text-slate-500 text-sm mt-1">{t('trust.stats.uptime')}</p>
                    </div>
                </div>
            </motion.div>

            {/* Minimal Map Visualization */}
            <div className="relative h-[400px] w-full bg-slate-800/50 rounded-3xl border border-slate-700/50 p-6 flex items-center justify-center overflow-hidden">
                {/* Abstract Map Background */}
                <div className="absolute inset-0 opacity-20">
                    {/* Grid lines simulating map */}
                    <div className="absolute top-0 left-1/4 w-px h-full bg-slate-500/30"></div>
                    <div className="absolute top-0 left-2/4 w-px h-full bg-slate-500/30"></div>
                    <div className="absolute top-0 left-3/4 w-px h-full bg-slate-500/30"></div>
                    <div className="absolute top-1/4 left-0 w-full h-px bg-slate-500/30"></div>
                    <div className="absolute top-2/4 left-0 w-full h-px bg-slate-500/30"></div>
                    <div className="absolute top-3/4 left-0 w-full h-px bg-slate-500/30"></div>

                    {/* "River" */}
                    <svg className="absolute inset-0 w-full h-full text-slate-700" viewBox="0 0 400 400" preserveAspectRatio="none">
                        <path d="M180,0 C180,0 200,100 160,200 C120,300 190,400 190,400" stroke="currentColor" strokeWidth="20" fill="none" />
                    </svg>
                </div>

                {/* Locations */}
                {/* New Cairo */}
                <div className="absolute top-[30%] right-[20%] flex flex-col items-center group cursor-pointer">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-secondary/20 rounded-full animate-ping" />
                        <div className="w-3 h-3 bg-secondary rounded-full relative z-10 border-2 border-slate-900" />
                    </div>
                    <div className="mt-2 bg-slate-900/90 px-3 py-1 rounded-full border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                        <span className="text-xs font-bold text-white">{t('trust.locations.newCairo')}</span>
                    </div>
                </div>

                {/* Maadi */}
                <div className="absolute bottom-[25%] right-[35%] flex flex-col items-center group cursor-pointer">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-secondary/20 rounded-full animate-ping delay-700" />
                        <div className="w-3 h-3 bg-secondary rounded-full relative z-10 border-2 border-slate-900" />
                    </div>
                    <div className="mt-2 bg-slate-900/90 px-3 py-1 rounded-full border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                        <span className="text-xs font-bold text-white">{t('trust.locations.maadi')}</span>
                    </div>
                </div>

                {/* Zayed */}
                <div className="absolute top-[20%] left-[15%] flex flex-col items-center group cursor-pointer">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-secondary/20 rounded-full animate-ping delay-1000" />
                        <div className="w-3 h-3 bg-secondary rounded-full relative z-10 border-2 border-slate-900" />
                    </div>
                    <div className="mt-2 bg-slate-900/90 px-3 py-1 rounded-full border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                        <span className="text-xs font-bold text-white">{t('trust.locations.zayed')}</span>
                    </div>
                </div>

                {/* 6th October */}
                <div className="absolute top-[35%] left-[8%] flex flex-col items-center group cursor-pointer">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-secondary/20 rounded-full animate-ping delay-500" />
                        <div className="w-3 h-3 bg-secondary rounded-full relative z-10 border-2 border-slate-900" />
                    </div>
                    <div className="mt-2 bg-slate-900/90 px-3 py-1 rounded-full border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                        <span className="text-xs font-bold text-white">{t('trust.locations.october')}</span>
                    </div>
                </div>

                {/* Downtown */}
                <div className="absolute top-[45%] left-[45%] flex flex-col items-center group cursor-pointer">
                    <div className="w-2 h-2 bg-slate-600 rounded-full border border-slate-800" />
                    <div className="mt-2 bg-slate-900/90 px-3 py-1 rounded-full border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-xs text-slate-400">{t('trust.locations.downtown')}</span>
                    </div>
                </div>

            </div>
        </div>
    );
};
