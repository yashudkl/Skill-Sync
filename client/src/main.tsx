import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainRouter from './router/router'
import { AuthFormContextProvider } from './contexts/authFormContext'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthFormContextProvider>

      <MainRouter />
    </AuthFormContextProvider>
  </StrictMode>,
)
