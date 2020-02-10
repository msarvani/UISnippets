import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import classes from './Select.module.css';

const Select =  (props) => {

   const propsArray = Object.values(props);
    const items = propsArray.map((item) =>
                <option value={item.Value}>{item.label}</option>
        )


    return(
        <Auxiliary>
            <select defaultValue={props.default} key= {props.id} className={classes.Select}>
                {items}
            </select>
    </Auxiliary>
    );
}
export default Select;