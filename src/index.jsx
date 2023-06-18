import React, { startTransition } from 'react'
import { hydrateRoot } from 'react-dom/client'
import App from './App'

startTransition(() => {
  hydrateRoot(document.getElementById('root'),<App />)
})