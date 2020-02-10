import React, { Component } from 'react';
import Auxiliary from '../hoc/Auxiliary/Auxiliary';
import logo from './logo.png';
import classes from './Footer.module.css';
import Icon from '../UI/Icon/Icon';

class Footer extends Component {
    render() {
        return (
            <Auxiliary>
                <span>data needs to be placed</span>
                <hr />

                <div>
                    <img className={classes.Image} src={logo} />
                </div>

                <div>
                    <div>
                        <Icon iconType="copyright" />
                    </div>


                    <div>
                        <div>
                            <span>2020 MyApp, Inc. All rights reserved.</span>
                        </div>

                        <div>
                            <a href="/termsofservice">Terms</a>
                            <span>.</span>
                            <a href="/privacypolicy">Privacy</a>
                            <span>.</span>
                            <a href="#">Site Map</a>
                            <span>.</span>
                        </div>
                    </div>
                </div>
            
                <div>
                    <Icon iconType="FacebookSocial"/>
                    <Icon iconType="Instagram"/>
                    <Icon iconType="Twitter"/>
                </div>
            
            </Auxiliary>
        );
    }
}

export default Footer;