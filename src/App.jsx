import { useState } from 'react'
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import Box from '@mui/material/Box'

import Navbar from './components/Navbar'
import Inicio from './pages/Inicio';
import About from './pages/About';
import Expirience from './pages/Expirience';
import { Brifecase } from './pages/Brifecase';
import { Contact } from './pages/Contact';
function App() {
  const [count, setCount] = useState(0)

  return (
    < div className='bg-[#F2F2F2] '>
      <Box id="home">
        <Inicio />
      </Box>
      <Box id="about">
        <About />
      </Box>
      <Box id="expirience">
        <Expirience />
      </Box>
      <Box id="briefcase">
        <Brifecase />
      </Box>
      <Box id="contact">
        <Contact />
      </Box>
      <Navbar />




    </div>
  )
}

export default App
