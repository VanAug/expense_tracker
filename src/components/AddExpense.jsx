import React, { useState } from 'react'

function AddExpense({ onAddExpense }) {
  const [formData, setFormData] = useState({
    expenseName: "",
    description: "",
    category: "",
    amount: "",
    date: ""
  })

  // push new value to the newly created formData as it is being created
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value})
  }

  // submit form and data and refresh form
  const handleSubmit = (event) => {
    event.preventDefault()
    const newExpense = {
      ...formData,
      amount: parseFloat(formData.amount)
    }

    onAddExpense(newExpense)

    setFormData({
      expenseName: "",
      description: "",
      category: "",
      amount: "",
      date: ""
    })
  }

  return (
    <div className="add-expense">
      <h2>Add Expense</h2>
      <p>Enter your expense details below.</p>

      <form className="expense-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name='expenseName' 
          placeholder="Enter expense name" 
          onChange={handleChange} 
          value={formData.expenseName} 
          required
        />

        <input 
          type="text" 
          name='description' 
          placeholder="Enter expense description" 
          onChange={handleChange} 
          value={formData.description} 
          required
        />

        <input 
          type="text" 
          name='category' 
          placeholder="Enter expense category" 
          onChange={handleChange} 
          value={formData.category}
          required 
        />
        
        <input 
          type="number" 
          name='amount' 
          placeholder="Enter amount" 
          step="0.01" 
          onChange={handleChange} 
          value={formData.amount}
          required 
        />
        
        <input 
          type="date" 
          name='date' 
          onChange={handleChange} 
          value={formData.date}
          required 
        />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddExpense
