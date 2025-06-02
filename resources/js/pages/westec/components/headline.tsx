import { cn } from '@/lib/utils';

const Headline = ({ title, subTitle, className }: { title: string; subTitle?: string; className?: string }) => {
    return (
        <div>
            <h1
                className={cn(
                    'inline-block w-full border-[#273892] px-4 py-10 text-2xl font-semibold text-[#273892] lg:px-16 2xl:text-4xl',
                    className,
                )}
            >
                {title}
                {subTitle && <p className="mt-2 text-base 2xl:text-lg">{subTitle}</p>}
            </h1>
        </div>
    );
};

export default Headline;
