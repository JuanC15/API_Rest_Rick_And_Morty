import {useEffect, useState} from 'react'
import { useParams, useNavigate  } from 'react-router-dom'
import './Details.css'

const Details = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [character, setCharacter] = useState(null);
    
    useEffect(() => {               
        fetch(`https://rickandmortyapi.com/api/characters/${id}`)
            .then(res => res.json())
            .then(data => setCharacter(data))        
    }, [])
    
  return (
    <div>
        <h1>Detalles de {id}</h1>
        {character ? (
            <div>
                <p>Name: {character.name}</p>
                <p>Gender: {character.gender}</p>
                <p>Race: {character.race}</p>
                <img className="imgDetails" src={character.image} alt={character.name} />
                <button onClick={() => navigate(-1)}>Ir atras</button>
            </div>
        ) : (
            <p>Cargando...</p>
        )}
    </div>
  )
}

export default Details