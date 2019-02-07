import React, { Component } from 'react';
import Signin from './login/login';
import Signup from './signup/signup';
import MainLogo from '../../assets/images/main-logo.png';

export default class authenication extends Component {
    render() {
        return (
            <div className="authenication-section">
                <div className="authenication-content d-flex flex-column flex-md-row">
                    <div className="auth-leftsection d-none d-md-flex align-items-center justify-content-center flex-column">
                        <span className="text-center">MassHealth New MMIS Managed Care Daily Test Data</span>
                        <a href='javascript:void(0);'><img src={MainLogo} alt="mass" className="logo-img" /></a>
                    </div>
                    <div className="auth-rightsection d-flex align-items-center">
                        <section className="auth-content-wrapper">
                            {/* <Signin/> */}
                            <Signup/>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}
