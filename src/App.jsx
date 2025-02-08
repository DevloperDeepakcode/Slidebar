import React, { useState } from 'react'
import Navbar from './Chat-bot/header/navbar'
import Midhome from './Chat-bot/pages/Midhome'
import { Route, Routes } from 'react-router-dom'
import Services from './Chat-bot/pages/navbarpages/Services'
import About from './Chat-bot/pages/navbarpages/about'
import Portifoliyo from './Chat-bot/pages/navbarpages/Portifoliyo'
import Contact from './Chat-bot/pages/navbarpages/Contact'
import Chatbots from './Chat-bot/header/bot'
import image from "../src/assets/chat-bot.avif"

function App() {
  const [bot , setbot] = useState(false)
  
  const Wow = () => {
    setbot(!bot)
    console.log(bot)
  }

  return (
    <div className='relative'>
      <Navbar/>
      {/* <Midhome/> */}
      {/* <Hero/> */}
      

      <Routes>
        <Route path="/" element={<Midhome/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/portfoliyo" element={<Portifoliyo/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
          
        <img src={image} alt="" className='fixed right-0 bottom-1 h-24 w-24'  onClick={Wow}/>
          <div className='fixed right-24 bottom-24'>
            {bot ?<Chatbots/>:""}
          </div>
    </div>

  
  )
}

export default App
