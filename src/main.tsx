import React from 'react'
import ReactDOM from 'react-dom/client'
import eruda from 'eruda'

import { App } from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

if (import.meta.env.DEV && window && window.innerWidth <= 870) {
  eruda.init()
}
