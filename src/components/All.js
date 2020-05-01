import React, { useEffect, useState } from 'react'

const All = () => {
    const [cases, setCases] = useState();
    const [deaths, setDeaths] = useState()
    const [recovered, setRecovered] = useState();
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
        const fetchData = async () => {
            const res = await fetch('https://coronavirus-19-api.herokuapp.com/all');
            const data = await res.json();
            setCases(addCommas(data.cases.toString()));
            setDeaths(addCommas(data.deaths.toString()));
            setRecovered(addCommas(data.recovered.toString()));
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
