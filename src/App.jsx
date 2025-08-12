import {Route, Routes} from 'react-router-dom'
import './App.css'
import Button from './components/Button/Button'
import TextInputForm from './components/TextInputForm/TextInputForm'
import TextInputFormContainer from './components/TextInputForm/TextInputFormContainer'

function App() {

  return (
    <Routes>
      <Route path="/" element={<TextInputFormContainer />} />
      <Route path="/start" element={<StartGame />} />
      <Route path="/play" element={<PlayGame />} />
    </Routes>
  )
}

export default App
