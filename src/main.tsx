import React from 'react'
import ReactDOM from 'react-dom/client'
import eruda from 'eruda'
//install package before uncomment the code bellow
//import erudaDOM from 'eruda-dom'

import { App } from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

if (
  import.meta.env.DEV &&
	window &&
	window.innerWidth <= 1024
) {
	eruda.init()
	//install package before uncomment the code bellow
	//eruda.add(erudaDOM)
}
