import React, {Component} from 'react';
import Auxiliary  from '../../hoc/Auxiliary/Auxiliary';
import Select from '../Select/Select';
import monthsData from '../../../data/months.json';

class DropDownDate extends Component{

    constructor(props){
        super(props);

        const latestYear = new Date(). getFullYear();
        const minYear = 1900;
        let allYears = [];
        let year =null;
        allYears.push({'label': 'Year'});
        for(year = latestYear; year>= minYear; year--){
                allYears.push({'label': year});
        }

        const maxDays = 31;
        const minDays = 1;
        let allDays = [];
        let day = null;
        allDays.push({'label': 'Day'});
        for(day = minDays; day<maxDays; day++ ){
            allDays.push({'label': day});
    }
    

    this.state = {
        content:{
            months: monthsData,
            days: allDays,
            years: allYears,
    },

    defaultValues:{
            month: 'Month',
            day: 'Day',
            year: 'Year'
    }
    } 
    }
    
    componentDidMount(){
        console.log('This is from componentDidMount');
        console.log(this.state.content.years);
    }

    //function for generating days
 
    render(){
     return(
         <Auxiliary>
             <Select {...this.state.content.months}/>
             <Select {...this.state.content.days} />
             <Select {...this.state.content.years} />
         </Auxiliary>
     );
 }
}

export default DropDownDate;