import { toast } from "react-toastify";
import { Endpoints } from "../../ApiServices/apiEndPoints";
import { getCall } from "../../ApiServices/ApiServices";

const useCharecters = () => {
   const getCharecters=(setCharecters)=>{
       getCall(
           Endpoints.charecter,
           (newData) => setCharecters(newData.results),
           (er) => toast.error("Something went wrong")
       )
   }

   return {
        getCharecters,
   }
};

export default useCharecters;