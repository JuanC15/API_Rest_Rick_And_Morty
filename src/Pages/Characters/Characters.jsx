import { useState, useEffect } from 'react'
import CardCharacter from '../../Components/CardCharacter/CardCharacter';
import './Characters.css'
import { Link } from 'react-router-dom';

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        const controller = new AbortController();

        const loadCharacters = async () => {
            try {
                setLoading(true);

                const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`, {
                    signal: controller.signal,
                });
                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data?.error || 'No se pudieron cargar los personajes');
                }

                setCharacters((previousCharacters) =>
                    page === 1 ? data.results : [...previousCharacters, ...data.results]
                );
                setHasMore(Boolean(data.info?.next));
            } catch (error) {
                if (error.name !== 'AbortError') {
                    setHasMore(false);
                }
            } finally {
                setLoading(false);
            }
        };

        loadCharacters();

        return () => controller.abort();
    }, [page])

    return (
        <>
            <div className='containerCharacters'>
                {characters.length === 0 && loading ? <p>Cargando...</p> :
                    characters.map(character =>{
                        return(
                            <Link key={character.id} className='characterLink' to={`/details/${character.id}`}>
                                <CardCharacter
                                  name={character.name}
                                  gender={character.gender}
                                  species={character.species}
                                  image={character.image}
                                />
                            </Link>
                        )
                    }) 
                }
            </div>
            <div className='characters-load-more'>
                {hasMore && (
                    <button
                        type='button'
                        className='characters-load-more__button'
                        onClick={() => setPage((currentPage) => currentPage + 1)}
                        disabled={loading}
                    >
                        {loading ? 'Cargando...' : 'Cargar más personajes'}
                    </button>
                )}
            </div>
        </>
    )
}

export default Characters