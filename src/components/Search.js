import React from 'react'

const Search = () => {
    const submitForm = (e) => {
        e.preventDefault();
    }
    return (
        <div className='search'>
            <h2>Search by country</h2>
            <form onSubmit={submitForm}>
                <input type="text" autoComplete='off' required placeholder='Enter country...' />
                <button type='submit'><img src="/search.png" alt="search icon"/></button>
            </form>
        </div>
    )
}

export default Search
