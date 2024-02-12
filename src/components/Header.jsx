import Logo from './Logo'
import Pesquisar from './Pesquisar'
import './styles/Header.css'
import { IoMdClose } from 'react-icons/io'

export default function Header() {
  return (
    <div className="headerContainer">
      <div className="leftHeader">
        <Logo />
        <h1 className="titleHeader">CoreNotes</h1>
        <Pesquisar />
      </div>
      <div className="rightHeader">
        <IoMdClose size={24} />
      </div>
    </div>
  )
}
