import {useState, useEffect} from 'react'
import { useNavigate  } from 'react-router-dom'
import './Error.css'

const Error = () => {
    const [seg, setSeg] = useState(5)
    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => {
            setSeg(seg - 1)
            if(seg === 1){
                navigate('/')
            }
        }, 1000)        
    }, [seg])

  return (
    <div className='error'>
        <p className='titleError'>ERROR</p>
        <p>404 Not Found</p>
        <p>Será redireccionado en {seg} segundos</p>
    </div>
  )
}

export default Error