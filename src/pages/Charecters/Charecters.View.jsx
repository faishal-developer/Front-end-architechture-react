import React, { useEffect, useState } from 'react';
import Card from '../../Components/CardComponent/Card';
import css from '../../scss/CommonClass';
import "./charecters.scss"
import siteConfig from "../../Config/siteConfig"
import useCharecters from './Charecters.Presenter';
import { useNavigate } from 'react-router-dom';
import { path } from '../../routes/path';

const Charecters = () => {
    const [Charecters,setCharecters] = useState([])
    const {getCharecters} = useCharecters();
    const navigate = useNavigate();

    useEffect(()=>{
        getCharecters(setCharecters);
    },[])
    return (
        <div className={`charecters ${css.pb5}`}>
            <figure className='figure'>
                <img src={siteConfig.company_logo1} alt="logo"/>
            </figure>
            <div className={`main ${css.container} `}>
                <h3 className='header'>The Cast</h3>
                <div className={`${css.row} ${css.g3} ${css.row_c2} ${css.row_c_m3} ${css.row_c_l5}`}>
                    {Charecters.length ? (
                        Charecters.map((v,i)=>(
                            <div className={`c_pointer ${css.col}`} onClick={()=>{navigate(path.ch_details+`?id=${v.id}`)}}>
                                <Card max_width="m_w_150" key={i}>
                                    <figure className='p_10 p_b_0'>
                                        <img className='m_w_100' src={v.image} alt={v.name} />
                                    </figure>
                                    <p className='p_0 m_0 p_l_10 white'>
                                        {v.name}
                                    </p>
                                </Card>
                            </div>
                        )))
                    : (<h6 className={`${css.danger} ${css.center}`}>NO Data AVAILABLE</h6>) }
                </div>
            </div>
        </div>
    );
};

export default Charecters;