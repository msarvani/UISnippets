import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaGoogle, FaFacebookF, FaLock, FaUserAlt } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { MdLocalPhone, MdCopyright } from 'react-icons/md';
import { TiSocialInstagram, TiSocialTwitter, TiSocialFacebook } from "react-icons/ti";
import classes from './Icon.module.css';

const Icon = (props) =>{
    let icon = null;
    let iconClasses = [classes.Icon, classes[props.iconType]].join(' ');

switch(props.iconType){
    case 'Email': 
            icon = <MdEmail className = {iconClasses}/>
    break;

    case 'Password': 
            icon = <FaLock className = {iconClasses}/>
    break;

    case 'Google':
            icon = <FaGoogle className = {iconClasses}/>
    break;

    case 'Facebook':
            icon = <FaFacebookF className = {iconClasses}/>
    break;

    case 'FacebookSocial':
            icon = <TiSocialFacebook className = {iconClasses}/>
    break;

    case 'Instagram':
            icon = <TiSocialInstagram className = {iconClasses}/>
    break;

    case 'Twitter':
            icon = <TiSocialTwitter className = {iconClasses}/>
    break;

    case 'Close':
            icon = <IoIosCloseCircle className = {iconClasses}/>
    break;

    case 'User':
            icon = <FaUserAlt className = {iconClasses}/>
    break;

    case 'Phone':
        icon = <MdLocalPhone className = {iconClasses}/>
        break;

    case 'copyright' :
        icon = <MdCopyright className = {iconClasses}/>
        break; 
    
    default: 
        return 'some string';
}
   return(
            <div>
                {icon}
            </div>
        );
    }

export default Icon;