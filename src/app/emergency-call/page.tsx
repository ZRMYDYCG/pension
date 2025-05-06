import ServiceHeader from '../components/ServiceHeader';
import EmergencyCall from '../components/EmergencyCall';
import EmergencyProcess from '../components/EmergencyProcess';
// import EmergencyFeedback from '../../components/EmergencyFeedback';

export default function EmergencyCallPage() {
    return (
        <>
            <ServiceHeader />
            <EmergencyCall />
            <EmergencyProcess />
            {/*<EmergencyFeedback />*/}
        </>
    );
}