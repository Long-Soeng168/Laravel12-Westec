import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import useTranslation from '@/hooks/use-translation';
import { PaperclipIcon } from 'lucide-react';
import Headline from './headline';

const CareerList = ({ careers }: { careers: any[] }) => {
    const { t, currentLocale } = useTranslation();
    return (
        <div className="mx-auto max-w-[4000px] bg-white">
            <Headline title={t('Career')} />
            {careers?.length > 0 && <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">{careers.map((item) => BlogCard(item))}</div>}
        </div>
    );

    function BlogCard(item: any) {
        return (
            <div className="flex flex-col overflow-hidden border-[0.5px] bg-[#36454f] hover:shadow-lg">
                <a href="#">
                    <img className="aspect-[1/1] w-full object-cover" src={`/assets/images/careers/${item.image}`} alt="Sunset in the mountains" />
                </a>

                <div className="p-4">
                    <div className="mb-8">
                        <a href="#" className="mb-2 inline-block text-lg font-bold text-white transition duration-500 ease-in-out 2xl:text-2xl">
                            {currentLocale == 'kh' ? item?.name_kh : item?.name}
                        </a>
                        <p
                            className="text-sm text-gray-300 2xl:text-xl"
                            dangerouslySetInnerHTML={{
                                __html: currentLocale == 'kh' ? item?.short_description_kh : item?.short_description,
                            }}
                        ></p>
                    </div>
                    <div>
                        <Dialog>
                            <DialogTrigger>
                                <span className="font-proxima-nova-regular bg-primary px-4 py-1 text-xs text-white capitalize transition duration-200 hover:underline 2xl:text-2xl">
                                    {t('More Details')}
                                </span>
                            </DialogTrigger>
                            <DialogContent showCloseButton={true} className="bg-primary min-w-[95%] gap-0 rounded-none p-0 text-white sm:min-w-[95%]">
                                <DialogHeader>
                                    <DialogTitle className="hidden"></DialogTitle>
                                    <DialogDescription className="hidden"></DialogDescription>
                                </DialogHeader>
                                <div>
                                    <div>
                                        <h1 className="p-4 pb-0 text-xl font-bold">
                                            {t('Career Position')}:{' '}
                                            <span className="text-yellow-400">
                                                {currentLocale == 'kh' ? item?.position?.name_kh : item?.position?.name}
                                            </span>
                                        </h1>
                                    </div>
                                    <div className="flex flex-col gap-4 p-2 text-white lg:flex-row lg:p-4">
                                        <div className="w-full space-y-1 lg:flex-1">
                                            <div className="bg-black/30 p-2 text-sm">
                                                <p>
                                                    {t('Location')}: <strong>{item.location}</strong>
                                                </p>
                                                <p>
                                                    {t('Industry')}: <strong>{item.industry}</strong>
                                                </p>
                                                <p>
                                                    {t('Budget')}: <strong>{item.budget}</strong> $
                                                </p>
                                            </div>
                                            <div className="bg-black/30 p-2 text-sm">
                                                <p className="text-lg font-bold">{t('QUALIFICATIONS')}</p>
                                                <div
                                                    className="prose prose-p:m-0 max-w-none text-white"
                                                    dangerouslySetInnerHTML={{
                                                        __html: item?.qualification,
                                                    }}
                                                ></div>
                                            </div>
                                            <div className="bg-black/30 p-2 text-sm">
                                                <p className="text-lg font-bold">{t('SKILLS')}:</p>
                                                <div
                                                    className="prose prose-p:m-0 max-w-none text-white"
                                                    dangerouslySetInnerHTML={{
                                                        __html: item?.skill,
                                                    }}
                                                ></div>
                                            </div>
                                            <div className="bg-black/30 p-2 text-sm">
                                                <p className="text-lg font-bold">{t('DUTIES & RESPONSIBILITIES')}:</p>
                                                <div
                                                    className="prose prose-p:m-0 max-w-none text-white"
                                                    dangerouslySetInnerHTML={{
                                                        __html: item?.responsibility,
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                        <div className="w-full space-y-4 lg:w-md">
                                            <div className="w-full max-w-full">
                                                <Label htmlFor="name">{t('Name')}</Label>
                                                <Input
                                                    id="name"
                                                    type="name"
                                                    placeholder={t('Name')}
                                                    className="w-full max-w-full rounded-none border-none bg-white text-black shadow-none"
                                                />
                                            </div>
                                            <div className="w-full max-w-full">
                                                <Label htmlFor="email">{t('Career Position')}</Label>
                                                <Input
                                                    id="position"
                                                    type="position"
                                                    placeholder={t("Position")}
                                                    disabled
                                                    value={currentLocale == 'kh' ? item?.position?.name_kh : item?.position?.name}
                                                    className="w-full max-w-full rounded-none border-none bg-white text-black shadow-none disabled:opacity-80"
                                                />
                                            </div>
                                            <div className="w-full max-w-full">
                                                <Label htmlFor="email">{t('Email')}</Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    placeholder={t('Email')}
                                                    className="w-full max-w-full rounded-none border-none bg-white text-black shadow-none"
                                                />
                                            </div>
                                            <div className="w-full max-w-full">
                                                <Label htmlFor="email">{t('Phone number')}</Label>
                                                <Input
                                                    id="phone"
                                                    type="phone"
                                                    placeholder={t('Phone')}
                                                    className="w-full max-w-full rounded-none border-none bg-white text-black shadow-none"
                                                />
                                            </div>
                                            <div className="flex w-full max-w-full justify-end gap-4">
                                                <Button variant="secondary" className="rounded-none">
                                                    <PaperclipIcon /> {t('Attach CV')}
                                                </Button>
                                                <Button variant="secondary" className="rounded-none">
                                                    {t('Apply')}
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </div>
        );
    }
};

export default CareerList;
