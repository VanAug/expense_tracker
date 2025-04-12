import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import AddExpense from './components/AddExpense'
import MainDisplay from './components/MainDisplay'

function App() {
  return (
    <div>
      <Navbar />
      <AddExpense />
      <MainDisplay />
    </div>
  )
}

export default App