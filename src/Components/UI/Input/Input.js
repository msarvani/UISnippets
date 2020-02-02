import React from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import classes from './Input.module.css';
import Icon from '../Icon/Icon';

const Input = (props) => {

    let inputElement = null;
    const inputClasses = [classes.InputElement];

    //Here element type is the variable that is assigned in the form they are using
    switch(props.elementType){
        case 'input':
            if(props.elementConfig.iconType){
                inputElement= (
                    <div >
                            <input className={inputClasses.join(' ')} {...props.elementConfig}></input>
                            <Icon iconType={props.elementConfig.iconType}/>
                    </div>
                    );

            }else{
                inputElement= (
                    <div >
                            <input className={inputClasses.join(' ')} {...props.elementConfig}></input>
                    </div>
                    );
            }     
        break;

        case 'select':
            inputElement = (
                <div>
                    
                </div>
            );
        break;
        
        default:
            return 'some default string';
    }

    return(
        <Auxiliary>
            {inputElement}
            <label>{props.label}</label>
        </Auxiliary>
    );
}

export default Input;