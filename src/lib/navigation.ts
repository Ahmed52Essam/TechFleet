/**
 * Navigation Registry
 * 
 * This module acts as the single source of truth for the site's structure.
 * It provides 'Locality' for section IDs and 'Leverage' for components 
 * that need to link to them.
 */

export interface NavSection {
    id: string;
    labelKey: string; // Key in translation files
    showInNavbar: boolean;
}

export const SITE_SECTIONS = {
    BENEFITS: {
        id: 'comparison',
        labelKey: 'nav.benefits',
        showInNavbar: true,
    },
    HARDWARE: {
        id: 'catalog',
        labelKey: 'nav.hardware',
        showInNavbar: true,
    },
    HOW_IT_WORKS: {
        id: 'features',
        labelKey: 'nav.howItWorks',
        showInNavbar: true,
    },
    CONTACT: {
        id: 'contact',
        labelKey: 'nav.getStarted',
        showInNavbar: false,
    },
} as const;

export type SectionKey = keyof typeof SITE_SECTIONS;

/**
 * Returns sections that should be displayed in the main navigation menu.
 */
export const getNavbarLinks = () => 
    Object.values(SITE_SECTIONS).filter(section => section.showInNavbar);

/**
 * Helper to get a section's href (with hash)
 */
export const getSectionHref = (section: NavSection) => `#${section.id}`;
