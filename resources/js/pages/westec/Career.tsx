import MySlideCareer from '@/components/my-slide-career';
import useTranslation from '@/hooks/use-translation';
import { Head, usePage } from '@inertiajs/react';
import CareerList from './components/career-list';
import { ContactSection } from './components/contact-section';
import Headline from './components/headline';
import WestecLayout from './layout/layout';
const Career = () => {
    const { team_categories, careers, contact_heading_1 } = usePage().props;
    const { t, currentLocale } = useTranslation();

    const siteName = '';

    // Compose title: If team categories exist, use first one in title, else generic title
    const firstCategoryName = team_categories?.[0] ? (currentLocale === 'kh' ? team_categories[0].name_kh : team_categories[0].name) : null;

    const metaTitle = firstCategoryName ? `${firstCategoryName} Careers | ${siteName}` : `Career Opportunities | ${siteName}`;

    // Description fallback or could customize based on data if available
    const metaDescription = `Explore career opportunities at Westec Cambodia. Join our team and grow your professional journey with us.`;

    const siteUrl = 'https://westec.com/careers'; // update with your actual URL

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

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={metaTitle} />
                <meta name="twitter:description" content={metaDescription} />
            </Head>
            {team_categories?.length > 0 &&
                team_categories.map((item) => (
                    <>
                        {item?.teams?.length > 0 && (
                            <>
                                <Headline title={currentLocale == 'kh' ? item.name_kh : item.name} />
                                <MySlideCareer teams={item?.teams} />
                            </>
                        )}
                    </>
                ))}

            {contact_heading_1 && (
                <ContactSection bg="bg-true-primary-five" title={currentLocale == 'kh' ? contact_heading_1?.title_kh : contact_heading_1?.title} />
            )}

            <CareerList careers={careers} />
        </WestecLayout>
    );
};

export default Career;
