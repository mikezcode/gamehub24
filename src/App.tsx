import { Box, Button, Text, useColorMode } from '@chakra-ui/react'
import './App.css'

import HeaderWraper from './components/headerWraper';
import Genres from './components/genres';
import useGenreService from './services/genre-service';
function App() {

  
   
  return (   

    <>
    <HeaderWraper/>
    <Genres />    
    </>
  );
}

export default App
