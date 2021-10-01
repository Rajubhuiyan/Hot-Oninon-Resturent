import React from 'react';
import './Footer.css';
import logo from '../../images/header/logo.png'
const Footer = () => {
    return (
        <div className="mt-5 footer-side">
            <div className="row container">
                <div className="col-md-6 logo-side">
                    <img className="img-fluid" src={logo} alt="" />
                </div>
                <div className="col-md-4 table-data mt-5">
                    <table>
                        <thead>
                            <tr>
                                <th>About Online Food</th>
                            </tr>
                            <tr>
                                <th>Read Our Blog</th>
                            </tr>
                            <tr>
                                <th>Sign Up To Deliver</th>
                                <th>View All Cities</th>
                            </tr>
                            <tr>
                                <th>Add Your Resturant</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className="col-md-2 mt-5">
                    <table>
                        <thead>
                            <tr>
                                <th>Get Help</th>
                            </tr>
                            <tr>
                                <th>Read FAQs</th>
                            </tr>
                            <tr>
                                <th>View All Cities</th>
                            </tr>
                            <tr>
                                <th>Resturent Near Me</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
            <div className="container pb-4 mt-5">
                <p> <small className="copyright"> Copyright ©Raju Bhuiyan </small></p>
            </div>
        </div >
    );
};

export default Footer;