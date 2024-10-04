import './App.css'
import Button from './components/SetupAndProps/Button'
// import Child, { Child2 } from './components/SetupAndProps/Child'

function App() {

  const firstName: string = "Ellie"

  return (
    <>
      {/* <Child name="Ellie">
        <p>Ellie's Child</p>
      </Child>
      <Child2 name="Ken" /> */}
      <Button outline={false} name={firstName}>Button</Button>
    </>
  )
}

export default App
