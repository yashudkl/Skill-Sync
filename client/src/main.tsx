import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainRouter from './router/router'
import { AuthFormContextProvider } from './contexts/authFormContext'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <ToastContainer
      limit = {1}
      position="top-right"
      autoClose={5000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false} 
      />
    <AuthFormContextProvider>

      <MainRouter />
    </AuthFormContextProvider>
  </StrictMode>,
)
