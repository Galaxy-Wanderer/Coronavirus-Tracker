import React, { useState, useEffect } from 'react'

const Search = () => {
    const [value, setValue] = useState('');
    const [query, setQuery] = useState('');
    const [results, setResults] = useState('')
    const submitForm = (e) => {
        e.preventDefault();
        setQuery(value);
    }
    const changeInput = (e) => {
        setValue(e.target.value);
    }
    useEffect(() => {
        const fetchCountries = async () => {
            const res = await fetch('https://coronavirus-19-api.herokuapp.com/countries');
            const data = await res.json();
            data.forEach(place => {
                if(place.country.toUpperCase().indexOf(query.toUpperCase()) > -1) {
                    setResults(place);
                }
            });
        }
        fetchCountries();
    }, [query]);
    return (
        <div className='search'>
            <h2>Search by country</h2>
            <form onSubmit={submitForm}>
                <input type="text" autoComplete='off' required placeholder='Enter country...' value={value} onChange={changeInput} />
                <button type='submit'><img src="/search.png" alt="search icon"/></button>
            </form>
            <ul>
                {results.country}
                {results.cases}
            </ul>
        </div>
    )
}

export default Search
