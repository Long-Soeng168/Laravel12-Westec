import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import useTranslation from '@/hooks/use-translation';
import { MyLanguageSelector } from '@/pages/westec/components/my-select-language';
import { Link, usePage } from '@inertiajs/react';
import { AlignLeftIcon } from 'lucide-react';

export function MyNavbarMobile() {
    const { t, currentLocale } = useTranslation();
    const { pages_menus } = usePage().props;

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="border-none shadow-none xl:hidden">
                    <AlignLeftIcon className="stroke-primary stroke-[2.5]" />
                </Button>
            </SheetTrigger>

            <SheetContent side="left" className="border-muted w-[280px] overflow-auto border-r bg-white pt-8 shadow-lg">
                <div className="space-y-3 p-4">
                    {/* Abouts */}
                    {pages_menus?.abouts && (
                        <Accordion type="single" collapsible>
                            <AccordionItem value="abouts">
                                <AccordionTrigger className="text-primary py-0 text-base font-semibold">
                                    {currentLocale == 'kh' ? pages_menus.abouts.title_kh : pages_menus.abouts.title}
                                </AccordionTrigger>
                                <AccordionContent className="space-y-2 pl-4 pt-2">
                                    {pages_menus.abouts.children?.map((about) => (
                                        <Link
                                            key={about.id}
                                            href={`/about#${about.code}`}
                                            className="text-muted-foreground hover:text-primary block text-sm transition"
                                        >
                                            {currentLocale == 'kh' ? about.title_kh : about.title}
                                        </Link>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    )}

                    {/* Solutions */}
                    {pages_menus?.solutions && (
                        <Accordion type="single" collapsible>
                            <AccordionItem value="solutions">
                                <AccordionTrigger className="text-primary py-0 text-base font-semibold">
                                    {currentLocale == 'kh' ? pages_menus.solutions.title_kh : pages_menus.solutions.title}
                                </AccordionTrigger>
                                <AccordionContent className="space-y-2 pl-4 pt-2">
                                    {pages_menus.solutions.children?.map((solution) => (
                                        <Link
                                            key={solution.id}
                                            href={`/solutions#${solution.code}`}
                                            className="text-muted-foreground hover:text-primary block text-sm transition"
                                        >
                                            {currentLocale == 'kh' ? solution.title_kh : solution.title}
                                        </Link>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    )}

                    {/* Case Studies */}
                    {pages_menus?.case_studies && (
                        <Accordion type="single" collapsible>
                            <AccordionItem value="case_studies">
                                <AccordionTrigger className="text-primary py-0 text-base font-semibold">
                                    {currentLocale == 'kh' ? pages_menus.case_studies.title_kh : pages_menus.case_studies.title}
                                </AccordionTrigger>
                                <AccordionContent className="space-y-2 pl-4 pt-2">
                                    {pages_menus.case_studies.children?.map((case_study) => (
                                        <Link
                                            key={case_study.id}
                                            href={`/case_studies#${case_study.code}`}
                                            className="text-muted-foreground hover:text-primary block text-sm transition"
                                        >
                                            {currentLocale == 'kh' ? case_study.title_kh : case_study.title}
                                        </Link>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    )}

                    {/* Simple Links */}
                    <div className="space-y-3">
                        <Link href={`/#partners`} className="text-muted-foreground hover:text-primary block text-base font-semibold transition">
                            {t('Partners')}
                        </Link>
                        <Link href={`/career`} className="text-muted-foreground hover:text-primary block text-base font-semibold transition">
                            {t('Career')}
                        </Link>
                        <Link href={`/#newsId`} className="text-muted-foreground hover:text-primary block text-base font-semibold transition">
                            {t('News')}
                        </Link>
                        <Link href={`/contact`} className="text-muted-foreground hover:text-primary block text-base font-semibold transition">
                            {t('Contact Us')}
                        </Link>
                    </div>

                    <div className="border-muted border-t pt-6">
                        <MyLanguageSelector />
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
