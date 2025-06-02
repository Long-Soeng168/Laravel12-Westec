import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import useTranslation from '@/hooks/use-translation';
import Headline from './headline';

const BlogsList = ({ items }: { items: any }) => {
    const { t, currentLocale } = useTranslation();
    return (
        <div className="mx-auto max-w-[4000px]">
            {items?.length > 0 && (
                <>
                    <Headline title={t('News & Updates')} />

                    <Carousel>
                        <CarouselContent className="m-0">
                            {/* Map through the existing items */}
                            {items.map((item) => (
                                <CarouselItem className="p-0 self-stretch sm:basis-1/2 lg:basis-1/4">{BlogCard(item)}</CarouselItem>
                            ))}

                            {/* Render "Coming Soon" placeholders for the remaining columns */}
                            {Array.from({ length: Math.max(0, 4 - items.length) }).map((_, index) => (
                                <CarouselItem className="relative self-stretch border p-0 sm:basis-1/2 lg:basis-1/4">
                                    <div
                                        key={`coming-soon-${index}`}
                                        className="absolute top-1/2 left-1/2 -translate-1/2 p-4 text-center text-2xl font-bold whitespace-nowrap text-gray-300"
                                    >
                                        {t('Coming Soon')}
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className={`my-8 flex items-center justify-center gap-8 ${items?.length <= 4 && 'lg:hidden'}`}>
                            <CarouselPrevious className="relative translate-0 border dark:bg-white" />
                            <CarouselNext className="relative translate-0 border dark:bg-white" />
                        </div>
                    </Carousel>
                </>
            )}
        </div>
    );

    function BlogCard(item: any) {
        return (
            <div className="flex flex-col h-full overflow-hidden border-[0.5px] border-white bg-[#36454f] hover:shadow-lg">
                <a href={item.link || '#'}>
                    <img className="aspect-[1/1] w-full object-cover" src={`/assets/images/posts/thumb/${item.images[0]?.image}`} alt="" />
                </a>

                <div className="flex h-full flex-col justify-between p-4">
                    <div className="mb-8">
                        <a
                            href={item.link || '#'}
                            className="mb-2 inline-block text-lg font-bold text-white transition duration-500 ease-in-out 2xl:text-xl"
                        >
                            {currentLocale == 'kh' ? item.title_kh : item.title}
                        </a>
                        <p className="text-sm whitespace-pre-line text-gray-300 2xl:text-lg">
                            {currentLocale == 'kh' ? item.short_description_kh : item.short_description}
                        </p>
                        <p className="text-sm whitespace-pre-line text-gray-300 2xl:text-lg">
                            {item.post_date &&
                                new Date(item.post_date).toLocaleDateString('en-UK', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                        </p>
                    </div>
                    <div>
                        <a
                            href={item.link || '#'}
                            className="font-proxima-nova-regular bg-true-primary px-4 py-1 text-xs text-white capitalize transition duration-200 hover:underline 2xl:text-xl"
                        >
                            {t('Read More')}
                        </a>
                    </div>
                </div>
            </div>
        );
    }
};

export default BlogsList;
