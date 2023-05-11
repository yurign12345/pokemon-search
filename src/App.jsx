import { useState } from 'react'
import './App.css'

function App() {
  
  return (
    <div className='app'>
      <div className='bordas' id='cabecalho'></div>
      <section id='content'>
        <div className='pesquisa'>
          <input type="text"/>
          <button>Pesquisar</button>
        </div>
        <div className='pokemon'>

        </div>
      </section>
      <div className='bordas' id='rodape'></div>
    </div>
  )
}

export default App
