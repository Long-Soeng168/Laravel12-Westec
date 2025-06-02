import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import useTranslation from '@/hooks/use-translation';
import { cn } from '@/lib/utils';
import * as React from 'react';
export default function MySlideCareer({ teams }: { teams: any[] }) {
    const { t, currentLocale } = useTranslation();

    const duplicatedTeams = [...teams, ...teams, ...teams, ...teams, ...teams];

    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    // console.log('current :', current);
    React.useEffect(() => {
        if (!api) {
            return;
        }
        setCurrent(api.selectedScrollSnap() + 1);
        api.on('select', () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <div className="mx-auto max-w-6xl 2xl:max-w-[80vw]">
            <Carousel setApi={setApi} className="w-full max-w-6xl 2xl:max-w-[80vw]" opts={{ loop: true }}>
                <CarouselContent className="ml-0">
                    {duplicatedTeams?.map((item, index) => (
                        <CarouselItem key={index} className={cn('basis-[50%] pl-0 sm:basis-[33%]', {})}>
                            <Card
                                className={cn('border-0 p-0 transition-transform duration-500', {
                                    'scale-[0.6]': index !== current - 1,
                                })}
                            >
                                <CardContent className="flex aspect-square items-center justify-center p-0">
                                    <div className={`flex flex-col overflow-hidden border-[0.5px] transition-all duration-500 hover:shadow-lg`}>
                                        <a href="#">
                                            <img className="aspect-[1/1] w-full object-cover" src={`/assets/images/teams/${item.image}`} alt="" />
                                        </a>

                                        <div className="background flex flex-col justify-start p-2">
                                            <div className="mb-4 flex flex-col justify-between">
                                                <a
                                                    href="#"
                                                    className="mb-1 inline-block text-[16px] font-bold text-white transition duration-500 ease-in-out 2xl:text-2xl"
                                                >
                                                    {currentLocale == 'kh' ? item?.name_kh : item?.name}
                                                </a>
                                                <p
                                                    className="text-[12px] text-gray-300 2xl:text-base"
                                                    dangerouslySetInnerHTML={{
                                                        __html: currentLocale == 'kh' ? item?.short_description_kh : item?.short_description,
                                                    }}
                                                ></p>
                                            </div>
                                            <div className="mt-2">
                                                <Dialog>
                                                    <DialogTrigger>
                                                        <span className="font-proxima-nova-regular bg-true-primary px-4 py-1 text-xs text-white capitalize transition duration-200 hover:underline 2xl:text-xl">
                                                            {t('Read More')}
                                                        </span>
                                                    </DialogTrigger>
                                                    <DialogContent
                                                        showCloseButton={true}
                                                        className="bg-true-primary min-w-[95%] gap-0 rounded-none p-0 text-white sm:min-w-[95%]"
                                                    >
                                                        <DialogHeader>
                                                            <DialogTitle className="hidden"></DialogTitle>
                                                            <DialogDescription className="hidden"></DialogDescription>
                                                        </DialogHeader>
                                                        <div className="flex flex-col lg:flex-row">
                                                            <img
                                                                className="order-3 aspect-square h-full w-auto max-w-full object-cover lg:order-1 lg:max-w-[400px]"
                                                                src={`/assets/images/teams/${item.image}`}
                                                                alt=""
                                                            />
                                                            <div className="order-2 p-2 text-white lg:p-4">
                                                                <div className="mb-4">
                                                                    <h1 className="mt-2 text-xl font-bold 2xl:text-2xl">
                                                                        {currentLocale == 'kh' ? item?.name_kh : item?.name}
                                                                    </h1>
                                                                    <p
                                                                        className="2xl:text-xl"
                                                                        dangerouslySetInnerHTML={{
                                                                            __html:
                                                                                currentLocale == 'kh'
                                                                                    ? item?.short_description_kh
                                                                                    : item?.short_description,
                                                                        }}
                                                                    ></p>
                                                                </div>
                                                                <div className="bg-black/30 p-2">
                                                                    <div
                                                                        className="prose prose-p:m-0 flex max-w-none flex-col gap-4 space-y-2 font-medium text-white lg:text-sm 2xl:text-lg"
                                                                        dangerouslySetInnerHTML={{
                                                                            __html:
                                                                                currentLocale == 'kh'
                                                                                    ? item?.long_description_kh
                                                                                    : item?.long_description,
                                                                        }}
                                                                    ></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </DialogContent>
                                                </Dialog>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="my-8 flex items-center justify-center gap-8">
                    <CarouselPrevious className="relative translate-0 border dark:bg-white" />
                    <CarouselNext className="relative translate-0 border dark:bg-white" />
                </div>
            </Carousel>
        </div>
    );
}
