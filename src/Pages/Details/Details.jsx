import {useEffect, useState} from 'react'
import { useParams, useNavigate  } from 'react-router-dom'
import './Details.css'

const Details = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [character, setCharacter] = useState(null);
    
    useEffect(() => {
        setCharacter(null);
        console.log('Fetching character with ID:', id);
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => {
                console.log('Response status:', res.status);
                if (!res.ok) throw new Error('API Error');
                return res.json();
            })
            .then(data => {
                console.log('Character data:', data);
                setCharacter(data);
            })
            .catch(error => {
                console.error('Error fetching character:', error);
                navigate(-1);
            })        
    }, [id, navigate])
    
  return (
    <div className='detailsContainer'>
        {character ? (
            <div className='detailsCard'>
                <div className='detailsImageSection'>
                    <img className="imgDetails" src={character.image} alt={character.name} />
                </div>
                <div className='detailsInfoSection'>
                    <h1 className='detailsName'>{character.name}</h1>
                    <div className='detailsInfo'>
                        <div className='infoRow'>
                            <span className='infoLabel'>Especie:</span>
                            <span className='infoValue'>{character.species}</span>
                        </div>
                        <div className='infoRow'>
                            <span className='infoLabel'>Estado:</span>
                            <span className={`infoValue status-${character.status?.toLowerCase() || 'unknown'}`}>{character.status}</span>
                        </div>
                        <div className='infoRow'>
                            <span className='infoLabel'>Genero:</span>
                            <span className='infoValue'>{character.gender}</span>
                        </div>
                    </div>
                    <button className='backButton' onClick={() => navigate(-1)}>← Volver</button>
                </div>
            </div>
        ) : (
            <p className='loading'>Cargando...</p>
        )}
    </div>
  )
}

export default Details