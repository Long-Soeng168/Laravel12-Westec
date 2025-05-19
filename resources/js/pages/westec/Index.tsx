import { MyPartner } from '@/components/my-partner';
import MySlide from '@/components/my-slide';
import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';
import BlogsList from './components/blogs-list';
import { ContactSection } from './components/contact-section';
import EventList from './components/event-list';
import { FeatureSection } from './components/feature-section';
import Headline from './components/headline';
import MyBoosters from './components/my-boosters';
import WestecLayout from './layout/layout';
const Index = () => {
    const {
        banners,
        security_detail,
        smart_home_detail,
        commercial_detail,
        it_solution_detail,
        partners_detail,
        clients_detail,
        news_detail,
        events_detail,
        solution_boosters,
        contact_heading_1,
        contact_heading_2,
    } = usePage().props;
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

            <MyBoosters solution_boosters={solution_boosters} />
            <div id="partners"></div>
            <div className="mt-16">
                <Headline title={t('Our Partners')} />
                <MyPartner items={partners_detail} />
            </div>

            {/* <MyFeature /> */}
            <div className="mt-16">
                <div className="scroll-mt-[100px]" id="newsId">
                    <BlogsList items={news_detail} />
                </div>
                <div className="scroll-mt-[100px]" id="eventsId">
                    <EventList items={events_detail} />
                </div>
            </div>

            <div className="mb-16" id="clients">
                <Headline title={t('Our Clientele')} />
                <MyPartner items={clients_detail} />
            </div>
        </WestecLayout>
    );
};

export default Index;
