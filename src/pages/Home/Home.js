import React from 'react';
import {Link} from 'react-router-dom';
import { pagetitle } from '../../helper/CommonFunction';
const Home = (props) => {
    pagetitle(props.pageTitle);

    return (
        <div>
            <Link to="/about">this is home</Link>
        </div>
    );
};

export default Home;