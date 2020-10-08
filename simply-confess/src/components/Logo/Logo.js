import classes from './Logo.module.css';
import React from 'react';

import logo from '../../resources/img/megaphone.png';

const Logo = () => {
    return ( 
        <div className={classes.Logo}>            
            <img className={classes.Img} alt="Logo" src={logo} />
        </div>
     );
}
 
export default Logo;