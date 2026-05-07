import { Check, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useContent } from '../../lib/content';

export const Comparison = () => {
    const { t } = useTranslation();
    const { comparison } = useContent();

    const comparisonRows = comparison.rows([
        'upfront',
        'tax',
        'repairs',
        'upgrades',
        'scalability',
    ]);

    return (
        <>
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl mb-4">
                    {t('comparison.title')}
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    {t('comparison.subtitle')}
                </p>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm max-w-4xl mx-auto">
                <div className="grid grid-cols-3 bg-slate-50 p-4 font-semibold text-slate-900 border-b border-slate-200">
                    <div className="col-span-1">{comparison.headerLabel}</div>
                    <div className="col-span-1 text-center text-red-600">{comparison.headerBuy}</div>
                    <div className="col-span-1 text-center text-secondary">{comparison.headerRent}</div>
                </div>

                <div className="divide-y divide-slate-100 bg-white">
                    {comparisonRows.map((row, index) => (
                        <div key={index} className="grid grid-cols-3 p-4 items-center hover:bg-slate-50 transition-colors">
                            <div className="col-span-1 font-medium text-slate-700 text-sm md:text-base">
                                {row.label}
                            </div>
                            <div className="col-span-1 flex flex-col items-center justify-center text-center">
                                <span className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                                    <X className="h-5 w-5 text-red-500 shrink-0" />
                                    <span className="hidden sm:inline">{row.buy}</span>
                                </span>
                                <span className="sm:hidden text-xs text-slate-400 mt-1">{row.buy}</span>
                            </div>
                            <div className="col-span-1 flex flex-col items-center justify-center text-center">
                                <span className="flex items-center gap-2 text-primary text-sm font-bold bg-secondary/5 px-2 py-1 rounded-md">
                                    <Check className="h-5 w-5 text-secondary shrink-0" />
                                    <span className="hidden sm:inline">{row.rent}</span>
                                </span>
                                <span className="sm:hidden text-xs text-primary font-medium mt-1">{row.rent}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
