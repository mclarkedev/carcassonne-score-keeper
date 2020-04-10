import React from 'react';
import Stats from './Stats';

const Header = ({ players }) => {
    return (
        <header>
            <h1>Carcassonne</h1>
            <Stats players={players}/>
        </header>
    );
};

export default Header;