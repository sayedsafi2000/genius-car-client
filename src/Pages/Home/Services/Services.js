import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services,setservices]=useState([]);
    useEffect(()=>{
        fetch("https://genius-car-server-psi-three.vercel.app/services")
        .then(res=>res.json())
        .then(data=>setservices(data))
    },[])
    return (
        <div>
            <div className='text-center mb-4'>
                <p className='text-2xl font-bold text-orange-600'>Services</p>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
                <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour,<br /> or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service =><ServiceCard 
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='w-full mx-auto text-center pt-12 pb-32'>
            <button className="btn btn-outline btn-warning ">More Services</button>
            </div>
        </div>
    );
};

export default Services;