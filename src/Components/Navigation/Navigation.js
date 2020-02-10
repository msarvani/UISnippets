import React from 'react';
import {NavLink} from 'react-router-dom';
import Auxiliary from '../hoc/Auxiliary/Auxiliary';

const Navigation = (props) => {
    return(
        <Auxiliary>
                <NavLink to={props.link} exact={props.exact}>{props.children}</NavLink>
        </Auxiliary>
    );
}

export default Navigation;