import React from 'react';
import classes from './Button.module.css';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Icon from '../Icon/Icon';



const Button = (props) => {
    let createButton = null;
    if(props.iconType){
        createButton = (
            <Auxiliary>
            <button className = {[classes.Button, classes[props.btnType]].join(' ')}>
                {props.children}
            </button>
            <Icon iconType={props.iconType}/>
            </Auxiliary>
        )       
    }else 
    {
        createButton = (
            <button className = {[classes.Button, classes[props.btnType]].join(' ')} onClick={props.operation}>
                {props.children}
            </button>
        );
    }
    return(
        <Auxiliary>
            {createButton}
        </Auxiliary>
    );
}

export default Button;