import React from 'react';

import './Footer.css'

import Contato from './Contato';
import Stack from './Stack';

const Footer = () => {

    return (
        <div>
            <div className="shadow-footer"></div>
            <div className="footer container-fluid">

                <div className="row footer-content">
                    <div className="offset-md-2 col-md-4">
                        <Contato />
                    </div>
                    <div className="col-md-4">
                        <Stack />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;