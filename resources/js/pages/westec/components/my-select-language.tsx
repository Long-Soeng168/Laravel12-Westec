import useTranslation from '@/hooks/use-translation';

export function MyLanguageSelector() {
    const { currentLocale } = useTranslation();
    return (
        <div className="flex items-center justify-center gap-2">
            <a href="/lang/en">
                <div className="aspect-video h-6 2xl:h-8">
                    <img
                        src="assets/demo-images/usa.png"
                        className={`h-full w-auto ${currentLocale == 'en' && 'ring-true-primary ring-2 ring-offset-2'}`}
                    />
                </div>
            </a>
            <a href="/lang/kh">
                <div className="aspect-video h-6 2xl:h-8">
                    <img
                        src="assets/demo-images/kh.png"
                        className={`h-full w-auto ${currentLocale == 'kh' && 'ring-true-primary ring-2 ring-offset-2'}`}
                    />
                </div>
            </a>
        </div>
    );
}
