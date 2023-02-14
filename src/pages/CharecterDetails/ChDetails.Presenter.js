import React from 'react';
import { Endpoints } from '../../ApiServices/apiEndPoints';
import { getCall } from '../../ApiServices/ApiServices';
import { toast } from "react-toastify";


const useChDetails = () => {
    const initialCall=(id,setData)=>{
        getCall(
            Endpoints.SingleCh(id),
            (newData) => setData(newData),
            (er) => console.log(er)
        )
    }
    const fetchEpisodes=(setData)=>{
        getCall(
            Endpoints.episode,
            (newData)=>setData(newData.results),
            (er)=>toast.error("Something went wrong")
        )
    }

    return {
        initialCall,
        fetchEpisodes
    }
};

export default useChDetails;