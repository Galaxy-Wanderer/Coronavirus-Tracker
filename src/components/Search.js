import React from 'react'
import { Link } from 'react-router-dom';

const Search = () => {
    return (
        <div className='search'>
            <h1>By country</h1>
            <Link to='/all'>Worldwide</Link>
        </div>
    )
}

export default Search
