import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';
import { ContactSection } from './components/contact-section';
import Headline from './components/headline';
import WestecLayout from './layout/layout';

const Contact = () => {
    const { solutions, application_info, contact_heading_1, banners } = usePage().props;
    const { t, currentLocale } = useTranslation();

    return (
        <WestecLayout>
            <section>
                <img src={`/assets/images/banners/${banners?.image}`} alt="" />
            </section>
            <section id="Project-Inquiry">
                <Headline title={t('Project Inquiry?')} />
                <div className="bg-true-primary px-4 py-4 text-white lg:px-16">
                    <div className="grid grid-cols-1 gap-4 gap-x-8 md:grid-cols-3">
                        <div className="w-full max-w-full">
                            <Label className="2xl:text-xl" htmlFor="name">
                                {t('Name')}
                            </Label>
                            <Input
                                id="name"
                                type="name"
                                placeholder={t('Name')}
                                className="w-full max-w-full rounded-none border-none bg-white text-black shadow-none 2xl:h-10 2xl:text-xl"
                            />
                        </div>
                        <div className="w-full max-w-full">
                            <Label className="2xl:text-xl" htmlFor="email">
                                {t('Email')}
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder={t('Email')}
                                className="w-full max-w-full rounded-none border-none bg-white text-black shadow-none 2xl:h-10 2xl:text-xl"
                            />
                        </div>
                        <div className="w-full max-w-full">
                            <Label className="2xl:text-xl" htmlFor="phone">
                                {t('Phone number')}
                            </Label>
                            <Input
                                id="phone"
                                type="phone"
                                placeholder={t('Phone')}
                                className="w-full max-w-full rounded-none border-none bg-white text-black shadow-none 2xl:h-10 2xl:text-xl"
                            />
                        </div>
                    </div>
                    <div className="mt-8 space-y-4">
                        {solutions?.title && (
                            <>
                                <p className="text-base font-bold 2xl:text-2xl">{t('OUR SOLUTIONS')}:</p>
                                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                    {solutions?.children?.map((solution, index) => (
                                        <div key={solution.id} className="mb-4 flex flex-col items-start justify-start rounded p-4">
                                            <div className="mb-4 flex items-center gap-4">
                                                <img src={`/assets/images/pages/${solution.images[1]?.image}`} className="size-16 object-contain" />
                                                <p className="text-sm font-bold 2xl:text-lg">
                                                    {currentLocale == 'kh' ? solution.title_kh : solution.title}
                                                </p>
                                            </div>
                                            <div className="space-y-2">
                                                {solution?.children?.map((item, subIndex) => (
                                                    <div key={subIndex} className="flex items-center space-x-2">
                                                        <Checkbox
                                                            id={item.id}
                                                            className="rounded-none bg-white data-[state=checked]:border-black data-[state=checked]:bg-black"
                                                        />
                                                        <label
                                                            htmlFor={item.id}
                                                            className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 2xl:text-lg"
                                                        >
                                                            {currentLocale == 'kh' ? item.title_kh : item.title}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                    <div className="mt-8 flex flex-wrap justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="terms"
                                    className="rounded-none bg-white data-[state=checked]:border-black data-[state=checked]:bg-black"
                                />
                                <label
                                    htmlFor="terms"
                                    className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 2xl:text-lg"
                                >
                                    {t('Others')}
                                </label>
                            </div>
                            <div className="w-full max-w-full lg:w-lg 2xl:h-10 2xl:text-xl">
                                <Input
                                    id="other"
                                    type="other"
                                    className="w-full max-w-full rounded-none border-none bg-white text-black shadow-none 2xl:h-10 2xl:text-xl"
                                />
                            </div>
                        </div>
                        <Button variant="secondary" className="h-full bg-white text-true-primary rounded-none 2xl:text-xl">
                            {t('Submit')}
                        </Button>
                    </div>
                </div>
            </section>
            {contact_heading_1 && (
                <ContactSection
                    showButton={false}
                    bg="bg-true-primary-four"
                    title={currentLocale == 'kh' ? contact_heading_1?.title_kh : contact_heading_1?.title}
                />
            )}
            <section id="Get-Support">
                <h1 className="my-6 inline-block border-[#273892] px-4 text-2xl font-semibold text-[#273892] lg:px-16">{t('Get Support?')}</h1>
                <div className="bg-true-primary px-4 py-4 text-white lg:px-16">
                    <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
                        <div className="grid grid-cols-1 content-start gap-4 gap-x-8 md:grid-cols-1">
                            <div className="w-full max-w-full">
                                <Label className="2xl:text-xl" htmlFor="name">
                                    {t('Name')}
                                </Label>
                                <Input
                                    id="name"
                                    type="name"
                                    placeholder={t('Name')}
                                    className="w-full max-w-full rounded-none border-none bg-white text-black shadow-none 2xl:h-10 2xl:text-xl"
                                />
                            </div>
                            <div className="w-full max-w-full">
                                <Label className="2xl:text-xl" htmlFor="email">
                                    {t('Email')}
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder={t('Email')}
                                    className="w-full max-w-full rounded-none border-none bg-white text-black shadow-none 2xl:h-10 2xl:text-xl"
                                />
                            </div>
                            <div className="w-full max-w-full">
                                <Label className="2xl:text-xl" htmlFor="phone">
                                    {t('Phone number')}
                                </Label>
                                <Input
                                    id="phone"
                                    type="phone"
                                    placeholder={t('Phone')}
                                    className="w-full max-w-full rounded-none border-none bg-white text-black shadow-none 2xl:h-10 2xl:text-xl"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4 gap-x-8 md:grid-cols-1">
                            <div className="w-full max-w-full">
                                <Label className="2xl:text-xl" htmlFor="name">
                                    {t('Subject')}
                                </Label>
                                <Input
                                    id="subject"
                                    type="subject"
                                    placeholder={t('Subject')}
                                    className="w-full max-w-full rounded-none border-none bg-white text-black shadow-none 2xl:h-10 2xl:text-xl"
                                />
                            </div>
                            <div className="w-full max-w-full">
                                <Label className="2xl:text-xl" htmlFor="Your inquiry">
                                    {t('Your inquiry')}
                                </Label>
                                <Textarea
                                    id="Your inquiry"
                                    placeholder={t('Your inquiry')}
                                    className="min-h-[112px] w-full max-w-full dark:bg-white rounded-none border-none bg-white text-black shadow-none 2xl:text-xl"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 flex flex-wrap justify-end gap-4">
                        <Button variant="secondary" className="h-full bg-white text-true-primary rounded-none 2xl:text-xl">
                            {t('Submit')}
                        </Button>
                    </div>
                </div>
            </section>
            {/*End content */}

            {application_info.google_map && (
                <div className="flex items-center justify-center" id="contact-google-map">
                    <div className="w-full rounded-none">
                        <iframe
                            src={application_info.google_map}
                            className="h-[500px] w-full rounded-none"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            )}
        </WestecLayout>
    );
};

export default Contact;
