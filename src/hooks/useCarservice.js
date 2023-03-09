import axios from 'axios';
import {  useQuery } from 'react-query';

const fetchAllCarServices=()=>{
    return axios.get('https://genius-car-server-xi-rust.vercel.app/car/service/all');
}
export const useCarservice = (onSuccess,onError,) => {
    return useQuery('All-Services',
    fetchAllCarServices,
    {
        enabled:false,
        onSuccess,
        onError,
        select:(data)=>{
            const onlyNames=data.data.map(name=>name.title)
            return onlyNames;

            }
    }
    
    ) 
};

export default useCarservice;