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
    function addCommas(nStr){
        nStr += '';
        const x = nStr.split('.');
        let x1 = x[0];
        const x2 = x.length > 1 ? '.' + x[1] : '';
        const rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
         x1 = x1.replace(rgx, '$1,$2');
        }
        return x1 + x2;
    }
    useEffect(() => {
        const fetchCountries = async () => {
            const res = await fetch('https://coronavirus-19-api.herokuapp.com/countries');
            const data = await res.json();
            data.forEach(place => {
                if(place.country.toUpperCase().indexOf(query.toUpperCase()) > -1 && query !== '') {
                    setResults({ country: place.country, cases: place.cases, deaths: place.deaths, recovered: place.recovered });
                }
            });
            console.log(data);
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
            { results !== '' ? 
                <p>
                    {results.country}
                    <br />
                    <span>
                        <span>Cases: {addCommas(results.cases)}</span>
                        <span>Deaths: {addCommas(results.deaths)}</span>
                        <span>Recoverd: {addCommas(results.recovered)}</span>
                    </span>
                </p>
             : ''}
        </div>
    )
}

export default Search
