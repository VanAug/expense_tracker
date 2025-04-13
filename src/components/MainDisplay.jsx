import React, { useState } from 'react'
import Search from './Search'

function MainDisplay({ expenses }) {
  const [search, setSearch] = useState("")

  // Make search case insensitive
  const filteredExpenses = expenses.filter((expense) => {
    const makeLowerCase = search.toLowerCase();
    
    return (
      expense.expenseName.toLowerCase().includes(makeLowerCase) ||
      expense.description.toLowerCase().includes(makeLowerCase)
    )
  })

  return (
    <div className="main-display">
      <Search 
        search={search}
        onSearch={setSearch}
      />
      
      <div className="table">
        <div className="table-header">
          <span>Name</span>
          <span>Description</span>
          <span>Category</span>
          <span>Amount</span>
          <span>Date</span>
        </div>

        {/* display search results .....just replace the keyword before map(was espenses is now filteredExpenses) */}
        {filteredExpenses.map((expense, index) => (
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
