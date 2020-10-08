import classes from './NavItem.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom'

const NavItem = (props) => {
    return (
        <li>
            <NavLink to={props.link} activeClassName={classes.Active} className={props.submit ? classes.SubmitItem : classes.NavItem}>
                {props.children}
            </NavLink>
        </li>
    );
}

export default NavItem;