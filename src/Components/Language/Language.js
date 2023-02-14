import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {i18nextLng} from "../../Config/sessionKeys"
import langlist from "../../Language/Langlist.json"
const Language = () => {
    const {i18n} = useTranslation();
    const [selected,setSelected] = useState(localStorage.getItem(i18nextLng))
    
    const changeLanguage=(lng)=>{
        i18n.changeLanguage(lng);
        setSelected(lng);
    }
    return (
        <div>
           {
            langlist.map((item,index)=>(
                <li key={index} onClick={()=>changeLanguage(item.code)}>
                    {item.name}
                </li>
            ))
           } 
        </div>
    );
};

export default Language;