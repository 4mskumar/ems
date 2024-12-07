import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-zce24tpcsh6b1t0x.us.auth0.com"
    clientId="va3FU29JJ8gVWAwchkN4Q5BuD3LLD7xK"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >

    <App />
  </Auth0Provider>
)
