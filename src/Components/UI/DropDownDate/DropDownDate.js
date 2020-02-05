import React, {Component} from 'react';
import Auxiliary  from '../../hoc/Auxiliary/Auxiliary';
import Select from '../Select/Select';

class DropDownDate extends Component{

    state = {
       months: [
        {label : "January", Value: 1},
        {label : "Febrauary", Value: 2},
        {label : "March", Value: 3},
        {label : "April", Value: 4},
        {label : "May", Value: 5},
        {label : "June", Value: 6},
        {label : "July", Value: 7},
        {label : "August", Value: 8},
        {label : "September", Value: 9},
        {label : "October", Value: 10},
        {label : "November", Value: 11},
        {label : "December", Value: 12}
       ]
    } 
        
    render(){
     return(
         <Auxiliary>
             <Select {...this.state.months} />
         </Auxiliary>
     );
 }
}

export default DropDownDate;