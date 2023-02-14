import React, { useEffect, useState } from 'react';
import { Endpoints } from '../../ApiServices/apiEndPoints';
import { getCall } from '../../ApiServices/ApiServices';
import siteConfig from "../../Config/siteConfig"
import useChDetails from './ChDetails.Presenter';
import vec1 from '../../assets/Rick&Morties/Vector.png'
import vec2 from '../../assets/Rick&Morties/AndroidVector.png'
import vec3 from '../../assets/Rick&Morties/diskVector.png'
import vec4 from '../../assets/Rick&Morties/EarthVector.png'
import vec5 from '../../assets/Rick&Morties/GenderVector.png'
import vec6 from '../../assets/Rick&Morties/PlayVector.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import css from '../../scss/CommonClass';
import './ChDetails.scss'


const ChDetails = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('id');
    const [Details,setDetails] = useState({});
    const [eisodes,setEpisodes] = useState([]);
    const { initialCall, fetchEpisodes } = useChDetails();

    useEffect(()=>{
        initialCall(myParam,setDetails)
        fetchEpisodes(setEpisodes);
    },[myParam])
    return (
        <div className={`details_cont `}>
            <figure className='logo'>
                <img src={siteConfig.company_logo1} alt="logo"/>
            </figure>
            <div className={`leftRight_cont ${css.container}`}>
                <div className='left_part'>
                    <div className='trans-name'>{Details.name}</div>
                    <div>
                        <h3 className='name'>{ Details.name }</h3>
                        <figure className='ch_image'>
                            <img className='m_w_100' src={Details.image} alt={Details.name}/>
                        </figure>
                    </div>
                </div>
                <div className='divider'></div>
                <div className='right_part'>
                    <div className='three_box'>
                        <div className='box'>
                            <figure>
                                <img src={vec1} alt="heart"/>
                            </figure>
                            <p className='status'>status</p>
                            <h6>{Details.status}</h6>
                        </div>
                        <div className='box'>
                            <figure>
                                <img src={vec2} alt="heart" />
                            </figure>
                            <p className='status'>Species</p>
                            <h6>{Details.species}</h6>
                        </div>
                        <div className='box'>
                            <figure>
                                <img src={vec5} alt="heart" />
                            </figure>
                            <p className='status'>Gender</p>
                            <h6>{Details.gender}</h6>
                        </div>
                    </div>
                    <div className='middle_box'>
                        <figure>
                            <img src={vec4} alt="heart" />
                        </figure> 
                        <p className='status'>Origin</p>
                        <div className='botton_div'>
                            <h6>{Details.origin?.name}</h6>
                            <FontAwesomeIcon icon={faUpRightFromSquare}/>
                        </div>
                    </div>
                    <div className='middle_box'>
                        <figure>
                            <img src={vec3} alt="heart" />
                        </figure>
                        <p className='status'>Last Known Location</p>
                        <div className='botton_div'>
                            <h6>{Details.location?.name}</h6>
                            <FontAwesomeIcon icon={faUpRightFromSquare} />
                        </div>
                    </div>
                    <div className='episode_cont'>
                        <div className='episode'>
                            <figure>
                                <img src={vec6} alt="heart" />
                            </figure>
                            <p className='status'>Episodes(S)</p>
                            <ul>
                                {
                                    eisodes.length && eisodes.map((el, i) => (
                                        <li>{el.name}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChDetails;