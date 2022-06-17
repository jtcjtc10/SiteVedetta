import React from 'react'
import './App.css'
import './FloatingWhatsapp'
import FloatingWhatsApp from './FloatingWhatsapp'
import avatar from './logo.png'

function App() {
  return (
    <FloatingWhatsApp
      phoneNumber='+55 31 9675-8696'
      accountName='Cassiane'
      allowClickAway
      avatar={avatar}
      notification
      notificationSound
      notificationDelay={30000}
      darkMode
    />
  )
}

export default App
