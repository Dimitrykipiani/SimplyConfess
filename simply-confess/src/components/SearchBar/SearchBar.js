import React, { useState } from 'react';

import classes from './SearchBar.module.css';

import search from '../../resources/img/search.png';
import esc from '../../resources/img/esc.png';

const SearchBar = (props) => {
    const [shouldDisplay, setShouldDisplay] = useState(false);

    const handleIconClick = () => {
        setShouldDisplay(!shouldDisplay);
    }

    return (
        <div className={classes.SearchBar}>
            <span onClick={handleIconClick} className={classes.Esc}>
                <img style={{display: shouldDisplay? 'flex': 'none'}} src={esc} alt="remove search" />
            </span>
            <input style={{ opacity: shouldDisplay ? '1' : '0' }} className={classes.SearchInput} type='search' placeholder='ძებნა' />
            <div style={{display: !shouldDisplay? 'flex': 'none'}} onClick={handleIconClick} className={classes.SearchWrapper}>
                <img src={search} alt="search icon" />
            </div>            
        </div>
    );
}

export default SearchBar;