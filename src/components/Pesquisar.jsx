import React, { useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import './styles/Pesquisar.css'

const SearchComponent = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    onSearch(searchTerm)
  }

  return (
    <div className="PesquisarContainer">
      <form onSubmit={handleSearchSubmit}>
        <div className="formularioPesquisar">
          <input
            className="textPesquisar"
            type="text"
            placeholder="Pesquisar notas"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button type="submit">
            <IoSearchOutline color="black" />
          </button>
        </div>
      </form>
    </div>
  )
}

export default SearchComponent
