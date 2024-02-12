import React, { useEffect, useState } from 'react'
import CardTodo from './CardTodo'
import './styles/Favorito.css'

export default function Favoritos() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/todos/favorites')
        const data = await response.json()
        setTodos(data)
      } catch (error) {
        console.error('Erro ao buscar os dados da API:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <section className="Fav">
      <h1 className="tituloFav">Favoritas</h1>
      <section className="rowFav">
        {todos.map((todo) => (
          <CardTodo key={todo.id} dados={todo} />
        ))}
      </section>
    </section>
  )
}
