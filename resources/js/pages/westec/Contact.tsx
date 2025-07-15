import useTranslation from '@/hooks/use-translation';
import { Head, usePage } from '@inertiajs/react';
import { ContactSection } from './components/contact-section';
import GetSupportFrom from './components/GetSupportFrom';
import Headline from './components/headline';
import ProjectInquiryForm from './components/ProjectInquiryForm';
import WestecLayout from './layout/layout';

const Contact = () => {
    const { application_info, contact_heading_1, project_inquiry_heading_1, banners } = usePage().props;
    const { t, currentLocale } = useTranslation();

    const siteName = '';

    // Use project inquiry heading if available, else fallback meta info
    const metaTitle = project_inquiry_heading_1
        ? (currentLocale === 'kh' ? project_inquiry_heading_1.title_kh : project_inquiry_heading_1.title) + ` | ${siteName}`
        : `Contact Us | ${siteName}`;

    const metaDescription = project_inquiry_heading_1
        ? (currentLocale === 'kh' ? project_inquiry_heading_1.short_description_kh : project_inquiry_heading_1.short_description) ||
          `Get in touch with Westec Cambodia for your project inquiries and support.`
        : `Get in touch with Westec Cambodia for your project inquiries and support.`;

    // OG image: use first banner image if available, else default
    const ogImage = banners?.image ? `/assets/images/banners/${banners.image}` : '/images/default-og-image.jpg';

    const siteUrl = 'https://westec.com/contact';

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
            <section>
                <img src={`/assets/images/banners/${banners?.image}`} alt="" />
            </section>
            {project_inquiry_heading_1 && (
                <Headline
                    className="bg-true-primary text-white"
                    title={currentLocale == 'kh' ? project_inquiry_heading_1?.title_kh : project_inquiry_heading_1?.title}
                    subTitle={currentLocale == 'kh' ? project_inquiry_heading_1?.short_description_kh : project_inquiry_heading_1?.short_description}
                />
            )}

            <ProjectInquiryForm />
            {contact_heading_1 && (
                <ContactSection
                    showButton={false}
                    bg="bg-true-primary-four"
                    title={currentLocale == 'kh' ? contact_heading_1?.title_kh : contact_heading_1?.title}
                />
            )}
            <GetSupportFrom />

            {application_info.google_map && (
                <div className="flex items-center justify-center" id="contact-google-map">
                    <div className="w-full rounded-none">
                        <iframe
                            src={application_info.google_map}
                            className="h-[500px] w-full rounded-none"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            )}
        </WestecLayout>
    );
};

export default Contact;
