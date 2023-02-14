import { Endpoints } from "../../ApiServices/apiEndPoints";
import { getCall } from "../../ApiServices/ApiServices";

const useHomeLogic = () => {
    const initialCall=({setData,setEpisodes,setLocations})=>{
        getCall(
            Endpoints.charecter,
            (newData) => setData(newData.results),
            (er) => console.log(er)
        );
        getCall(
            Endpoints.episode,
            (newData) => setEpisodes(newData.results),
            (er) => console.log(er)
        );
        getCall(
            Endpoints.location,
            (newData) => setLocations(newData.results),
            (er) => console.log(er)
        );
    }

    const setNewOrder = (data, setData, order) => {
        if(data.length<=2)return;
        let newData = [];
        if (order === data.length - 1) newData.push(data[order]);
        data.forEach((e, i) => {
            if (i !== order) {
                newData.push(e);
            }
        });
        if (order === 0) newData.push(data[order]);
        setData(newData);
    }

    return {
        initialCall,
        setNewOrder
    }
};

export default useHomeLogic;