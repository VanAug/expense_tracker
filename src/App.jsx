import './App.css'
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import AddExpense from './components/AddExpense'
import MainDisplay from './components/MainDisplay'

function App() {
  const [expenses, setExpenses] = useState([])

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense])
  }
  return (
    <div className="app-container">
      <Navbar />
      
      <div className="content-wrapper">
        <AddExpense onAddExpense={handleAddExpense}/>
        <MainDisplay expenses={expenses} />
      </div>
    </div>
  )
}

export default App