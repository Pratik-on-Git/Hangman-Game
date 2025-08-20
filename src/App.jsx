import {Route, Routes} from 'react-router-dom'
import './App.css'
import StartGame from './pages/StartGame'
import PlayGame from './pages/PlayGame'
import TextInputFormContainer from './components/TextInputForm/TextInputFormContainer'
import Home from './pages/Home'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/start" element={<StartGame />} />
      <Route path="/play" element={<PlayGame />} />
    </Routes>
  )
}

export default App
