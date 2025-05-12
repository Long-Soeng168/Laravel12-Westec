import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import useTranslation from '@/hooks/use-translation';
import { Link } from '@inertiajs/react';
import React from 'react';

interface MyCategoryListProps {
    items: any;
}

const MyCategoryList: React.FC<MyCategoryListProps> = ({ items }) => {
    const { t, currentLocale } = useTranslation();
    return (
        <Carousel>
            <CarouselContent className="p-2">
                {items?.map((item, i) => (
                    <CarouselItem key={item?.id} className="basis-1/2 md:basis-1/3 xl:basis-1/6">
                        <Link
                            prefetch
                            href={`/products?category_code=${item?.code}`}
                            key={i}
                            className="border-primary bg-background flex cursor-pointer flex-col items-center justify-center gap-2 rounded border border-dashed px-1 py-4 transition-all duration-300 hover:-translate-2 hover:border-solid hover:shadow-[5px_5px_rgba(104,_96,_255,_0.4),_10px_10px_rgba(104,_96,_255,_0.3),_15px_15px_rgba(104,_96,_255,_0.2)]"
                        >
                            <img
                                src={`/assets/images/item_categories/thumb/${item?.image}`}
                                alt={`Partner ${i + 1}`}
                                className="h-16 object-contain"
                            />
                            <p className="text-lg font-semibold text-gray-600 dark:text-white">
                                {currentLocale == 'kh' ? item?.name_kh : item?.name}
                            </p>
                        </Link>
                    </CarouselItem>
                ))}
            </CarouselContent>

            <CarouselPrevious className="absolute top-1/2 -left-2 z-10 -translate-y-1/2 transform" />
            <CarouselNext className="absolute top-1/2 -right-2 z-10 -translate-y-1/2 transform" />
        </Carousel>
    );
};

export default MyCategoryList;
