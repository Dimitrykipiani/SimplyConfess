import classes from './Navigation.module.css';
import React from 'react';

import NavItem from './NavItem/NavItem';

const Navigation = () => {
    return (
        <nav className={classes.Navigation}>
            <ul className={classes.UL}>
                <NavItem link="/home"> მთავარი </NavItem>
                <NavItem link="/about"> საიტის შესახებ </NavItem>
                <NavItem link="/privacy"> ანონიმურობა </NavItem>
                <NavItem link="/contact"> კონტაქტი </NavItem>
                <NavItem submit={true} link="/yourstory"> შენი ამბავი </NavItem>
            </ul>
        </nav>
    )
}

export default Navigation