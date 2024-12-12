import React from 'react'
import ReactDom from 'react-dom/client'
import { store } from './Redux/store';
import App from './App/App.tsx'
const root = ReactDom.createRoot(document.getElementById('root')!)

function rerenderDom() {
  root.render(
    <React.StrictMode>
      <App attr={store.dispatch} state={store.getState().startPage} field={store.getState().fieldPage} />
    </React.StrictMode>
  )
}

rerenderDom();
store.subscribe(rerenderDom)