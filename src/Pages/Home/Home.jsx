import { useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [character, setCharacter] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSearch = async (e) => {
    e.preventDefault()
    
    if (!searchTerm.trim()) {
      setCharacter(null)
      setError('')
      return
    }

    try {
      setLoading(true)
      setError('')
      
      const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${searchTerm}`)
      const data = await response.json()

      if (!response.ok) {
        setCharacter(null)
        setError('Personaje no encontrado')
        return
      }

      // La API retorna { results: [...] }
      const result = data?.results?.[0]
      if (result) {
        setCharacter(result)
      } else {
        setCharacter(null)
        setError('No se encontraron resultados')
      }
    } catch (err) {
      setError('Error en la búsqueda')
      setCharacter(null)
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value)
    if (e.target.value === '') {
      setCharacter(null)
      setError('')
    }
  }

  return (
    <div className='homeContainer'>
      <div className='homeHeader'>
        <h1>Rick and Morty</h1>
        <p>Busca tu personaje favorito</p>
      </div>

      <form onSubmit={handleSearch} className='searchForm'>
        <input
          type='text'
          placeholder='Escribe el nombre del personaje...'
          value={searchTerm}
          onChange={handleInputChange}
          className='searchInput'
        />
        <button type='submit' className='searchBtn'>Buscar</button>
      </form>

      {loading && <p className='loadingText'>Buscando...</p>}
      {error && <p className='errorText'>{error}</p>}

      {character && (
        <div className='characterResult'>
          <img src={character.image} alt={character.name} className='characterImage' />
          <div className='characterInfo'>
            <h2>{character.name}</h2>
            <p><strong>Estado:</strong> {character.status}</p>
            <p><strong>Especie:</strong> {character.species}</p>
            <p><strong>Género:</strong> {character.gender}</p>
            <p><strong>Origen:</strong> {character.origin?.name}</p>
            <p><strong>Ubicación:</strong> {character.location?.name}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home