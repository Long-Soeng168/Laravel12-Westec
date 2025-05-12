import MySlideCareer from '@/components/my-slide-career';
import { usePage } from '@inertiajs/react';
import CareerList from './components/career-list';
import { ContactSection } from './components/contact-section';
import Headline from './components/headline';
import WestecLayout from './layout/layout';
const Career = () => {
    const { team_categories, careers } = usePage().props;

    return (
        <WestecLayout>
            {team_categories?.length > 0 &&
                team_categories.map((item) => (
                    <>
                        <Headline title="Employee Highlights" />
                        {item?.teams?.length > 0 && <MySlideCareer teams={item?.teams} />}
                    </>
                ))}

            <ContactSection />
            <CareerList careers={careers} />
        </WestecLayout>
    );
};

export default Career;
