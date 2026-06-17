import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ClerkProvider } from '@clerk/react'
import { RouterProvider } from "react-router/dom";
import { ThemeProvider } from './context/ThemeContext';
import { WallpaperProvider } from './context/WallpaperContext';
import { router } from './App';
import AuthInitializer from './AuthInitializer';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider>
      <AuthInitializer>
        <ThemeProvider>
          <WallpaperProvider>
            <RouterProvider router={router} />,
            <Toaster />
          </WallpaperProvider>
        </ThemeProvider>
      </AuthInitializer>
    </ClerkProvider>
  </StrictMode>,
)
