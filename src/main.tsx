import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import './index.css'
import theme from './theme/theme.ts'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { RouterProvider} from 'react-router-dom'
import router from './routers/router.tsx'
import { RouterProvider } from 'react-router-dom'
const client = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <QueryClientProvider client={client}>
        <RouterProvider router={router}/>
        {/* <App /> */}
        {/* <ReactQueryDevtools/> */}
      </QueryClientProvider>
    </ChakraProvider>
  </StrictMode>
);
