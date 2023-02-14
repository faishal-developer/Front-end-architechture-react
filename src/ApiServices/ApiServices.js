import { Endpoints } from "./apiEndPoints"

export const getCall=(endpoint,thenCB,catchCB)=>{
    fetch(Endpoints.base+endpoint)
    .then(res=>res.json())
    .then((data)=>thenCB(data))
    .catch((er)=>catchCB(er))
}