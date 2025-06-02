import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import useTranslation from '@/hooks/use-translation';
import { useForm } from '@inertiajs/react';
import { useState } from 'react';
import { toast } from 'sonner';

const GetSupportForm = () => {
    const { t } = useTranslation();
    const [successMessage, setSuccessMessage] = useState('');
    const { data, setData, post, processing, progress, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            post('/submit_support_request', {
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
        } catch (error) {
            toast.error('Something went wrong!', {
                description: error.message,
            });
        }
    };

    return (
        <section id="Get-Support">
            <h1 className="my-6 inline-block border-[#273892] px-4 text-2xl font-semibold text-[#273892] lg:px-16">{t('Get Support?')}</h1>
            <form onSubmit={handleSubmit} className="bg-true-primary px-4 py-4 text-white lg:px-16">
                <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
                    <div className="grid grid-cols-1 content-start gap-4">
                        <div>
                            <Label htmlFor="name">{t('Name')}</Label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                placeholder={t('Name')}
                                className="rounded-none border-none bg-white text-black 2xl:h-10"
                            />
                            {errors.name && <p className="text-red-500">{errors.name}</p>}
                        </div>
                        <div>
                            <Label htmlFor="email">{t('Email')}</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                placeholder={t('Email')}
                                className="rounded-none border-none bg-white text-black 2xl:h-10"
                            />
                            {errors.email && <p className="text-red-500">{errors.email}</p>}
                        </div>
                        <div>
                            <Label htmlFor="phone">{t('Phone number')}</Label>
                            <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={data.phone}
                                onChange={(e) => setData('phone', e.target.value)}
                                placeholder={t('Phone')}
                                className="rounded-none border-none bg-white text-black 2xl:h-10"
                            />
                            {errors.phone && <p className="text-red-500">{errors.phone}</p>}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <div>
                            <Label htmlFor="subject">{t('Subject')}</Label>
                            <Input
                                id="subject"
                                name="subject"
                                type="text"
                                value={data.subject}
                                onChange={(e) => setData('subject', e.target.value)}
                                placeholder={t('Subject')}
                                className="rounded-none border-none bg-white text-black 2xl:h-10"
                            />
                            {errors.subject && <p className="text-red-500">{errors.subject}</p>}
                        </div>
                        <div>
                            <Label htmlFor="message">{t('Your inquiry')}</Label>
                            <Textarea
                                id="message"
                                name="message"
                                value={data.message}
                                onChange={(e) => setData('message', e.target.value)}
                                placeholder={t('Your inquiry')}
                                className="min-h-[120px] rounded-none border-none bg-white text-black 2xl:text-lg"
                            />
                            {errors.message && <p className="text-red-500">{errors.message}</p>}
                        </div>
                    </div>
                </div>
                <div className="mt-8 flex flex-col items-end  gap-2">
                    <Button
                        type="submit"
                        variant="secondary"
                        className="text-true-primary h-9 rounded-none bg-white 2xl:text-lg"
                        disabled={processing}
                    >
                        {processing ? t('Submitting...') : t('Submit')}
                    </Button>
                    {successMessage && <p className="text-green-500">{successMessage}</p>}
                </div>

                {progress && <div className="mt-4 text-white">{progress.percentage}%</div>}
            </form>
        </section>
    );
};

export default GetSupportForm;
