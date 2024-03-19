import { useState } from 'react'
import logo from './assets/img/clgtlt.png'


export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome</h1>
      <img src={logo} alt="logo" />
    </>
  )
}

