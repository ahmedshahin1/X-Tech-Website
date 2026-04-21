import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import AppTest from './App.test.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    {/* <AppTest /> */}
  </React.StrictMode>,
)
