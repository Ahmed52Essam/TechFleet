import { useTranslation } from 'react-i18next';

/**
 * Content Layer Module
 * 
 * This module provides typed accessors for the application's content.
 * It abstracts the 'Implementation' (currently i18next JSON files) 
 * behind a 'Deep Interface'.
 */

export interface CatalogItem {
    title: string;
    description: string;
    specs: string[];
    buttonText: string;
}

export interface ComparisonRow {
    label: string;
    buy: string;
    rent: string;
}

export const useContent = () => {
    const { t } = useTranslation();

    return {
        catalog: {
            items: {
                laptops: t('catalog.items.laptops', { returnObjects: true }) as CatalogItem,
                pcs: t('catalog.items.pcs', { returnObjects: true }) as CatalogItem,
                workstations: t('catalog.items.workstations', { returnObjects: true }) as CatalogItem,
            },
            differentConfig: t('catalog.differentConfig'),
            talkToTeam: t('catalog.talkToTeam'),
        },
        comparison: {
            rows: (keys: string[]) => keys.map(key => ({
                key,
                ...t(`comparison.rows.${key}`, { returnObjects: true }) as ComparisonRow
            })),
            headerLabel: t('comparison.headerLabel'),
            headerBuy: t('comparison.headerBuy'),
            headerRent: t('comparison.headerRent'),
        },
        // We can add more sections here as we deepen the app
    };
};
