import { Box, Heading, Text } from '@chakra-ui/react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import NavBar from '../components/navBar';

const ErrorPage = () => {

  const error = useRouteError();
  const isInvalidRoute = isRouteErrorResponse(error);
  return (
    <>
      <NavBar />
      <Box p={5}>
        <Heading> Oops</Heading>
        <Text>
          {isInvalidRoute
            ? "This page does not exist !!!"
            : "Unexpected Error ocurs"}
        </Text>
      </Box>
    </>
  );
}

export default ErrorPage