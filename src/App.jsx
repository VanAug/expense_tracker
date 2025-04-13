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
  
  const handleDelete = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id
    ))
  }
  return (
    <div className="app-container">
      <Navbar />
      
      <div className="content-wrapper">
        <AddExpense onAddExpense={handleAddExpense}/>
        <MainDisplay 
          expenses={expenses}
          onDelete={handleDelete}
        />
      </div>
    </div>
  )
}

export default App