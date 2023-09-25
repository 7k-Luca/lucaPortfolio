// App.js 
import { useState, useEffect } from 'react'
import { 
  Grommet,
  Box,
  Button
} from 'grommet';
import {
  Up
} from 'grommet-icons'

// theme
import theme from './theme'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

// components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <Grommet full theme={theme} style={{ overflowX: 'auto' }}>
      <Navbar/>
      <Box direction="column" gap='xlarge'>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
      </Box>
    </Grommet>
  );
}

export default App;
