import React, { useEffect, useState } from 'react'

const All = () => {
    const [cases, setCases] = useState();
    const [deaths, setDeaths] = useState()
    const [recovered, setRecovered] = useState()
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://coronavirus-19-api.herokuapp.com/all');
            const data = await res.json();
            setCases(data.cases);
            setDeaths(data.deaths);
            setRecovered(data.recovered);
            console.log(data.cases.toString().split(''));
        }
        fetchData();
    }, []);
    return (
        <div className='all'>
            <p><span><i className="fas fa-head-side-cough" style={{ color: 'orange', fontSize: '50px'}}></i>Cases</span><span>{cases}</span></p>
            <p><span><i className="fas fa-skull-crossbones" style={{ color: 'red', fontSize: '50px' }}></i>Deaths</span><span>{deaths}</span></p>
            <p><span><i className="fas fa-smile-beam" style={{ color: 'rgb(20, 255, 20)', fontSize: '50px' }}></i>Recovered</span><span>{recovered}</span></p>
        </div>
    )
}

export default All
