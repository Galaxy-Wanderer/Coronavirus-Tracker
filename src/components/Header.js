import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Coronavirus Tracker</h1>
            <div className="links">
                <Link to='/'>Search by country</Link>
                <Link to='/all'>Worldwide</Link>
            </div>
        </header>
    )
}

export default Header
