import { cn, scrollToId } from '../../lib/utils';
import { motion } from 'framer-motion';
import { Laptop, Monitor, Cpu, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SITE_SECTIONS } from '../../lib/navigation';
import { useContent } from '../../lib/content';

export const Catalog = () => {
    const { t, i18n } = useTranslation();
    const { catalog } = useContent();

    const scrollToContact = () => scrollToId(SITE_SECTIONS.CONTACT.id);

    const BridgeOptions = [
        {
            key: 'laptops' as const,
            icon: Laptop,
            buttonStyle: 'outline',
            accentColor: 'from-blue-500 to-cyan-500',
            iconBg: 'from-blue-100 to-cyan-100',
            iconColor: 'text-blue-600'
        },
        {
            key: 'pcs' as const,
            icon: Monitor,
            buttonStyle: 'primary',
            accentColor: 'from-violet-500 to-purple-500',
            iconBg: 'from-violet-100 to-purple-100',
            iconColor: 'text-violet-600',
            featured: true
        },
        {
            key: 'workstations' as const,
            icon: Cpu,
            buttonStyle: 'outline',
            accentColor: 'from-purple-500 to-pink-500',
            iconBg: 'from-purple-100 to-pink-100',
            iconColor: 'text-purple-600'
        },
    ];

    return (
        <>
            {/* Subtle Background Gradients */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-200/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-200/20 rounded-full blur-[100px] -z-10" />

            {/* Section Header */}
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
                        {t('catalog.title')}{' '}
                        <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                            {t('catalog.highlightedWord')}
                        </span>
                    </h2>
                    <p className="text-lg text-slate-600 italic">
                        {t('catalog.subtitle')}
                    </p>
                </motion.div>
            </div>

            {/* 3-Column Grid */}
            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto items-stretch">
                {BridgeOptions.map((option, index) => (
                    <motion.div
                        key={index}
                        className={cn(
                            "flex flex-col relative rounded-3xl p-8 transition-all duration-300 group cursor-default h-full",
                            "bg-white/60 backdrop-blur-xl border border-white/80 shadow-lg hover:shadow-2xl hover:-translate-y-2",
                            option.featured && "md:scale-105 ring-2 ring-violet-200/50"
                        )}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        {/* Featured Badge */}
                        {option.featured && (
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-xs font-bold rounded-full shadow-lg">
                                {t('catalog.popular')}
                            </div>
                        )}

                        {/* Icon */}
                        <div className="mb-6">
                            <div className={cn(
                                "inline-flex p-4 rounded-2xl bg-gradient-to-br shadow-sm",
                                option.iconBg
                            )}>
                                <option.icon className={cn("w-10 h-10", option.iconColor)} strokeWidth={1.5} />
                            </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-slate-900 mb-3 text-start">
                            {catalog.items[option.key].title}
                        </h3>

                        {/* Description */}
                        <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow text-start">
                            {catalog.items[option.key].description}
                        </p>

                        {/* Specs */}
                        <div className="mb-8 space-y-3">
                            {catalog.items[option.key].specs.map((spec, i) => (
                                <div key={i} className="flex items-start gap-2 text-sm text-slate-700 text-start">
                                    <div className="mt-1.5 w-1 h-1 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 shrink-0" />
                                    <span>{spec}</span>
                                </div>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="border-t border-slate-200/60 mb-6" />

                        {/* Button */}
                        <button
                            onClick={scrollToContact}
                            className={cn(
                                "w-full py-3.5 px-6 rounded-full font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 group/btn mt-auto",
                                option.buttonStyle === 'primary'
                                    ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40 hover:-translate-y-0.5"
                                    : "bg-white/80 text-slate-700 border-2 border-slate-200 hover:border-violet-300 hover:bg-white hover:text-violet-600"
                            )}
                        >
                            <span>{catalog.items[option.key].buttonText}</span>
                            <ArrowRight className={cn("w-4 h-4 transition-transform", i18n.language === 'ar' ? "group-hover/btn:-translate-x-1 rotate-180" : "group-hover/btn:translate-x-1")} />
                        </button>

                        {/* Hover Gradient Accent */}
                        <div className={cn(
                            "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10",
                            `bg-gradient-to-br ${option.accentColor} blur-2xl`
                        )} style={{ transform: 'scale(0.8)' }} />
                    </motion.div>
                ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
                className="text-center mt-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <p className="text-sm text-slate-500">
                    {catalog.differentConfig}{' '}
                    <button onClick={scrollToContact} className="text-violet-600 font-semibold hover:underline">
                        {catalog.talkToTeam} {i18n.language === 'ar' ? '←' : '→'}
                    </button>
                </p>
            </motion.div>
        </>
    );
};
