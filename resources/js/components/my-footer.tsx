import useTranslation from '@/hooks/use-translation';
import { Link, usePage } from '@inertiajs/react';

const MyFooter = () => {
    const { t, currentLocale } = useTranslation();
    const { application_info, pages_menus, links_follow_us, links_chat_with_us } = usePage().props;
    return (
        <>
            <footer className="font-proxima-nova-regular mt-10 py-10 text-black">
                <div className="mx-auto grid max-w-[2000px] grid-cols-1 gap-8 px-4 lg:grid-cols-4 lg:px-16">
                    {/* Contact Section */}
                    <div className="grid w-full grid-cols-1">
                        <img src={`/assets/images/application_info/${application_info.image}`} alt="" className="mb-4 w-48" />
                        <div className="text-sm leading-relaxed text-gray-500 md:text-base 2xl:text-xl">
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: currentLocale == 'kh' ? application_info?.address_kh : application_info?.address,
                                }}
                            ></p>

                            <div className="mt-8">
                                <div className="flex">
                                    <p className="w-28 lg:w-32">{t('Mobile Phone')}</p>:
                                    <p className="ml-2 whitespace-pre-line">{application_info?.phone}</p>
                                </div>
                                <div className="flex">
                                    <p className="w-28 lg:w-32">{t('Landline Phone')}</p>:
                                    <p className="ml-2 whitespace-pre-line">{application_info?.landline_phone}</p>
                                </div>
                            </div>

                            <div className="mt-8 flex">
                                <p className="w-28 lg:w-32">{t('Email')}</p>:<p className="ml-2">{application_info?.email}</p>
                            </div>
                            <div className="mt-8 flex">
                                <p className="w-28 lg:w-32">{t('Office Hours')}</p>:
                                <p className="ml-2">{currentLocale == 'kh' ? application_info?.working_hours_kh : application_info?.working_hours}</p>
                            </div>
                        </div>
                    </div>

                    {/* Footer Links Section */}
                    <div className="w-full md:col-span-3">
                        <div className="grid grid-cols-2 gap-6 text-sm text-gray-500 xl:grid-cols-3">
                            {/* About Us */}
                            {pages_menus?.abouts && (
                                <div className="flex-1">
                                    <h3 className="bg-primary inline-block w-full px-6 py-1 text-center text-base text-white 2xl:text-2xl">
                                        <Link href={`/about`} prefetch>
                                            {currentLocale == 'kh' ? pages_menus?.abouts?.title_kh : pages_menus?.abouts?.title}
                                        </Link>
                                    </h3>
                                    <ul className="mt-6 list-disc space-y-1 pl-3 2xl:text-xl">
                                        {pages_menus?.abouts?.children?.length > 0 &&
                                            pages_menus?.abouts?.children?.map((child) => (
                                                <li className="cursor-pointer text-base hover:underline">
                                                    <Link href={`/about#${child?.code}`}>
                                                        {' '}
                                                        {currentLocale == 'kh' ? child?.title_kh : child?.title}
                                                    </Link>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            )}
                            {pages_menus?.solutions && (
                                <div className="flex-1">
                                    <h3 className="bg-primary inline-block w-full px-6 py-1 text-center text-base text-white 2xl:text-2xl">
                                        <Link href={`/solutions`} prefetch>
                                            {currentLocale == 'kh' ? pages_menus?.solutions?.title_kh : pages_menus?.solutions?.title}
                                        </Link>
                                    </h3>
                                    <ul className="mt-6 list-disc space-y-1 pl-3 2xl:text-xl">
                                        {pages_menus?.solutions?.children?.length > 0 &&
                                            pages_menus?.solutions?.children?.map((child) => (
                                                <li className="cursor-pointer text-base hover:underline">
                                                    <Link href={`/solutions#${child?.code}`}>
                                                        {' '}
                                                        {currentLocale == 'kh' ? child?.title_kh : child?.title}
                                                    </Link>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            )}
                            {pages_menus?.case_studies && (
                                <div className="flex-1">
                                    <h3 className="bg-primary inline-block w-full px-6 py-1 text-center text-base text-white 2xl:text-2xl">
                                        <Link href={`/case_studies`} prefetch>
                                            {currentLocale == 'kh' ? pages_menus?.case_studies?.title_kh : pages_menus?.case_studies?.title}
                                        </Link>
                                    </h3>
                                    <ul className="mt-6 list-disc space-y-1 pl-3 2xl:text-xl">
                                        {pages_menus?.case_studies?.children?.length > 0 &&
                                            pages_menus?.case_studies?.children?.map((child) => (
                                                <li className="cursor-pointer text-base hover:underline">
                                                    <Link href={`/case_studies#${child?.code}`}>
                                                        {' '}
                                                        {currentLocale == 'kh' ? child?.title_kh : child?.title}
                                                    </Link>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Social & Chat Sections */}
                        <div className="mt-16 grid grid-cols-2 gap-6 text-sm text-gray-500 xl:grid-cols-3">
                            {/* Follow Us */}
                            <div className="w-full sm:flex-1">
                                <h3 className="bg-primary inline-block px-6 py-1 text-base text-white 2xl:text-2xl">{t('Follow Us!')}</h3>
                                <div className="mt-6 flex gap-2">
                                    {links_follow_us?.map((item, index) => (
                                        <a key={item.id} href={item?.link}>
                                            <img
                                                src={`/assets/images/links/${item.image}`}
                                                alt=""
                                                className="background size-10 object-contain p-1.5 transition-all duration-500 hover:scale-125 2xl:size-14"
                                            />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Chat With Us */}
                            <div className="flex-1">
                                <h3 className="bg-primary inline-block px-6 py-1 text-base text-white 2xl:text-2xl">{t('Chat With Us!')}</h3>
                                <div className="mt-6 flex gap-2">
                                    {links_chat_with_us?.map((item, index) => (
                                        <a key={item.id} href={item?.link}>
                                            <img
                                                src={`/assets/images/links/${item.image}`}
                                                alt=""
                                                className="background size-10 object-contain p-1.5 transition-all duration-500 hover:scale-125 2xl:size-14"
                                            />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default MyFooter;
