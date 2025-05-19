import useTranslation from '@/hooks/use-translation';
import Headline from './headline';

const BlogsList = ({ items }: { items: any }) => {
    const { t, currentLocale } = useTranslation();
    return (
        <div className="mx-auto max-w-[4000px] bg-white">
            <Headline title={t('News & Updates')} />
            {items?.length > 0 && <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">{items?.map((item) => BlogCard(item))}</div>}
        </div>
    );

    function BlogCard(item: any) {
        return (
            <div className="flex flex-col overflow-hidden border-[0.5px] bg-[#36454f] hover:shadow-lg">
                <a href={item.link || '#'}>
                    <img className="aspect-[1/1] w-full object-cover" src={`/assets/images/posts/thumb/${item.images[0]?.image}`} alt="" />
                </a>

                <div className="p-4">
                    <div className="mb-8">
                        <a
                            href={item.link || '#'}
                            className="mb-2 inline-block text-lg font-bold text-white transition duration-500 ease-in-out 2xl:text-2xl"
                        >
                            {currentLocale == 'kh' ? item.title_kh : item.title}
                        </a>
                        <p className="text-sm whitespace-pre-line text-gray-300 2xl:text-xl">
                            {currentLocale == 'kh' ? item.short_description_kh : item.short_description}
                        </p>
                        <p className="text-sm whitespace-pre-line text-gray-300 2xl:text-xl">
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
                            className="font-proxima-nova-regular bg-primary px-4 py-1 text-base text-white capitalize transition duration-200 hover:underline 2xl:text-2xl"
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
