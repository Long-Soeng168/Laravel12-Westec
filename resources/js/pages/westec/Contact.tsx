import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';
import { ContactSection } from './components/contact-section';
import GetSupportFrom from './components/GetSupportFrom';
import Headline from './components/headline';
import ProjectInquiryForm from './components/ProjectInquiryForm';
import WestecLayout from './layout/layout';

const Contact = () => {
    const { application_info, contact_heading_1, project_inquiry_heading_1, banners } = usePage().props;
    const { t, currentLocale } = useTranslation();

    return (
        <WestecLayout>
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
