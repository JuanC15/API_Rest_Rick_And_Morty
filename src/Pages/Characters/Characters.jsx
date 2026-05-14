import { useState, useEffect } from 'react'
import CardCharacter from '../../Components/CardCharacter/CardCharacter';
import './Characters.css'
import { Link } from 'react-router-dom';

const Characters = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(res => res.json())
            .then(data => setCharacters(data.results))    
    }, [])

    return (
        <div className='containerCharacters'>
            {characters.length === 0 ? <p>Cargando...</p> :
                characters.map(character =>{
                    return(
                        <Link key={character.id} className='characterLink' to={`/details/${character.id}`}>
                            <CardCharacter name={character.name} gender={character.gender} race={character.race} image={character.image} />
                        </Link>
                    )
                }) 
            }
        </div>
    )
}

export default Characters