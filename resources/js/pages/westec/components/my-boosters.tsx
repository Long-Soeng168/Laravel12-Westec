import useTranslation from '@/hooks/use-translation';
import Headline from './headline';

const MyBoosters = ({ solution_boosters }: { solution_boosters: any[] }) => {
    const { t, currentLocale } = useTranslation();
    return (
        <>
            <div className="max-w-screen-[4000px] bg-white">
                {solution_boosters?.length > 0 && (
                    <>
                        <Headline title={t('Solution Boosters')} />
                        <div className="grid grid-cols-1 px-4 md:grid-cols-3 lg:px-16">
                            {solution_boosters?.map((item, index) => section(item, index))}
                        </div>
                    </>
                )}
            </div>
        </>
    );

    function section(item: any, index: number) {
        return (
            <div className={`border-l-true-primary w-full ${index > 0 && 'border-l-1'} p-2 pt-0 lg:p-8 lg:pt-0`}>
                <div className="flex flex-col gap-6">
                    {/* Section Header */}
                    <div>
                        <h2 className="font-proxima-nova-regular bg-primary mb-6 inline px-4 py-2 text-center text-lg text-white 2xl:text-xl">
                            {currentLocale == 'kh' ? item.title_kh : item.title}
                        </h2>
                    </div>
                    {item?.children?.length > 0 &&
                        item?.children?.map((child, index) => (
                            <div className="flex items-center gap-6">
                                <div className="aspect-square w-44 2xl:w-52">
                                    <img
                                        src={`/assets/images/pages/thumb/${child?.images[0]?.image}`}
                                        className="h-full w-full object-contain"
                                        alt="Site Evaluation"
                                    />
                                </div>
                                <div className="text-start">
                                    <h3 className="font-proxima-nova-bold text-sm text-[#333] 2xl:text-xl">
                                        {currentLocale == 'kh' ? child.title_kh : child.title}
                                    </h3>
                                    <p
                                        className="font-proxima-nova-regular text-[12px] text-[#555] 2xl:text-lg"
                                        dangerouslySetInnerHTML={{
                                            __html: currentLocale == 'kh' ? child?.short_description_kh : child?.short_description,
                                        }}
                                    ></p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        );
    }
};

export default MyBoosters;
