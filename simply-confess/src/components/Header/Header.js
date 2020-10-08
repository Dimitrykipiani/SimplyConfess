import React from 'react';
import classes from './Header.module.css'

import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import SearchBar from '../SearchBar/SearchBar';

const Header = () => {
    return (
        <div className={classes.Header}>
            <Logo />
            <Navigation />
            <SearchBar />
        </div>
    );
}

export default Header;
