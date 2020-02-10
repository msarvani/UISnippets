import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component{
    render(){
        return(
            <Auxiliary className = {classes.Centercontainer}>

                <Backdrop/>
                    <div className={classes.Modal}>
                        {this.props.children}
                        
                    </div>
                
            </Auxiliary>
        );
    }
}

export default Modal;