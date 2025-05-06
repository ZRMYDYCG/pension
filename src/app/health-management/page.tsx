import ServiceHeader from '../components/ServiceHeader';
import AppDownload from '../components/AppDownload';
import FeatureDemo from '../components/FeatureDemo';
import UserStories from '../components/UserStories';

export default function HealthManagementPage() {
    return (
        <>
            <ServiceHeader />
            {/*<AppDownload />*/}
            <FeatureDemo />
            <UserStories />
        </>
    );
}