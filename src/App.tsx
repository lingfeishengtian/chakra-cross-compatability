import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react/styled-system'
import { defaultSystem } from '@chakra-ui/react/preset'
import { Toaster, toaster, Button } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider value={defaultSystem}>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Toaster />
      <Button size="2xl" onClick={() => {
        toaster.create({
          title: 'Hello World',
          description: 'This is a toast message',
          duration: 5000,
          type: 'success',
          closable: true,
        });
      }}>
        Show Toast
      </Button>
    </ChakraProvider>
  )
}

export default App
