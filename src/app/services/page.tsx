import ServiceHeader from '../components/ServiceHeader';
import ServiceDetails from '../components/ServiceDetails';
import ServiceComparison from '../components/ServiceComparison';

export default function ServicesPage() {
    return (
        <>
            <ServiceHeader />
            <ServiceDetails />
            <ServiceComparison />
        </>
    );
}