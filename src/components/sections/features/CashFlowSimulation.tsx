import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const CashFlowSimulation = () => {
    const { t } = useTranslation();

    return (
        <div className="relative w-full max-w-md">
            {/* Chart Container */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
                {/* Chart Title */}
                <div className="text-center mb-8">
                    <h4 className="text-sm font-bold text-slate-800 mb-1">{t('features.simulation.title')}</h4>
                    <p className="text-xs text-slate-500">{t('features.simulation.subtitle')}</p>
                </div>

                {/* Bars Container */}
                <div className="relative h-64 mb-6">
                    <div className="flex items-end justify-center gap-8 h-full">
                        {/* Bar 1: The Old Way - Buying */}
                        <div className="flex-1 max-w-[120px] h-full flex flex-col justify-end items-center relative">
                            {/* Floating Badge - Negative Impact */}
                            <motion.div
                                className="absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-red-100 border border-red-200 rounded-full shadow-md z-10 whitespace-nowrap"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                            >
                                <span className="text-xs font-bold text-red-700">{t('features.simulation.negativeImpact')}</span>
                            </motion.div>

                            {/* Animated Bar - Shoots Up Aggressively */}
                            <motion.div
                                className="w-full bg-gradient-to-t from-red-500 via-red-400 to-red-300 rounded-t-2xl relative shadow-2xl overflow-hidden"
                                initial={{ height: "0%" }}
                                whileInView={{ height: "90%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                            >
                                {/* Danger Stripes Pattern */}
                                <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
                                    <p className="text-white text-lg font-bold drop-shadow-lg">500k</p>
                                    <p className="text-white/90 text-[10px] font-semibold">EGP</p>
                                </div>
                            </motion.div>

                            {/* Label */}
                            <div className="text-center mt-3 absolute -bottom-12 left-1/2 -translate-x-1/2 w-full">
                                <p className="text-xs font-bold text-slate-800">{t('features.simulation.buyLabel')}</p>
                                <p className="text-[10px] text-slate-500">{t('features.simulation.buySub')}</p>
                            </div>
                        </div>

                        {/* Bar 2: TechBridge Way - Subscription */}
                        <div className="flex-1 max-w-[120px] h-full flex flex-col justify-end items-center relative">
                            {/* Floating Badge - Zero Upfront */}
                            <motion.div
                                className="absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-primary/10 border border-primary/30 rounded-full shadow-md z-10 whitespace-nowrap"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8 }}
                            >
                                <span className="text-xs font-bold text-primary">{t('features.simulation.zeroUpfront')}</span>
                            </motion.div>

                            {/* Animated Bar - Stays Small and Calm */}
                            <motion.div
                                className="w-full bg-gradient-to-t from-primary via-violet-500 to-violet-400 rounded-t-2xl relative shadow-xl overflow-hidden min-h-[20px]"
                                initial={{ height: "0%" }}
                                whileInView={{ height: "10%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                            >
                            </motion.div>

                            {/* Label */}
                            <div className="text-center mt-3 absolute -bottom-12 left-1/2 -translate-x-1/2 w-full">
                                <p className="text-xs font-bold text-primary">{t('features.simulation.rentLabel')}</p>
                                <p className="text-[10px] text-primary/70">{t('features.simulation.rentSub')}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Caption */}
                <div className="text-center pt-4 border-t border-slate-100">
                    <p className="text-[11px] text-slate-500 italic">
                        {t('features.simulation.caption')}
                    </p>
                </div>
            </div>
        </div>
    );
};
