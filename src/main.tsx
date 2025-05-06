import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import App from './App.tsx'
import { storyblokInit, apiPlugin } from "@storyblok/react";

storyblokInit({
  accessToken: "YpAc7OPTyeBFG1cglZsPLAtt", 
  use: [apiPlugin],
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>  
    <App />
  </StrictMode>,
)
