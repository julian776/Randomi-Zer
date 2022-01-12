import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { URL } from '../utils/URL'

export default function List() {
    const [lista, setLista] = useState("")

    const [respuesta, setRespuesta] = useState(null)
    
    const handleList = (event) => {
        event.preventDefault()
        func()
    }

    async function func(){
        const response = await fetch(`${URL}/list`, 
        {
            method:'POST',
            mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
            body: JSON.stringify({list:lista})
        })
        const data = await response.json()
        setRespuesta({...respuesta, data:data})
    }

    return (
        <div>
            <form action="submit">
                <h3>Desde una lista</h3>
                <label htmlFor="list">Ingresa Una Lista</label>
                <input type="text" id='list' placeholder='List' onChange={(event) => setLista(event.target.value)} />
                <button onClick={handleList}>Randomize list</button>
            </form>
            {respuesta != null && <p>{respuesta.data.randomList}</p>}
            <button><Link to='/'>Home</Link></button>
        </div>
    )
}
