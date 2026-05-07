import { cn } from '../../../lib/utils';

interface FeatureCardProps {
    className?: string;
    children: React.ReactNode;
}

export const FeatureCard = ({ className, children }: FeatureCardProps) => (
    <div className={cn(
        "relative overflow-hidden rounded-3xl bg-white border border-slate-100 shadow-sm p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group",
        className
    )}>
        {/* Subtle mesh background for cards */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-slate-100 opacity-50" />
        <div className="relative z-10 h-full flex flex-col">
            {children}
        </div>
    </div>
);
