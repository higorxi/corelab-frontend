import React from 'react'
import Estrela from './Estrela'
import { useState } from 'react'
import './styles/CreateTodo.css'

export default function CreateTodo() {
  const [favoritada, setFavoritada] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleToggleFavorito = () => {
    setFavoritada((prev) => !prev)
  }

  const handleEnviar = async () => {
    try {
      const novoTodo = {
        title,
        description,
        favorite: favoritada,
      }
      console.log(novoTodo)
      const response = await fetch('http://localhost:5000/todos/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoTodo),
      })

      if (response.ok) {
        console.log('Todo criado com sucesso!')
        setTitle('')
        setDescription('')
        setFavoritada(false)
      } else {
        console.error('Erro ao criar o todo:', response.statusText)
      }
    } catch (error) {
      console.error('Erro ao criar o todo:', error)
    }
  }

  return (
    <div className="Container">
      <div className="createTodoContainer">
        <div className="tituloContainer">
          <input
            className="text"
            type="text"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Estrela favoritada={favoritada} onClick={handleToggleFavorito} />
        </div>
        <div className="descricaoTodo">
          <input
            className="text"
            type="text"
            placeholder="Criar nota..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button className="enviarButton" onClick={handleEnviar}>
          Enviar
        </button>
      </div>
    </div>
  )
}
