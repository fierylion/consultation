import { useState } from 'react'

import PageRouter from './PageRouter'
import { Toaster } from 'react-hot-toast'
import { AppProvider } from './ context'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AppProvider>
    <PageRouter />
    <Toaster /> 
    </AppProvider>
    </>
  )
}

export default App
