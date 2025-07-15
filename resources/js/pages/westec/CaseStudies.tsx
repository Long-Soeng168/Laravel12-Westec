import MySlide from '@/components/my-slide';
import useTranslation from '@/hooks/use-translation';
import { Head, usePage } from '@inertiajs/react';
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

    const siteName = '';

    // Find first available detail to use for meta title & description
    const details = [banking_detail, embassy_detail, microfinance_detail, manufacturing_detail, construction_detail, entertainment_detail];

    // Pick first with a title
    const firstDetail = details.find((d) => d?.title);

    // Compose meta title & description
    const metaTitle = firstDetail ? `${firstDetail.title} | ${siteName}` : `Our Solutions | ${siteName}`;

    const metaDescription = firstDetail
        ? currentLocale === 'kh'
            ? firstDetail.short_description_kh || 'Explore Westec Cambodia’s innovative solutions.'
            : firstDetail.short_description || 'Explore Westec Cambodia’s innovative solutions.'
        : 'Explore Westec Cambodia’s innovative solutions.';

    // OG image: use first image of first detail if any, else fallback
    const ogImage = firstDetail?.images?.[0]?.image ? `/assets/images/pages/${firstDetail.images[0].image}` : '/images/default-og-image.jpg';

    const siteUrl = 'https://westec.com/case_studies';

    return (
        <WestecLayout>
            <Head>
                <title>{metaTitle}</title>
                <meta name="description" content={metaDescription} />

                {/* Open Graph */}
                <meta property="og:title" content={metaTitle} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={siteUrl} />
                <meta property="og:image" content={ogImage} />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={metaTitle} />
                <meta name="twitter:description" content={metaDescription} />
                <meta name="twitter:image" content={ogImage} />
            </Head>

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
