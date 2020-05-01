import React, { useState } from 'react'

const Search = () => {
    const [value, setValue] = useState('');
    const [results, setResults] = useState([]);
    const submitForm = (e) => {
        e.preventDefault();
        console.log(value);
    }
    const changeInput = (e) => {
        setValue(e.target.value);
    }
    return (
        <div className='search'>
            <h2>Search by country</h2>
            <form onSubmit={submitForm}>
                <input type="text" autoComplete='off' required placeholder='Enter country...' value={value} onChange={changeInput} />
                <button type='submit'><img src="/search.png" alt="search icon"/></button>
            </form>
        </div>
    )
}

export default Search
