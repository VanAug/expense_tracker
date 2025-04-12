import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import AddExpense from './components/AddExpense'
import MainDisplay from './components/MainDisplay'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      
      <div className="content-wrapper">
        <AddExpense />
        <MainDisplay />
      </div>
    </div>
  )
}

export default App