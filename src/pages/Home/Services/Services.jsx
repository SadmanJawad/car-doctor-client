import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([]);
    const [ascending, setAscending] = useState(true);
    useEffect(() => {
        fetch(`http://localhost:5000/services?sort=${ascending ? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [ascending])

    return (
        <div className="mt-4">
            <div className="text-center">
                <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
                <h2 className="text-5xl">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
                <button
                className="btn btn-primary mt-4"
                onClick={() => setAscending(!ascending)}
                >{ascending ? 'Price High to Low' : 'Price Low to High'}</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;