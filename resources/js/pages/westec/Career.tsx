import MySlideCareer from '@/components/my-slide-career';
import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';
import CareerList from './components/career-list';
import { ContactSection } from './components/contact-section';
import Headline from './components/headline';
import WestecLayout from './layout/layout';
const Career = () => {
    const { team_categories, careers, contact_heading_1 } = usePage().props;
    const { t, currentLocale } = useTranslation();

    return (
        <WestecLayout>
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
