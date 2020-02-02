import React, { Component } from 'react';
import Input from '../UI/Input/Input';
import Auxiliary from '../hoc/Auxiliary/Auxiliary';
import Modal from '../UI/Modal/Modal';
import Button from '../UI/Button/Button';
import { NavLink } from 'react-router-dom';
import classes from './Register.module.css';

class Register extends Component {


    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'Email',
                    name: 'Email',
                    placeholder: 'Email',
                    iconType: 'Email'
                }

            },

            firstName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    name: 'First Name',
                    placeholder: 'First Name',
                    iconType: 'User'
                }
            },

            lastName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    name: 'Last Name',
                    placeholder: 'Last Name',
                    iconType: 'User'
                }
            },

            createPassword: {
                elementType: 'input',
                elementConfig: {
                    type: 'Password',
                    name: 'Password',
                    placeholder: 'Create Password',
                    iconType: 'Password'
                }
            },

            recheckPassword: {
                elementType: 'input',
                elementConfig: {
                    type: 'Password',
                    name: 'Password',
                    placeholder: 'Re-enter password',
                    iconType: 'Password'
                }
            }
        }
    }

    //display input elements, convert object to array, map array elements
    //convert object to array
    render() {

        const registerArray = [];
        for (let key in this.state.controls) {
            registerArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        let registerElements = registerArray.map(formElement => (
            <Input key={formElement.id} {...formElement.config} />
        ));


        return (
            <Modal>
                <Auxiliary>
                    {registerElements}
                    <Button btnType="Danger">Sign Up</Button>
                </Auxiliary>

                <div>
                    <hr/>
                </div>

                <div>
                    <span className = {classes.fontfamily}>Already had an account?</span>
                    <NavLink to="#">Sign In</NavLink>
                </div>
             </Modal>
        );
    }
}

export default Register;