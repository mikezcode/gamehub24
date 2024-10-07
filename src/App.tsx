import { Button, useColorMode } from '@chakra-ui/react'
import './App.css'

function App() {
  const {colorMode,toggleColorMode} = useColorMode()
  return (
    <>
     <Button size={'x'} onClick={toggleColorMode} p={3} fontSize={'xx-large'}>
      Toggle {colorMode==='dark'? 'light': 'dark'}
     </Button>
    </>
  )
}

export default App
