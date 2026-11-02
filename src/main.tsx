import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Styles (Tokens, Stylebook-Komponenten, Seitenlayout, selbst gehostete Schriften) bindet
// index.html direkt ein, damit sie auch ohne JavaScript greifen.
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
