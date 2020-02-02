import React, { Component } from 'react';
import Auxiliary from '../hoc/Auxiliary/Auxiliary';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import Span from '../UI/Span/Span';
import { NavLink } from 'react-router-dom';
import Modal from '../UI/Modal/Modal';
import classes from './Login.module.css';
import Icon from '../UI/Icon/Icon';


class Login extends Component {
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
            },

            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    name: 'Password',
                    placeholder: 'Password',
                    iconType: 'Password'
                }
            },
        }
    }

    render() {

        //create an array from controls Object
        const inputElementsArray = [];
        for (let key in this.state.controls) {
            inputElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        let inputElements = inputElementsArray.map(formElement => (
            <Input key={formElement.id} {...formElement.config} />
        ));

        let form = (
            <Auxiliary>
                <Modal>
                    <div>
                        <Icon iconType="Close" />
                    </div>
                    <div>
                        <Button btnType="Facebook" iconType="Facebook">Log in with Facebook</Button>
                        <Button btnType="Google" iconType="Google" >Log in with Google</Button>
                    </div>

                    <div>
                        <span>or</span>
                    </div>


                    <div>
                        {inputElements}
                    </div>


                    <div className={classes.Checkbox}>
                        <input type="checkbox" /><Span> RememberMe </Span>
                    </div>

                    <div className={classes.ForgotPass}>
                        <NavLink to="#" >Forgot password?</NavLink>
                    </div>



                    <div>
                        <Button btnType="Danger">Log in</Button>
                    </div>

                    <hr />
                    <div className={classes.SignUp}>
                        <Span>Don't have an account?</Span>
                        <NavLink to="#">Sign Up</NavLink>
                    </div>
                </Modal>
            </Auxiliary>
        );

        return (
            <Auxiliary>
                {form}
            </Auxiliary >
        );
    }

}

export default Login;