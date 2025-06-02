import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import useTranslation from '@/hooks/use-translation';
import { useForm, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { toast } from 'sonner';

const ProjectInquiryForm = () => {
    const { t, currentLocale } = useTranslation();
    const { solutions } = usePage().props;
    const [successMessage, setSuccessMessage] = useState('');

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        subject: '',
        other: '',
        solution_ids: [],
    });

    const handleCheckboxChange = (id) => {
        let newSolutionIds = [...data.solution_ids];
        if (newSolutionIds.includes(id)) {
            newSolutionIds = newSolutionIds.filter((sid) => sid !== id);
        } else {
            newSolutionIds.push(id);
        }
        setData('solution_ids', newSolutionIds);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        post('/submit_product_inquiry', {
            onSuccess: (page) => {
                if (page.props.flash?.success) {
                    setSuccessMessage(page.props.flash.success);
                    toast.success('Success', {
                        description: page.props.flash.success,
                    });
                    reset();
                }
                if (page.props.flash?.error) {
                    toast.error('Error', {
                        description: page.props.flash.error,
                    });
                }
            },
            onError: (e) => {
                toast.error('Error', {
                    description: 'Failed to submit. ' + JSON.stringify(e, null, 2),
                });
            },
            preserveScroll: true,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <section id="Project-Inquiry">
                <div className="bg-true-primary mt-0 px-2 py-4 pt-0 text-white lg:px-16">
                    <div className="mt-0 w-full relative space-y-4">
                        {solutions?.title && (
                            <>
                                <p className="px-2 text-base font-bold 2xl:text-2xl">{t('OUR SOLUTIONS')}:</p>
                                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                    {solutions?.children?.map((solution) => (
                                        <div key={solution.id} className="mb-4 flex flex-col items-start justify-start rounded p-2">
                                            <div className="mb-4 flex items-center gap-4">
                                                <img
                                                    src={`/assets/images/pages/${solution.images[1]?.image}`}
                                                    alt={solution.title}
                                                    className="size-16 object-contain"
                                                />
                                                <p className="text-sm font-bold 2xl:text-lg">
                                                    {currentLocale === 'kh' ? solution.title_kh : solution.title}
                                                </p>
                                            </div>

                                            <div className="space-y-2">
                                                {solution?.children?.map((item) => (
                                                    <div key={item.id} className="flex items-center space-x-2">
                                                        <Checkbox
                                                            id={`solution-${item.id}`}
                                                            checked={data.solution_ids.includes(item.id)}
                                                            onCheckedChange={() => handleCheckboxChange(item.id)}
                                                            className="rounded-none bg-white data-[state=checked]:border-black data-[state=checked]:bg-black"
                                                        />
                                                        <label
                                                            htmlFor={`solution-${item.id}`}
                                                            className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 2xl:text-lg"
                                                        >
                                                            {currentLocale === 'kh' ? item.title_kh : item.title}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                        <div className="grid w-full grid-cols-1 items-end gap-x-8 px-2 md:grid-cols-4 lg:absolute lg:-translate-y-36">
                            <div className="col-span-2 mb-8 flex w-full max-w-full flex-col items-start gap-2">
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        checked={data.other ? true : false}
                                        className="rounded-none bg-white data-[state=checked]:border-black data-[state=checked]:bg-black"
                                    />
                                    <label
                                        htmlFor={`other`}
                                        className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 2xl:text-lg"
                                    >
                                        {t('Others')}
                                    </label>
                                </div>
                                <Input
                                    id="other"
                                    type="text"
                                    value={data.other}
                                    onChange={(e) => setData('other', e.target.value)}
                                    className="w-full max-w-full rounded-none border-none bg-white text-black shadow-none 2xl:h-10 2xl:text-lg"
                                />
                                {errors.other && <p className="mt-1 text-sm text-red-500">{errors.other}</p>}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 items-end gap-4 gap-x-8 px-2 md:grid-cols-4 lg:py-8">
                        <div className="w-full max-w-full">
                            <Label className="2xl:text-lg" htmlFor="name">
                                {t('Name')}
                            </Label>
                            <Input
                                id="name"
                                type="text"
                                placeholder={t('Name')}
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                className="w-full max-w-full rounded-none border-none bg-white text-black shadow-none 2xl:h-10 2xl:text-lg"
                            />
                            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                        </div>

                        <div className="w-full max-w-full">
                            <Label className="2xl:text-lg" htmlFor="email">
                                {t('Email')}
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder={t('Email')}
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                className="w-full max-w-full rounded-none border-none bg-white text-black shadow-none 2xl:h-10 2xl:text-lg"
                            />
                            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                        </div>

                        <div className="w-full max-w-full">
                            <Label className="2xl:text-lg" htmlFor="phone">
                                {t('Phone number')}
                            </Label>
                            <Input
                                id="phone"
                                type="text"
                                placeholder={t('Phone')}
                                value={data.phone}
                                onChange={(e) => setData('phone', e.target.value)}
                                className="w-full max-w-full rounded-none border-none bg-white text-black shadow-none 2xl:h-10 2xl:text-lg"
                            />
                            {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                        </div>

                        <div className="flex h-9 w-full max-w-full items-end justify-end mt-4">
                            <Button
                                type="submit"
                                variant="secondary"
                                disabled={processing}
                                className="text-true-primary h-full rounded-none bg-white 2xl:text-lg"
                            >
                                {processing ? t('Submitting...') : t('Submit')}
                            </Button>
                            {successMessage && <p className="text-green-500">{successMessage}</p>}
                        </div>
                    </div>
                </div>
            </section>
        </form>
    );
};

export default ProjectInquiryForm;
