
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// 1. Import the extendTheme function
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import { Home } from './pages/Home/index'
import { Adm } from './pages/Adm/index'


// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
  primary: {
    500: '#d3ea05',
    800: '#d3ea05b3'
  }
}

const theme = extendTheme({ colors })

// 3. Pass the `theme` prop to the `ChakraProvider`
function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/admin/:id" element={<Adm />}></Route>

        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App;
