import { useState } from 'react'
import './App.css'

function App() {
  const [contador, setContador] = useState(0)

  const getContador = () => {
    setContador(contador + 1)
  }
  return (
    <>
    <div className='contenedor'>
      <h3>{contador}</h3>
      <button onClick={ getContador}>click aqui para sumar 1</button>
    </div>
        
    </>
  )
}

export default App
