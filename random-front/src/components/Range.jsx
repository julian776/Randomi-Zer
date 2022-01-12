import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { URL } from '../utils/URL'

export default function Range() {
    
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(1)

    const [respuesta, setRespuesta] = useState(null)

    function handleRange(event){
        event.preventDefault()
        func()
    }

    async function func(){
        const response = await fetch(`${URL}/range`, 
        {
            method:'POST',
            mode: 'cors',
            headers: {
                    'Content-Type': 'application/json'
                },
            body: JSON.stringify({min: parseInt(min), max: parseInt(max)})
        })
        const data =  await response.json()
        setRespuesta({...respuesta, data:data})
    }

    return (
        <div>
            <form action="submit">
                <h3>Desde un rango de números</h3>
                <label htmlFor="min">Min</label>
                <input type="text" id='min' placeholder='Min' onChange={(event) => setMin(event.target.value)} required />
                <label htmlFor="max">Max</label>
                <input type="text" id='max' placeholder='Max' onChange={(event) => setMax(event.target.value)} required />
                <button onClick={handleRange}>Randomize range</button>
            </form>
            {respuesta != null && <p>{respuesta.data.randomList}</p>}
            <button><Link to='/'>Home</Link></button>
        </div>
    )
}
