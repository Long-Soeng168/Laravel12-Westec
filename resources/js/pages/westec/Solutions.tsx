import MySlide from '@/components/my-slide';
import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';
import { ContactSection } from './components/contact-section';
import { FeatureSection } from './components/feature-section';
import WestecLayout from './layout/layout';

const Solutions = () => {
    const { security_detail, banners, smart_home_detail, commercial_detail, it_solution_detail, contact_heading_1, contact_heading_2 } =
        usePage().props;
    const { t, currentLocale } = useTranslation();
    return (
        <WestecLayout>
            <MySlide images={banners} />

            {security_detail?.title && <FeatureSection item={security_detail} defaultDropDown={true} />}
            {smart_home_detail?.title && <FeatureSection item={smart_home_detail} defaultDropDown={false} />}

            {contact_heading_1 && (
                <ContactSection bg="bg-primary" title={currentLocale == 'kh' ? contact_heading_1?.title_kh : contact_heading_1?.title} />
            )}
            {commercial_detail?.title && <FeatureSection item={commercial_detail} defaultDropDown={false} />}
            {it_solution_detail?.title && <FeatureSection item={it_solution_detail} defaultDropDown={false} />}

            {contact_heading_2 && <ContactSection title={currentLocale == 'kh' ? contact_heading_2?.title_kh : contact_heading_2?.title} />}
        </WestecLayout>
    );
};

export default Solutions;
