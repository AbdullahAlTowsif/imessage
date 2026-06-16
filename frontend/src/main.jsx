import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ClerkProvider } from '@clerk/react'
import { RouterProvider } from "react-router/dom";
import { ThemeProvider } from './context/ThemeContext';
import { WallpaperProvider } from './context/WallpaperContext';
import { router } from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider>
      <ThemeProvider>
        <WallpaperProvider>
          <RouterProvider router={router} />,
        </WallpaperProvider>
      </ThemeProvider>
    </ClerkProvider>
  </StrictMode>,
)
