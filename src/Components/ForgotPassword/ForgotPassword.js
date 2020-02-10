import React, { Component } from 'react';
import Input from '../UI/Input/Input';
import Auxiliary from '../hoc/Auxiliary/Auxiliary';
import Modal from '../UI/Modal/Modal';
import Icon from '../UI/Icon/Icon';
import Button from '../UI/Button/Button';
import classes from './ForgotPassword.module.css';
import {Redirect} from 'react-router-dom';

class ForgotPassword extends Component {

    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    name: 'email',
                    placeholder: 'Email',
                    iconType: 'Email'
                }
            }
        },

        redirect: false
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirectToLogin = () => {
        if(this.state.redirect){
            return <Redirect to= '/login'/>
        }
    }

    render() {

        const passwordResetInputElementsArray = [];
        for (let key in this.state.controls) {
            passwordResetInputElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }


        let passwordResetInputElements = passwordResetInputElementsArray.map(formElement => (
            <Input key={formElement.id} {...formElement.config} />
        ));

       

        return (
            <Modal>

                <div>
                    <Icon iconType="Close" />
                </div>
                <Auxiliary>
                    <h1>Reset Password</h1>
                    <p>Enter the Email address associated to your account and we will send a link to reset the password</p>
                    {passwordResetInputElements}
                </Auxiliary>

                <div>
                    {this.renderRedirectToLogin()}
                <Button btnType="SmallButton" operation={this.setRedirect}>Back to LogIn</Button>
                <Button btnType="SmallButton" operation={this.reDirectToPage}>Send reset Link</Button>
                </div>

                {/* <div>
                    {this.renderRedirect()}
                    <button onClick={this.setRedirect}>Back To Login</button>
                </div> */}
            </Modal>
        );
    }
}

export default ForgotPassword;