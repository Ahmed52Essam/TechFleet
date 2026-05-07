import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/utils';
import { type NavSection } from '../../lib/navigation';
import type { ReactNode } from 'react';

/**
 * Section Module
 * 
 * Provides a 'Deep Interface' for page sections. 
 * Handles layout standards, background themes, and entrance animations.
 */

interface SectionProps extends Omit<HTMLMotionProps<'section'>, 'children'> {
    children: ReactNode;
    section?: NavSection; // Optional link to Navigation Registry
    variant?: 'default' | 'alt' | 'dark' | 'glass' | 'none';
    containerSize?: 'default' | 'narrow' | 'wide' | 'none';
    withAnimation?: boolean;
}

export const Section = ({
    children,
    section,
    variant = 'default',
    containerSize = 'default',
    withAnimation = true,
    className,
    id,
    ...props
}: SectionProps) => {
    
    const variants = {
        default: 'bg-white',
        alt: 'bg-slate-50/50',
        dark: 'bg-slate-900 text-white',
        glass: 'bg-gradient-to-b from-white to-slate-50/50 relative overflow-hidden',
        none: '',
    };

    const containers = {
        default: 'container px-4 md:px-6 mx-auto',
        narrow: 'container px-4 md:px-6 mx-auto max-w-4xl',
        wide: 'container px-4 md:px-6 mx-auto max-w-7xl',
        none: '',
    };

    const sectionId = section?.id || id;

    const content = (
        <div className={cn(containers[containerSize])}>
            {children as any}
        </div>
    );

    if (!withAnimation) {
        // Strip motion props when rendering a regular section
        const { 
            whileInView, 
            initial, 
            viewport, 
            transition, 
            onViewportEnter, 
            onViewportLeave,
            ...safeProps 
        } = props as any;

        return (
            <section 
                id={sectionId} 
                className={cn('py-24', variants[variant], className)}
                {...safeProps}
            >
                {content}
            </section>
        );
    }

    return (
        <motion.section
            id={sectionId}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={cn('py-24', variants[variant], className)}
            {...props}
        >
            {content}
        </motion.section>
    );
};
