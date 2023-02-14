import React,{useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { pagetitle } from '../../helper/CommonFunction';
import {useTranslation} from "react-i18next"
import siteConfig from '../../Config/siteConfig';
import css from "../../scss/CommonClass";
import './Home.scss';
import headImg from "../../assets/Rick&Morties/Head.png"
import bubble from "../../assets/Rick&Morties/bubble.png"
import lightGun from "../../assets/Rick&Morties/LightGun.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faPlay } from '@fortawesome/free-solid-svg-icons';
import Card from '../../Components/CardComponent/Card';
import CustomCarousel from '../../Carousel/Carousel';
import useHomeLogic from './Home.Presenter';
import { path } from '../../routes/path';

const Home = (props) => {
    pagetitle(props.pageTitle);
    const { initialCall,setNewOrder } = useHomeLogic();
    const navigate = useNavigate()
    const {t} = useTranslation();
    const [data,setData] = useState([]);
    const [episodes,setEpisodes] = useState([]);
    const [locations,setLocations] = useState([]);

    useEffect(()=>{
        console.log("working from")
        initialCall({setData,setEpisodes,setLocations});
    },[])

    return (
        <div className={`home-container `}>
            <div className={`bg-img-container ${css.container}`}>
                <div className='home-banner'>
                    <div className={`${css.d_flex} ${css.JC_center} logo`}>
                        <img src={siteConfig.company_logo1} alt="Rick and morty Logo" />
                    </div>
                    <div className='banner-header'>
                        <div className='banner-middle'>
                            <div className='bubble-div'>
                                <img src={bubble} alt='bubble'/>
                            </div>
                            <div className='banner-main'>
                                <div className='banner-slogan'>
                                    <div className={`${css.d_flex}`}>
                                        <h1 className='i f_w_900 the light'>THE</h1>
                                        <figure>
                                            <img src={headImg} alt="rickie" />
                                        </figure>
                                        <h1 className='rick f_w_900'>RICK &</h1>
                                    </div>
                                    <div className='d-flex f_w_900'>
                                        <h1 className='morty f_w_900'>MORTY </h1>
                                        <h1 className='i ml_15 f_w_700 light'>WIKI</h1>
                                    </div>
                                </div>
                                <div className={`mt_10 ${css.mb5} d-flex a_i_center j_c_center`}>
                                    <div className='button mr_15 light'>
                                        <FontAwesomeIcon className='mr_5' icon={faPlay} />
                                        Watch Now
                                    </div>
                                    <p>Brilliant but boozy scientist Rick hijacks his fretful teenage grandson, Morty, for wild.</p>
                                </div>
                            </div>
                            <div className='lightgun-div'>
                                <img src={lightGun} alt="light gun"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-carousel'>
                    <div className='caro_top_header'>
                        <div className='d-flex card_top_arrow'>
                            <p className='white f_s_18'>Meet The Cast</p>
                            <FontAwesomeIcon className='icon' icon={faAngleLeft} onClick={() => setNewOrder(data, setData, 0)} />
                            <FontAwesomeIcon className='icon' icon={faAngleRight} onClick={() => setNewOrder(data, setData, data.length - 1)} />
                        </div>
                        <div className='view_btn'>
                            <button onClick={()=>navigate(path.ch_list)}>View All</button>
                        </div>
                    </div>
                    
                    {
                        data.length ? (
                            <CustomCarousel responsive={{sl:5,l:5.5,t:3,m:2.2}}>
                                {
                                    data.map((data, i) => (
                                    <div key={i} onClick={()=>navigate(path.ch_details+`?id=${data.id}`)}>
                                        <Card max_width="m_w_150">
                                            <figure className='p_10 p_b_0'>
                                                <img className='m_w_100' src={data.image} alt={data.name} />
                                            </figure>
                                            <p className='p_0 m_0 p_l_10 white'>
                                                {data.name}
                                            </p>
                                        </Card>
                                    </div>
                                    ))
                                }
                            </CustomCarousel>
                        ) : (
                            <h6 className={`${css.danger} ${css.center}`}>NO Data AVAILABLE</h6>
                        )
                    }
                </div>
                <div className={`card-carousel ${css.pt5}`}>
                    <p className='white f_s_18'>Episodes</p>
                    {
                        episodes.length ? (
                            <CustomCarousel responsive={{ sl: 4, l: 4.5, t: 2.1, m: 1.8}}>
                                {
                                    episodes.map((data, i) => (
                                        <Card max_width="m_w_220 episode_card">
                                            <p className='epi_sl'>
                                                {data.episode}
                                            </p>
                                            <p className='white epi_name'>
                                                {data.name}
                                            </p>
                                        </Card>
                                    ))
                                }
                            </CustomCarousel>
                        ):(
                                <h6 className={`${css.danger} ${css.center}`}>NO Data AVAILABLE</h6>
                        )
                    }
                </div>
                <div className={`card-carousel ${css.pt5}`}>
                    <p className='white f_s_18'>Locations</p>
                    {
                        episodes.length ? (
                            <CustomCarousel responsive={{ sl: 4, l: 4.5, t: 2.2, m: 1.8 }}>
                                {
                                    locations.map((data, i) => (
                                        <Card max_width="m_w_220 episode_card">
                                            <p className='epi_sl'>
                                                #{data.id}
                                            </p>
                                            <p className='white epi_name'>
                                                {data.name}
                                            </p>
                                        </Card>
                                    ))
                                }
                            </CustomCarousel>
                        ):(
                                <h6 className={`${css.danger} ${css.center}`}>NO Data AVAILABLE</h6>
                        )
                    }
                </div>
            {/* <p>{t('Dashboard')}</p> */}
            </div>
        </div>
    );
};

export default Home;