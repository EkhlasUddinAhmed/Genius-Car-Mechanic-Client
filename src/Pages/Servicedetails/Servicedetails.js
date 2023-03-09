import React from 'react';
import { useParams } from 'react-router-dom';
import useCarservicebytitle from '../../hooks/useCarservicebytitle';
import Spinner from '../Spinner/Spinner';

const Servicedetails = () => {
    const {serviceTitle}=useParams();
    const {isLoading,isError,error,data}=useCarservicebytitle(serviceTitle);

     if(isLoading){
        return <Spinner></Spinner>
     }

     console.log("Service by Title  got is:",data?.data[0]);
         return (
        <div>
            <h1>This is Service detalis page:{serviceTitle}</h1>
            <div>
                <img src={data?.data[0]?.img}></img>
            </div>
        </div>
    );
};

export default Servicedetails;