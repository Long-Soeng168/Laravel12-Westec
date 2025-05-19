import MySlide from '@/components/my-slide';
import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';
import { CaseStudySection } from './components/case-study-section';
import { ContactSection } from './components/contact-section';
import WestecLayout from './layout/layout';

const Solutions = () => {
    const {
        banking_detail,
        embassy_detail,
        microfinance_detail,
        manufacturing_detail,
        construction_detail,
        entertainment_detail,
        contact_heading_1,
        contact_heading_2,
    } = usePage().props;
    const { t, currentLocale } = useTranslation();

    return (
        <WestecLayout>
            <MySlide />

            {banking_detail?.title && <CaseStudySection item={banking_detail} defaultDropDown={true} />}
            {embassy_detail?.title && <CaseStudySection item={embassy_detail} defaultDropDown={false} />}

            {contact_heading_1 && (
                <ContactSection bg="bg-true-primary-three" title={currentLocale == 'kh' ? contact_heading_1?.title_kh : contact_heading_1?.title} />
            )}

            {microfinance_detail?.title && <CaseStudySection item={microfinance_detail} defaultDropDown={false} />}
            {manufacturing_detail?.title && <CaseStudySection item={manufacturing_detail} defaultDropDown={false} />}

            {contact_heading_2 && (
                <ContactSection bg="bg-true-primary-three" title={currentLocale == 'kh' ? contact_heading_2?.title_kh : contact_heading_2?.title} />
            )}

            {construction_detail?.title && <CaseStudySection item={construction_detail} defaultDropDown={false} />}
            {entertainment_detail?.title && <CaseStudySection item={entertainment_detail} defaultDropDown={false} />}
        </WestecLayout>
    );
};

export default Solutions;
