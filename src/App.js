import CreateTodo from './components/CreateTodo'
import Favoritos from './components/Favoritos'
import Header from './components/Header'
import Outras from './components/Outras'
import './styles/App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <CreateTodo />
      <Favoritos />
      <Outras />
    </div>
  )
}

export default App
