import axios from 'axios';
import {  useQuery } from 'react-query';

const fetchCarServicesbytitle=({queryKey})=>{
    
    const serviceTitle=queryKey[1];
    return axios.get(`https://genius-car-server-xi-rust.vercel.app/car/servicetitle/${serviceTitle}`);
}


const useCarservicebytitle = (serviceTitle) => {
     return useQuery(['service-title',serviceTitle],fetchCarServicesbytitle)
};

export default useCarservicebytitle;