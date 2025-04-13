import React from 'react'
import Search from './Search'

function MainDisplay({ expenses }) {

  return (
    <div className="main-display">
      <Search />
      
      <div className="table">
        <div className="table-header">
          <span>Name</span>
          <span>Description</span>
          <span>Category</span>
          <span>Amount</span>
          <span>Date</span>
        </div>

        {expenses.map((expense, index) => (
          <div className='table-row' key={index}>
            <span>{expense.expenseName}</span>
            <span>{expense.description}</span>
            <span>{expense.category}</span>
            <span>{expense.amount}</span>
            <span>{expense.date}</span>
          </div>
        ))}

      </div>
    </div>
  )
}

export default MainDisplay
