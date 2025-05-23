import useTranslation from '@/hooks/use-translation';

export function ContactSection({
    bg = 'bg-primary',
    showButton = true,
    title = '',
}: {
    bg?: string;
    showButton?: boolean;
    title?: string;
}) {
    const { t } = useTranslation();
    return (
        <>
            {/* Contact */}
            <div className={`relative mx-auto flex w-full flex-col px-4 py-10 lg:px-16 lg:py-20 ${bg}`}>
                {/* Left Section */}
                <div className="flex flex-col items-end text-left">
                    <h1 className="font-proxima-nova-bold whitespace-pre-line mb-4 max-w-[80%] text-end text-xl  text-white md:text-3xl lg:max-w-[80%] lg:text-4xl 2xl:text-4xl">
                        {title}
                    </h1>
                    {showButton && (
                        <a
                            href="/contact"
                            className="font-proxima-nova-regular bg-white px-4 py-2 text-base text-black capitalize transition duration-200 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)]"
                        >
                            {t('Contact Us Now')}
                        </a>
                    )}
                </div>
            </div>
        </>
    );
}
