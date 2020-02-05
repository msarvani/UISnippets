import React from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import classes from './Select.module.css';



const Select = () => {
    //  let updatedProps = {...props};
    let value = null;
    let label = null;

    let items = [
        {label: 'sarvani'},
        {label: 'Rakesh'},
        {label: 'Rishik'},
        {label: 'shri'}
    ];


    const first = Object.values(items[0]);
    
    console.log(first);
    

    
    let itemsDisplay = null;

    
        // label= items[i].label; 
        // value= items[i].Value;

        const itemsAsLists =items.map((label) =>
        <li key={label.Value}>{label.name}</li>
    );
        

        

       
    
    return (

        <Auxiliary >
            {itemsAsLists}
        </Auxiliary>
    );
}


export default Select;