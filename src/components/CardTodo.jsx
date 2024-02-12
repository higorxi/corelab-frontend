import './styles/CardTodo.css'
import { IoMdClose } from 'react-icons/io'
import Estrela from './Estrela'
import { useState, useEffect } from 'react'
import { ImPencil } from 'react-icons/im'
import { IoMdColorFill } from 'react-icons/io'
import { CiPaperplane } from 'react-icons/ci'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function CardTodo({ dados }) {
  const [favoritada, setFavoritada] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [editMode, setEditMode] = useState(false)
  const [newTitle, setNewTitle] = useState('')
  const [newDescription, setNewDescription] = useState('')
  const [removerTodo, setRemoverTodo] = useState(false)

  useEffect(() => {
    if (dados) {
      setTitle(dados.title || 'Título')
      setDescription(
        dados.description ||
          'Clique ou arraste o arquivo para esta área para fazer upload',
      )
      setFavoritada(dados.favorite || false)
    }
  }, [dados])

  const handleToggleFavorito = () => {
    setFavoritada((prev) => !prev)
  }

  const handleEditClick = () => {
    setEditMode((prev) => !prev)

    if (!editMode) {
      setNewTitle(title)
      setNewDescription(description)
    }
  }

  const handleSaveClick = async () => {
    setEditMode(false)

    const response = await fetch(
      `http://localhost:5000/todos/edit/${dados._id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: newTitle,
          description: newDescription,
          favorite: favoritada,
        }),
      },
    )

    if (response.ok) {
      toast.success('Edição concluída com sucesso!')

      setTitle(newTitle)
      setDescription(newDescription)
    } else {
      toast.error('Erro ao editar. Tente novamente.')
    }
  }

  const handleRemoveClick = async () => {
    const response = await fetch(
      `http://localhost:5000/todos/delete/${dados._id}`,
      {
        method: 'DELETE',
      },
    )

    if (response.ok) {
      setRemoverTodo(true)
      toast.success('Exclusão concluída com sucesso!')
    } else {
      toast.error('Erro ao excluir. Tente novamente.')
    }
  }

  return removerTodo ? null : (
    <section className={`Card ${editMode ? 'editMode' : ''}`}>
      <div className="tituloCard">
        {editMode ? (
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            style={{ outline: 'none' }}
          />
        ) : (
          <h2>{title}</h2>
        )}
        <Estrela
          size={24}
          favoritada={favoritada}
          onClick={handleToggleFavorito}
          cursor="pointer"
        />
      </div>
      <div className={`descricaoCard ${editMode ? 'editMode' : ''}`}>
        {editMode ? (
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            style={{
              width: '100%',
              outline: 'none',
              '::placeholder': {
                color: 'black',
                fontSize: 'medium',
                fontWeight: 'bold',
              },
            }}
          />
        ) : (
          <h2>{description}</h2>
        )}
      </div>
      <div className={`actionsCard ${editMode ? 'editMode' : ''}`}>
        <div>
          <ImPencil
            size={20}
            color={editMode ? 'orange' : '#51646E'}
            onClick={handleEditClick}
            cursor="pointer"
          />
          <IoMdColorFill
            size={22}
            color="#51646E"
            className="IoMdColorFill"
            cursor="pointer"
          />
        </div>
        {!editMode ? (
          <IoMdClose
            size={24}
            color="#51646E"
            onClick={handleRemoveClick}
            cursor="pointer"
          />
        ) : (
          <CiPaperplane size={24} onClick={handleSaveClick} cursor="pointer" />
        )}
      </div>
    </section>
  )
}
