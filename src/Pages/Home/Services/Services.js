import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="my-5 text-4xl font-bold">Our Service Area</h2>
                <p className='w-1/2 m-auto'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className=''>
                <div className="my-12 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        services.map(service => <ServicesCard
                            key={service._id}
                            service = {service}
                        ></ServicesCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;