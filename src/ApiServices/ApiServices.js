import { Endpoints } from "./apiEndPoints"

export const getDELETECall = (endpoint, { method, thenCB, catchCB, finalyCB })=>{
    fetch(Endpoints.base+endpoint,{method})
    .then(res=>res.json())
    .then((data)=>thenCB(data))
    .catch((er)=>catchCB(er))
    .finally(()=>finalyCB())
}

export const postPutCall = (endpoint, { body, method, thenCB, catchCB, finalyCB })=>{
    fetch(Endpoints.base+endpoint,{
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(res=>res.json())
    .then((data)=>thenCB(data))
    .catch((er)=>catchCB(er))
    .finally(()=>finalyCB())
}

