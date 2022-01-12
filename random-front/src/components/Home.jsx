import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <nav>
            <button><Link to='/list'>Randomizar Lista</Link></button>
            <button><Link to='/range'>Randomizar por rango</Link></button>
        </nav>
    )
}
