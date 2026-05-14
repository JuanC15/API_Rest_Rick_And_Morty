import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CardCharacter from '../../Components/CardCharacter/CardCharacter'
import './Filtrado.css'

const speciesOptions = [
  'All',
  'Human',
  'Alien',
  'Robot',
  'Mythological Creature',
]

const Filtrado = () => {
  const [selectedSpecies, setSelectedSpecies] = useState('All')
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    const loadCharacters = async () => {
      try {
        setLoading(true)
        setError('')

        const url =
          selectedSpecies === 'All'
            ? `https://rickandmortyapi.com/api/character?page=${page}`
            : `https://rickandmortyapi.com/api/character/?species=${encodeURIComponent(selectedSpecies)}&page=${page}`

        const response = await fetch(url, { signal: controller.signal })
        const data = await response.json()

        if (!response.ok) {
          throw new Error(data?.error || 'No se pudieron cargar los personajes')
        }

        const results = Array.isArray(data.results) ? data.results : data
        setCharacters((previousCharacters) =>
          page === 1 ? results : [...previousCharacters, ...results]
        )
        setHasMore(Boolean(data.info?.next))
      } catch (fetchError) {
        if (fetchError.name !== 'AbortError') {
          setCharacters([])
          setError('No se encontraron personajes para esa especie.')
          setHasMore(false)
        }
      } finally {
        setLoading(false)
      }
    }

    loadCharacters()

    return () => controller.abort()
  }, [selectedSpecies, page])

  const handleSpeciesChange = (species) => {
    setSelectedSpecies(species)
    setPage(1)
    setCharacters([])
    setHasMore(true)
  }

  return (
    <main className='species-page'>
      <section className='species-page__intro'>
        <span className='species-page__eyebrow'>Filtrado por especie</span>
        <h1>Buscar personajes por especie</h1>
        <div className='species-page__controls'>
          <label htmlFor='species'>Elegir especie</label>
          <select
            id='species'
            value={selectedSpecies}
            onChange={(event) => handleSpeciesChange(event.target.value)}
          >
            {speciesOptions.map((species) => (
              <option key={species} value={species}>
                {species}
              </option>
            ))}
          </select>
        </div>
        <div className='species-page__chips' aria-label='Filtros rápidos por especie'>
          {speciesOptions.map((species) => (
            <button
              key={species}
              type='button'
              className={`species-page__chip ${selectedSpecies === species ? 'is-active' : ''}`}
              onClick={() => handleSpeciesChange(species)}
            >
              {species}
            </button>
          ))}
        </div>
      </section>
      <section className='species-page__results'>
        <div className='species-page__results-header'>
          <h2>Resultados</h2>
          <span>{selectedSpecies}</span>
        </div>

        {loading && <p className='species-page__status'>Cargando personajes...</p>}

        {!loading && error && <p className='species-page__status species-page__status--error'>{error}</p>}

        {!loading && !error && (
          <>
            <div className='species-page__grid'>
              {characters.map((character) => (
                <Link key={character.id} className='species-page__link' to={`/details/${character.id}`}>
                  <CardCharacter
                    name={character.name}
                    description={`${character.species} · ${character.status}`}
                    image={character.image}
                  />
                </Link>
              ))}
            </div>

            {hasMore && (
              <div className='species-page__load-more'>
                <button
                  type='button'
                  className='species-page__load-more-button'
                  onClick={() => setPage((currentPage) => currentPage + 1)}
                  disabled={loading}
                >
                  {loading ? 'Cargando...' : 'Cargar más personajes'}
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </main>
  )
}

export default Filtrado