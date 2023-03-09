import React, { useEffect, useState } from 'react';
import Servicecard from '../../Servicecard/Servicecard';
import './Services.css';
const Services = () => {
  const [services,setServices]=useState([]);
  useEffect(()=>{
    fetch('https://genius-car-server-xi-rust.vercel.app/car/service/all')
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        setServices(data);

    })
  },[]);


    return (
        <div className="my-5">
            <h2 className="service-Design mt-5 text-center">Service</h2>
            <p className="serviceArea text-center">Our Service Area</p>
            <div className="my-5">
                
            </div>
            <p className='text-center des-design'>
            the majority have suffered alteration in some form, by injected humour, or randomised <br></br>words which don't look even slightly believable. 
            </p>
            <div className="my-5 grid-design">
                {
                    services.map(service=><Servicecard 
                     key={service.service_id}
                     service={service}
                    ></Servicecard>)
                }
            </div>
        </div>
    );
};

export default Services;