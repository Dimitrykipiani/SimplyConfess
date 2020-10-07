import classes from './NavItem.module.css';
import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const NavItem = (props) => {
    return (
        <li>
            <NavLink to={props.link} className={classes.NavItem}>
                {props.children}
            </NavLink>
        </li>
    );
}

export default NavItem;