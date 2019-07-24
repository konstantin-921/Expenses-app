import React from 'react'
import AppProviders from './context/AppProviders'
import Main from './components/Main'
import './App.css'

function App() {

  return (
    <AppProviders>
      <header className="App-header">
        Expenses/Incomes App
      </header>
      <Main />
    </AppProviders>
  )
}

export default App
