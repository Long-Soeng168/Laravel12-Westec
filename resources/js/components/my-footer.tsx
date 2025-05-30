import useTranslation from '@/hooks/use-translation';
import { Link, usePage } from '@inertiajs/react';

const MyFooter = () => {
    const { t, currentLocale } = useTranslation();
    const { application_info, pages_menus, links_follow_us, links_chat_with_us } = usePage().props;
    return (
        <>
            <footer className="font-proxima-nova-regular mt-10 pb-20 text-black">
                <div className="mx-auto grid max-w-[2000px] grid-cols-1 gap-y-10 lg:gap-x-10 px-4 lg:grid-cols-6 lg:px-16">
                    {/* Contact Section */}
                    <div className="col-span-2 grid w-full grid-cols-1">
                        <img src={`/assets/images/application_info/${application_info.image}`} alt="" className="mb-8 w-48" />
                        <div className="font-proxima-thin space-y-8 text-base leading-7 font-thin text-black 2xl:space-y-10 2xl:text-xl">
                            <p
                                className="whitespace-pre-line"
                                dangerouslySetInnerHTML={{
                                    __html: currentLocale == 'kh' ? application_info?.address_kh : application_info?.address,
                                }}
                            ></p>

                            <div>
                                <div className="flex">
                                    <p className="whitespace-nowrap w-28">{t('Mobile Phone')}</p>:
                                    <p className="ml-2 whitespace-pre-line">{application_info?.phone}</p>
                                </div>
                                <div className="flex">
                                    <p className="whitespace-nowrap w-28">{t('Landline Phone')}</p>:
                                    <p className="ml-2 whitespace-pre-line">{application_info?.landline_phone}</p>
                                </div>
                            </div>

                            <div className="flex">
                                <p className="whitespace-nowrap w-28">{t('Email')}</p>:<p className="ml-2">{application_info?.email}</p>
                            </div>
                            <div className="flex">
                                <p className="whitespace-nowrap w-28">{t('Office Hours')}</p>:
                                <div>
                                    <p className="ml-2">
                                        {currentLocale == 'kh' ? application_info?.working_hours_kh : application_info?.working_hours}
                                    </p>
                                    <p className="ml-2">
                                        {currentLocale == 'kh' ? application_info?.working_days_kh : application_info?.working_days}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Links Section */}
                    <div className="w-full md:col-span-4">
                        <div className="font-proxima-thin grid grid-cols-2 gap-6 text-black xl:grid-cols-4">
                            {/* About Us */}
                            {pages_menus?.abouts && (
                                <div className="flex-1">
                                    <h3 className="bg-true-primary font-proxima-nova-regular inline-block w-full px-6 whitespace-nowrap py-1 text-center text-base text-white 2xl:text-lg">
                                        <Link href={`/about`} prefetch>
                                            {currentLocale == 'kh' ? pages_menus?.abouts?.title_kh : pages_menus?.abouts?.title}
                                        </Link>
                                    </h3>
                                    <ul className="mt-6 list-disc space-y-1 pl-3 marker:text-gray-400 2xl:text-xl">
                                        {pages_menus?.abouts?.children?.length > 0 &&
                                            pages_menus?.abouts?.children?.map((child) => (
                                                <li className="cursor-pointer text-base hover:underline 2xl:text-base">
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
                                    <h3 className="bg-true-primary font-proxima-nova-regular inline-block w-full px-6 whitespace-nowrap py-1 text-center text-base text-white 2xl:text-lg">
                                        <Link href={`/solutions`} prefetch>
                                            {currentLocale == 'kh' ? pages_menus?.solutions?.title_kh : pages_menus?.solutions?.title}
                                        </Link>
                                    </h3>
                                    <ul className="mt-6 list-disc space-y-1 pl-3 marker:text-gray-400 2xl:text-xl">
                                        {pages_menus?.solutions?.children?.length > 0 &&
                                            pages_menus?.solutions?.children?.map((child) => (
                                                <li className="cursor-pointer text-base hover:underline 2xl:text-base">
                                                    <Link href={`/solutions#${child?.code}`}>
                                                        {' '}
                                                        {currentLocale == 'kh' ? child?.title_kh : child?.title}
                                                    </Link>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            )}
                            <div className="flex-1">
                                <h3 className="bg-true-primary font-proxima-nova-regular inline-block w-full px-6 whitespace-nowrap py-1 text-center text-base text-white 2xl:text-lg">
                                    <Link href={`#`}>Featured Solutions</Link>
                                </h3>
                                <ul className="mt-6 list-disc space-y-1 pl-3 marker:text-gray-400 2xl:text-xl">
                                    <li className="cursor-pointer text-base hover:underline 2xl:text-base">
                                        <Link href={`#`}>Featured Solutions</Link>
                                    </li>
                                    <li className="cursor-pointer text-base hover:underline 2xl:text-base">
                                        <Link href={`#`}>Solution Specs</Link>
                                    </li>
                                </ul>
                            </div>
                            {pages_menus?.case_studies && (
                                <div className="flex-1">
                                    <h3 className="bg-true-primary font-proxima-nova-regular inline-block w-full px-6 whitespace-nowrap py-1 text-center text-base text-white 2xl:text-lg">
                                        <Link href={`/case_studies`} prefetch>
                                            {currentLocale == 'kh' ? pages_menus?.case_studies?.title_kh : pages_menus?.case_studies?.title}
                                        </Link>
                                    </h3>
                                    <ul className="mt-6 list-disc space-y-1 pl-3 marker:text-gray-400 2xl:text-xl">
                                        {pages_menus?.case_studies?.children?.length > 0 &&
                                            pages_menus?.case_studies?.children?.map((child) => (
                                                <li className="cursor-pointer text-base hover:underline 2xl:text-base">
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
                        <div className="mt-22 grid grid-cols-2 gap-6 text-sm text-gray-500 xl:grid-cols-4">
                            {/* Follow Us */}
                            <div className="col-span-2 w-full sm:flex-1">
                                <h3 className="bg-true-primary font-proxima-nova-regular inline-block px-6 py-1 text-base text-white 2xl:text-lg">
                                    {t('Follow Us!')}
                                </h3>
                                <div className="mt-6 flex gap-2">
                                    {links_follow_us?.map((item, index) => (
                                        <a key={item.id} href={item?.link}>
                                            <img
                                                src={`/assets/images/links/${item.image}`}
                                                alt=""
                                                className="background size-8 lg:size-10 shrink-0 object-contain p-1.5 transition-all duration-500 hover:scale-125"
                                            />
                                        </a>
                                    ))}
                                </div>
                            </div>
                            {/* Chat With Us */}
                            <div className="col-span-2 flex-1">
                                <h3 className="bg-true-primary font-proxima-nova-regular inline-block px-6 py-1 text-base text-white 2xl:text-lg">
                                    {t('Chat With Us!')}
                                </h3>
                                <div className="mt-6 flex gap-2">
                                    {links_chat_with_us?.map((item, index) => (
                                        <a key={item.id} href={item?.link}>
                                            <img
                                                src={`/assets/images/links/${item.image}`}
                                                alt=""
                                                className="background size-8 lg:size-10 object-contain p-1.5 transition-all duration-500 hover:scale-125"
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
