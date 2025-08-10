
import './App.css'
import Button from './components/Button/Button'

function App() {

  return (
    <>
      <Button text="Click me" onClickHandler={() => console.log("Button clicked")}/>
    </>
  )
}

export default App
