import { cn } from '@/lib/utils';

const Headline = ({ title, className }: { title: string; className?: string }) => {
    return (
        <div>
            <h1 className={cn(className, 'inline-block border-[#273892] w-full px-4 py-10 text-2xl font-semibold text-[#273892] md:px-16 2xl:text-4xl')}>
                {title}
            </h1>
        </div>
    );
};

export default Headline;
