import React, { useState } from 'react'
import Search from './Search'

function MainDisplay({ expenses }) {
  const [search, setSearch] = useState("")
  const [sortByCriteria, setSortByCriteria] = useState("")

  // Make search case insensitive
  const filteredExpenses = expenses.filter((expense) => {
    const makeLowerCase = search.toLowerCase();
    
    return (
      expense.expenseName.toLowerCase().includes(makeLowerCase) ||
      expense.description.toLowerCase().includes(makeLowerCase)
    )
  })

  // Sort the filtered Expenses
  const sortedExpenses = [...filteredExpenses].sort((a, b) => {
    if(!sortByCriteria) return 0;

    return a[sortByCriteria].localeCompare(b[sortByCriteria], undefined, {sensitivity: "base"})
  })

  const handleChange = (event) => {
    setSortByCriteria(event.target.value)
  }

  return (
    <div className="main-display">
      <div className='functionalities'>
        <Search 
          search={search}
          onSearch={setSearch}
        />
        <select
          className='sort'
          value={sortByCriteria}
          onChange={handleChange}
        >
          <option value="">Sort</option>
          <option value="category">Category</option>
          <option value="description">Description</option>
        </select>
      </div>
      
      <div className="table">
        <div className="table-header">
          <span>Name</span>
          <span>Description</span>
          <span>Category</span>
          <span>Amount</span>
          <span>Date</span>
        </div>

        {/* display search results .....just replace the keyword before map(was espenses is now filteredExpenses) */}
        {/* again replace filteredExpenses with sortedExpenses */}
        {sortedExpenses.map((expense, index) => (
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
