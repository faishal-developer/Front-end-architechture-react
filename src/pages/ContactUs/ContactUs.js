import React from 'react';
import { Link } from 'react-router-dom';
import { pagetitle } from '../../helper/CommonFunction';

const ContactUs = (props) => {
    pagetitle(props.pageTitle)
    
    return (
        <div>
            <Link to="/">that is contact us page</Link>
        </div>
    );
};

export default ContactUs;