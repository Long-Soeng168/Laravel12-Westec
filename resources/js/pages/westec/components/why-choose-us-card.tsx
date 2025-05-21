import useTranslation from '@/hooks/use-translation';
import { useState } from 'react';

const WhyChooseUsCard = ({ item, i }: { item: any; i: number }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const { t, currentLocale } = useTranslation();

    const handleCardClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="card perspective font-proxima-nova-regular h-full border lg:border-none" onClick={handleCardClick}>
            <div className={`card__content relative h-full cursor-pointer py-4 transition-transform duration-700 ${isFlipped ? 'rotate-y-180' : ''}`}>
                {/* Front */}
                <div className="card__front flex h-full items-center gap-8 px-12 py-4 text-start text-white backface-hidden">
                    <p className="text-8xl font-bold 2xl:text-9xl">{i}</p>
                    <div className="flex flex-1 justify-center">
                        <div className="flex w-full max-w-[250px] flex-col items-center justify-start">
                            <span className="size-28 2xl:size-32">
                                <img src={`/assets/images/pages/${item.images[0]?.image}`} alt="" className="h-full w-full object-contain" />
                            </span>
                            <p className="mt-4 text-center text-2xl font-semibold text-white 2xl:text-3xl">
                                {currentLocale == 'kh' ? item?.title_kh : item?.title}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Back */}
                <div className="card__back absolute top-0 right-0 bottom-0 left-0 flex h-full rotate-y-180 items-center justify-center gap-8 truncate bg-white px-12 py-4 backface-hidden">
                    <p className="text-8xl font-bold 2xl:text-9xl">{i}</p>
                    <div className="flex w-full flex-col items-start justify-start">
                        <p className="text-start text-2xl font-bold 2xl:text-3xl">{currentLocale == 'kh' ? item?.title_kh : item?.title}</p>
                        <p
                            className="mt-4 text-start text-lg leading-6 whitespace-pre-line 2xl:text-xl"
                            dangerouslySetInnerHTML={{ __html: currentLocale == 'kh' ? item?.short_description_kh : item?.short_description }}
                        ></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUsCard;
