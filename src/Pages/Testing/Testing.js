
import React, { useContext } from 'react';

import Spinner from '../Spinner/Spinner';
import Servicecard from '../Servicecard/Servicecard'
import useCarservice from '../../hooks/useCarservice';
import { Link } from 'react-router-dom';

const Testing = () => {
    

const onSuccess=(data)=>{
   console.log("Performing SideEffect after fetching Data:",data.data);
}
const onError=(error)=>{
    console.log("Performing SideEffect after facing error:",error.message,error.code);
 }
    const {isLoading,isFetching, isError,error, data,refetch }=useCarservice(onSuccess,onError);
    console.log(isLoading,isFetching);

    if(isLoading || isFetching){
        return <Spinner></Spinner>
    }
    
    // console.log("From RQ:data is:",data?.data);

    

if(isError){
    return <h2>{error.message}</h2>
}


    return (
        <div>
             <button onClick={refetch}>Fetching data</button>
            <h1>Number os Services are:{data?.data?.length}</h1>
            <div className="my-5 grid-design">
            {/* {
                data?.data.map(service=><Servicecard
                key={service._id}
                service={service}
                ></Servicecard>)
            }    */}

            {
               data?.map(n=><div>
                
                <Link to={`/servicedetails/${n}`}><h2 key={n}>{n}</h2></Link>
               </div>)
            }
            </div>

            
        </div>
    );
};

export default Testing;