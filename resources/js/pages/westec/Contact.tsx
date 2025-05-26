import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';
import { ContactSection } from './components/contact-section';
import GetSupportFrom from './components/GetSupportFrom';
import Headline from './components/headline';
import ProjectInquiryForm from './components/ProjectInquiryForm';
import WestecLayout from './layout/layout';

const Contact = () => {
    const { application_info, contact_heading_1, banners } = usePage().props;
    const { t, currentLocale } = useTranslation();

    return (
        <WestecLayout>
            <section>
                <img src={`/assets/images/banners/${banners?.image}`} alt="" />
            </section>
            <Headline title={t('Project Inquiry?')} />
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
