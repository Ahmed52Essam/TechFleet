import { motion } from 'framer-motion';
import { TrendingUp, Receipt, ShieldCheck, Truck, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { FeatureCard } from './features/FeatureCard';
import { CashFlowSimulation } from './features/CashFlowSimulation';

export const Features = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-secondary font-semibold tracking-wider uppercase text-sm">{t('features.badge')}</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mt-2">
                    {t('features.title').split(t('features.modernTeams'))[0]}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">{t('features.modernTeams')}</span>
                    {t('features.title').split(t('features.modernTeams'))[1]}
                </h2>
            </div>

            {/* 6-Card Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-6 max-w-7xl mx-auto">

                {/* Box 1 (Large): 0 EGP Upfront - spans 4 columns */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="md:col-span-4 md:row-span-2"
                >
                    <FeatureCard className="h-full bg-gradient-to-br from-indigo-50 to-white border-indigo-100">
                        <div className="flex flex-col md:flex-row items-center gap-8 h-full">
                            <div className="flex-1 text-start space-y-4">
                                <div className="p-3 bg-primary/10 w-fit rounded-xl text-primary">
                                    <TrendingUp size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">{t('features.zeroUpfront.title')}</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {t('features.zeroUpfront.description')}
                                </p>
                            </div>
                            <div className="flex-1 w-full flex items-center justify-center p-4">
                                <CashFlowSimulation />
                            </div>
                        </div>
                    </FeatureCard>
                </motion.div>

                {/* Box 3: Tax Deductible */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="md:col-span-2"
                >
                    <FeatureCard className="bg-white">
                        <div className="text-start space-y-4">
                            <div className="p-3 bg-green-50 w-fit rounded-xl text-green-600">
                                    <Receipt size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">{t('features.tax.title')}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {t('features.tax.description')}
                            </p>
                        </div>
                    </FeatureCard>
                </motion.div>

                {/* Box 4: Complete Protection - spans 2 columns */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="md:col-span-2"
                >
                    <FeatureCard className="bg-white">
                        <div className="flex flex-col items-start gap-4">
                            <div className="p-3 bg-blue-50 w-fit rounded-xl text-blue-600">
                                <ShieldCheck size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">{t('features.protection.title')}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {t('features.protection.description')}
                            </p>
                            <div className="flex gap-2 mt-2">
                                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-100">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-xs font-bold text-slate-700">{t('features.protection.theft')}</span>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-100">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-xs font-bold text-slate-700">{t('features.protection.liquid')}</span>
                                </div>
                            </div>
                        </div>
                    </FeatureCard>
                </motion.div>

                {/* Box 5: Fast Delivery */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="md:col-span-2"
                >
                    <FeatureCard className="bg-gradient-to-br from-cyan-50 to-white border-cyan-100">
                        <div className="text-start space-y-4">
                            <div className="p-3 bg-cyan-100 w-fit rounded-xl text-cyan-600">
                                <Truck size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">{t('features.delivery.title')}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {t('features.delivery.description')}
                            </p>
                            <div className="flex items-center gap-2 text-xs text-slate-500 mt-4">
                                <div className="flex -space-x-1">
                                    <div className="w-6 h-6 rounded-full bg-cyan-200 border-2 border-white" />
                                    <div className="w-6 h-6 rounded-full bg-cyan-300 border-2 border-white" />
                                    <div className="w-6 h-6 rounded-full bg-cyan-400 border-2 border-white" />
                                </div>
                                <span className="font-medium">{t('features.delivery.status')}</span>
                            </div>
                        </div>
                    </FeatureCard>
                </motion.div>

                {/* Box 6: Instant Upgrades */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="md:col-span-2"
                >
                    <FeatureCard className="bg-gradient-to-br from-violet-50 to-white border-violet-100">
                        <div className="text-start space-y-4">
                            <div className="p-3 bg-violet-100 w-fit rounded-xl text-violet-600">
                                <Zap size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">{t('features.upgrades.title')}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {t('features.upgrades.description')}
                            </p>
                            <div className="mt-4 p-2 bg-violet-50 rounded-lg border border-violet-100">
                                <div className="flex items-center justify-between text-xs">
                                    <span className="text-slate-600">{t('features.upgrades.label')}</span>
                                    <span className="font-bold text-violet-600">{t('features.upgrades.availability')}</span>
                                </div>
                            </div>
                        </div>
                    </FeatureCard>
                </motion.div>
            </div>
        </>
    );
};
