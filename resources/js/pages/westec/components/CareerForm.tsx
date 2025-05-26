import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ProgressWithValue } from '@/components/ui/progress-with-value';
import useTranslation from '@/hooks/use-translation';
import { useForm } from '@inertiajs/react';
import { PaperclipIcon } from 'lucide-react';
import { ChangeEvent, useState } from 'react';
import { toast } from 'sonner';

const CareerForm = ({ item }: { item: any }) => {
    const { t, currentLocale } = useTranslation();
    const [fileKey, setFileKey] = useState(Date.now());

    const { data, setData, post, processing, progress, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        cv: null as File | null,
        position_code: item?.position_code,
        career_id: item?.id,
    });

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData('cv', e.target.files ? e.target.files[0] : null);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/submit_career', {
            onSuccess: (page) => {
                if (page.props.flash?.success) {
                    toast.success('Success', { description: page.props.flash.success });
                    reset();
                    setFileKey(Date.now());
                }
                if (page.props.flash?.error) {
                    toast.error('Error', { description: page.props.flash.error });
                }
            },
            onError: (e) => {
                toast.error('Error', { description: 'Failed to submit. ' + JSON.stringify(e, null, 2) });
            },
            preserveScroll: true,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="w-full space-y-4 lg:w-md">
            <div>
                <Label htmlFor="name">{t('Name')}</Label>
                <Input
                    id="name"
                    type="text"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    placeholder={t('Name')}
                    className="w-full max-w-full rounded-none border-none bg-white text-black shadow-none"
                />
                {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>

            <div>
                <Label htmlFor="position_code">{t('Career Position')}</Label>
                <Input
                    id="position_code"
                    type="text"
                    disabled
                    value={data.position_code}
                    className="w-full max-w-full rounded-none border-none bg-white text-black shadow-none disabled:opacity-80"
                />
            </div>

            <div>
                <Label htmlFor="email">{t('Email')}</Label>
                <Input
                    id="email"
                    type="email"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                    placeholder={t('Email')}
                    className="w-full max-w-full rounded-none border-none bg-white text-black shadow-none"
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>

            <div>
                <Label htmlFor="phone">{t('Phone number')}</Label>
                <Input
                    id="phone"
                    type="tel"
                    value={data.phone}
                    onChange={(e) => setData('phone', e.target.value)}
                    placeholder={t('Phone')}
                    className="w-full max-w-full rounded-none border-none bg-white text-black shadow-none"
                />
                {errors.phone && <p className="text-red-500">{errors.phone}</p>}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
                <Button asChild variant="secondary" className="rounded-none">
                    <label htmlFor="cv-upload" className="flex cursor-pointer items-center gap-2">
                        <PaperclipIcon /> {t('Attach CV')}
                    </label>
                </Button>
                <div className="flex justify-end gap-4">
                    <Button type="submit" variant="secondary" className="rounded-none" disabled={processing}>
                        {processing ? t('Submitting...') : t('Apply')}
                    </Button>
                </div>
            </div>
            <input key={fileKey} id="cv-upload" type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="hidden" />
            {data.cv && <span className="text-sm">{data.cv.name}</span>}
            {errors.cv && <p className="text-red-500">{errors.cv}</p>}

            {progress && <ProgressWithValue value={progress.percentage} position="start" />}
        </form>
    );
};

export default CareerForm;
