import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import { GoogleLogin } from 'react-google-login';

class GoogleSocialLogin extends Component {

    render() {
        return (
            <Auxiliary>
                <GoogleLogin
                    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />,

<FacebookLogin
                    appId="1211902682346344"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={componentClicked}
                    callback={responseFacebook} />
            </Auxiliary>
        );
    }

}

export default GoogleSocialLogin;