import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import FormikContext from './context/formikcontext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FormikContext>
    <App />
    </FormikContext>
  </StrictMode>,
)
