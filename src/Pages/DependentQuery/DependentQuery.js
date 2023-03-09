import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Spinner/Spinner';

const usersAPIcalling=(email)=>{
    return axios.get(`https://genius-car-server-xi-rust.vercel.app/users/user/?email=${email}`)
        
}
const channelAPIcalling=(channelId)=>{
    return axios.get(`https://genius-car-server-xi-rust.vercel.app/channel/course/${channelId}`)
        
}

const DependentQuery = ({email}) => {

    const {isLoading,data:user}=useQuery(['User',"email"],()=>usersAPIcalling(email),{
        refetchInterval:1000,
        refetchIntervalInBackground:true
    })
    
     const channelId=user?.data[0].channelId;

    const {isLoading:channelIsloading,data:channel}=useQuery(["Channel",channelId],()=>channelAPIcalling(channelId),{
        enabled:!!channelId,
        refetchOnMount:true,
        refetchOnWindowFocus:true
    })

    if(isLoading || channelIsloading){
        return <Spinner></Spinner>
    
    }
    
      console.log("Channel Id is:",user?.data[0].channelId);

      const courses=channel?.data[0].course;
      console.log("Channel Course is:",courses);
      
return (
        <div>
            {
                courses.map(course=><h1 key={
                    course._id
                }>{course}</h1>)
            }
        </div>
    );
};

export default DependentQuery;