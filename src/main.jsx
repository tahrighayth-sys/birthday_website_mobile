import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '50px', 
      fontFamily: 'Arial', 
      background: 'linear-gradient(to bottom, #ffdde1, #ee9ca7)', 
      minHeight: '100vh' 
    }}>
      <h1 style={{ color: '#d63384', fontSize: '2.5rem' }}>Happy Birthday Goldfish! 🐠</h1>
      <p style={{ fontSize: '1.2rem', color: '#555' }}>Scroll down for your surprise...</p>
      
      <div style={{ 
        marginTop: '100px', 
        backgroundColor: 'white', 
        padding: '30px', 
        borderRadius: '20px', 
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
        display: 'inline-block',
        maxWidth: '80%'
      }}>
        <h2 style={{ color: '#ff4d4d' }}>To my sunshine... ☀️</h2>
        <p style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>
          Today is not just a normal day; today is the day an angel and the sunshine were born.
        </p>
        <p style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>
          I want to thank you for being so genuine and real with me, even when I was a difficult person and made many mistakes.
        </p>
        <p style={{ fontWeight: 'bold', color: '#d63384' }}>
          Happy birthday to the most beautiful, smart, and perfect "fish" I’ve ever met in my life! ✨
        </p>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
  
