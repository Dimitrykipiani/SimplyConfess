import classes from './Logo.module.css';
import React from 'react';

import logo from '../../resources/img/logo.png';

const Logo = () => {
    return ( 
        <div className={classes.Logo}>            
            <img className={classes.Img} src={logo} />
        </div>
     );
}
 
export default Logo;