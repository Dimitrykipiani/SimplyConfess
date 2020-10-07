import classes from './Navigation.module.css';
import React from 'react';

import NavItem from './NavItem/NavItem';

const Navigation = () => {
    return (
        <nav className={classes.Navigation}>
            <ul className={classes.UL}>
                <NavItem link="/home"> Home </NavItem>
                <NavItem link="/"> Privacy </NavItem>
                <NavItem link="/"> Contact </NavItem>
            </ul>
        </nav>
    )
}

export default Navigation