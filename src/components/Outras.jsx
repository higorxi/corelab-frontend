import React, { useEffect, useState } from 'react'
import CardTodo from './CardTodo'
import './styles/Outras.css'

export default function Outras() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'http://localhost:5000/todos/not-favorites',
        )
        const data = await response.json()
        setTodos(data)
      } catch (error) {
        console.error('Erro ao buscar os dados da API:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <section className="Outras">
      <h1 className="tituloOutras">Outras</h1>
      <section className="rowOutras">
        {todos.map((todo) => (
          <CardTodo key={todo.id} dados={todo} />
        ))}
      </section>
    </section>
  )
}
