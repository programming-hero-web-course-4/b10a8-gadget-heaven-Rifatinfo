import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './Routers/Routers'

createRoot(document.getElementById('root')).render(
  <div>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  </div>
)
