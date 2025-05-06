import ServiceHeader from '../components/ServiceHeader';
import SafetyDesign from '../components/SafetyDesign';
import SafetyFlow from '../components/SafetyFlow';
import SafetyPartners from '../components/SafetyPartners';

export default function SafetyManagementPage() {
    return (
        <>
            <ServiceHeader />
            <SafetyDesign />
            <SafetyFlow />
            <SafetyPartners />
        </>
    );
}