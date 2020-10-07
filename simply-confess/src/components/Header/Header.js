import React from 'react';
import classes from './Header.module.css'

import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

const Header = () => {
    return (
        <div className={classes.Header}>
            <Logo />
            <Navigation />
        </div>
      );
}
 
export default Header;
