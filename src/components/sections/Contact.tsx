import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
    const { t } = useTranslation();
    // The form submission is handled natively by formsubmit.co using the action attribute.

    return (
        <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6 text-start">
                <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                    {t('contact.title')}
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                    {t('contact.subtitle')}
                </p>
            </div>

            <Card className="border-slate-800 bg-slate-950 text-white shadow-2xl">
                <CardHeader className="text-start">
                    <CardTitle>{t('contact.cardTitle')}</CardTitle>
                    <CardDescription className="text-slate-400">
                        {t('contact.cardDescription')}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form action="https://formsubmit.co/info@techbridge-eg.com" method="POST" className="space-y-4 text-start">
                        {/* FormSubmit Configuration */}
                        <input type="hidden" name="_autoresponse" value={t('contact.form.autoResponse')} />
                        <input type="hidden" name="_subject" value="New Hardware Proposal Request" />
                        <input type="hidden" name="_template" value="table" />

                        <div className="grid grid-cols-2 gap-4">
                            <Input 
                                id="name" 
                                name="name" 
                                label={t('contact.form.name')}
                                placeholder={t('contact.form.namePlaceholder')} 
                                className="bg-slate-900 border-slate-800 text-white placeholder:text-slate-600" 
                                required 
                            />
                            <Input 
                                id="company" 
                                name="company" 
                                label={t('contact.form.company')}
                                placeholder={t('contact.form.companyPlaceholder')} 
                                className="bg-slate-900 border-slate-800 text-white placeholder:text-slate-600" 
                                required 
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <Input 
                                id="email" 
                                name="email" 
                                type="email" 
                                label={t('contact.form.email')}
                                placeholder={t('contact.form.emailPlaceholder')} 
                                className="bg-slate-900 border-slate-800 text-white placeholder:text-slate-600" 
                                required 
                            />
                            <Input 
                                id="phone" 
                                name="phone" 
                                type="tel" 
                                label={t('contact.form.phone')}
                                placeholder={t('contact.form.phonePlaceholder')} 
                                className="bg-slate-900 border-slate-800 text-white placeholder:text-slate-600" 
                                required 
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="devices" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{t('contact.form.devicesLabel')}</label>
                            <select
                                id="devices"
                                name="devices"
                                className="flex h-10 w-full rounded-md border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-white ring-offset-background placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                <option value="1-5">{t('contact.form.devicesOptions.1-5')}</option>
                                <option value="5-20">{t('contact.form.devicesOptions.5-20')}</option>
                                <option value="20+">{t('contact.form.devicesOptions.20+')}</option>
                            </select>
                        </div>

                        <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-white">
                            {t('contact.form.submit')}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};
