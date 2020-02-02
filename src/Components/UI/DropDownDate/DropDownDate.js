import React, {Component} from 'react';
import {YearPicker, DayPicker, MonthPicker} from 'react-dropdown-date';
import classes from './DropDownDate.module.css';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';

class DropDownDate extends Component{

    state = {
        year: null,
        month: null,
        day: null
    }
 render(){
     return(
        <Auxiliary>
         <div className = {classes.YearPicker}>
             <YearPicker defaultValue={'Select Year'} 
             value={this.state.year}
             onChange = {(year)=>{
                 this.setState({year});
                 console.log(year);
             }}

             id = {'year'} name={'year'} classes = {'classes'} optionClasses = {'option classes'}
             
             />  
        </div>
             
        <div>
            <MonthPicker
                    defaultValue={'Select Month'}
                    // to get months as numbers
                    numeric
                    // default is full name
                    short
                    // default is Titlecase
                    caps
                    // mandatory if end={} is given in YearPicker
                    endYearGiven
                    // mandatory
                    year={this.state.year}
                    // default is false
                    required={true}
                    // default is false
                    disabled={true}
                    // mandatory
                    value={this.state.month}
                    // mandatory
                    className= {classes.MonthPicker}
                    value={this.state.month}
                    onChange={(month) => {
                        this.setState({ month });
                        console.log(month);
                    }}
                    id={'month'}
                    name={'month'}
                    classes={'classes'}

                    
                    optionClasses={'option classes'}
                />
                </div>

                <div>
                <DayPicker
                    defaultValue={'Select Day'}
                    // mandatory
                    year={this.state.year}
                    // mandatory
                    month={this.state.month}
                    // mandatory if end={} is given in YearPicker
                    endYearGiven
                    // default is false
                    required={true}
                    // default is false
                    disabled={true}
                    // mandatory
                    value={this.state.day}
                    // mandatory
                    onChange={(day) => {
                        this.setState({ day });
                        console.log(day);
                    }}
                    id={'day'}
                    name={'day'}
                    classes={'classes'}
                    optionClasses={'option classes'}
                />
            </div>
        </Auxiliary>
     );
 }
}

export default DropDownDate;