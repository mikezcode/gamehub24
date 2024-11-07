import { Box } from '@chakra-ui/react'
import NavBar from '../components/navBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box m={3}>
        <Outlet />
      </Box>
    </>
  );
}

export default Layout