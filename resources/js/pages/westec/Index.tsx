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
const images = [
    {
        id: '1',
        image: '/assets/westec/images/banner1.jpeg',
        alt: 'image 1',
        short: 'Safety and security don’t just happen; <strong>CCTV</strong> is an investment in protection',
        bg: '#273896',
    },
    {
        id: '2',
        image: '/assets/westec/images/banner2.jpeg',
        alt: 'image 2',
        short: 'Your safety starts at the door—let an <strong>Access Control System</strong> decide who comes through.',
        bg: '#008080',
    },
    {
        id: '3',
        image: '/assets/westec/images/banner3.jpeg',
        alt: 'image 3',
        short: 'Peace of mind begins with protection—<strong>Intrusion Alarms</strong> ensure you sleep soundly.',
        bg: '#36454f',
    },
    {
        id: '4',
        image: '/assets/westec/images/banner4.jpeg',
        alt: 'image 4',
        short: 'The sun never send a bill—<strong>Smart Solar Energy System</strong> turn its power savings.',
        bg: '#008080',
    },
    {
        id: '5',
        image: '/assets/westec/images/banner2.jpeg',
        alt: 'image 5',
        short: 'A smart home isn"t just about convenice—it"s about control.Automate your world with a <strong>Smart Home Automation System</strong>.',
        bg: '#273896',
    },
];
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
    } = usePage().props;
    const { t, currentLocale } = useTranslation();
    return (
        <WestecLayout>
            <MySlide images={banners} />
            {security_detail?.title && <FeatureSection item={security_detail} defaultDropDown={true} />}
            {smart_home_detail?.title && <FeatureSection item={smart_home_detail} defaultDropDown={false} />}

            <ContactSection bg="bg-primary" title="Smarter solutions start here!
Find out what Westec can do for you." />

            {commercial_detail?.title && <FeatureSection item={commercial_detail} defaultDropDown={false} />}
            {it_solution_detail?.title && <FeatureSection item={it_solution_detail} defaultDropDown={false} />}

            <ContactSection title="Do you want a future-ready technology solutions 
that move your business forward?" />

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
