import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { template } from './state.ts'

function App() {
  const [count, setCount] = useState(0)
  const { test } = template;

  return (
    <>
      <div className='flex flex-row justify-center'>
        <a className="text-center" href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{test} Vite + React</h1>
      <div className="card">
        <button className='btn' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-sm">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
