import MySlide from '@/components/my-slide';
import useTranslation from '@/hooks/use-translation';
import { Head, usePage } from '@inertiajs/react';
import { ContactSection } from './components/contact-section';
import { FeatureSection } from './components/feature-section';
import WestecLayout from './layout/layout';

const Solutions = () => {
    const { security_detail, banners, smart_home_detail, commercial_detail, it_solution_detail, contact_heading_1, contact_heading_2 } =
        usePage().props;
    const { t, currentLocale } = useTranslation();

    const siteName = '';

    // Find first available detail for meta title & description
    const details = [security_detail, smart_home_detail, commercial_detail, it_solution_detail];
    const firstDetail = details.find((d) => d?.title);

    const metaTitle = firstDetail ? `${firstDetail.title} | ${siteName}` : `Our Solutions | ${siteName}`;

    const metaDescription = firstDetail
        ? currentLocale === 'kh'
            ? firstDetail.short_description_kh || 'Explore Westec Cambodia’s innovative solutions.'
            : firstDetail.short_description || 'Explore Westec Cambodia’s innovative solutions.'
        : 'Explore Westec Cambodia’s innovative smart home, security, commercial, and IT solutions designed to elevate your lifestyle.';

    // OG image: first banner or fallback
    const ogImage = banners?.[0]?.image ? `/assets/images/banners/${banners[0].image}` : '/images/default-og-image.jpg';

    const siteUrl = 'https://westec.com/solutions';

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

            <MySlide images={banners} />

            {security_detail?.title && <FeatureSection item={security_detail} defaultDropDown={true} />}
            {smart_home_detail?.title && <FeatureSection item={smart_home_detail} defaultDropDown={false} />}

            {contact_heading_1 && (
                <ContactSection bg="bg-true-primary" title={currentLocale == 'kh' ? contact_heading_1?.title_kh : contact_heading_1?.title} />
            )}
            {commercial_detail?.title && <FeatureSection item={commercial_detail} defaultDropDown={false} />}
            {it_solution_detail?.title && <FeatureSection item={it_solution_detail} defaultDropDown={false} />}

            {contact_heading_2 && (
                <ContactSection bg="bg-true-primary" title={currentLocale == 'kh' ? contact_heading_2?.title_kh : contact_heading_2?.title} />
            )}
        </WestecLayout>
    );
};

export default Solutions;
