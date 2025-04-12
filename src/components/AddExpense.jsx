import React from 'react'

function AddExpense() {
  return (
    <div className="add-expense">
      <h2>Add Expense</h2>
      <p>Enter your expense details below.</p>

      <form className="expense-form">
        <input type="text" placeholder="Enter expense name" />
        <input type="text" placeholder="Enter expense description" />
        <input type="text" placeholder="Enter expense category" />
        <input type="number" placeholder="Enter amount" />
        <input type="date" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddExpense
