import classes from './Layout.module.css';
import React, { Fragment } from 'react';
import Header from '../Header/Header';

const Layout = (props) => {
    return ( 
        <Fragment className={classes.Layout}>
            <Header />            
        </Fragment>
     );
}

export default Layout;