import { Box, Button, useColorMode } from '@chakra-ui/react'
import './App.css'

import HeaderWraper from './components/headerWraper';
import Genres from './components/genres';
function App() {
  return (   

    <>
    <HeaderWraper/>
    <Genres/>
    </>
    
  );
}

export default App
