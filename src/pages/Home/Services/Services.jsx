import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/services")
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div className='my-4'>
            <div className='text-center'>
                <h3 className="text-3xl text-orange-500 font-bold">Our Services</h3>
                <h2 className="text-6xl">Our Service Area</h2>
                <p>The majority have suffered alteration in some form, by injected
                   humor, or randomised <br /> words which do not look even slightly believable
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
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