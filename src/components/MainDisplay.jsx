import React from 'react'

function MainDisplay() {
  return (
    <div className="main-display">
      <h2>Expense History</h2>

      <div className="table">
        <div className="table-header">
          <span>Name</span>
          <span>Description</span>
          <span>Category</span>
          <span>Amount</span>
          <span>Date</span>
        </div>

        {/* Sample row */}
        <div className="table-row">
          <span>Groceries</span>
          <span>Weekly food shopping</span>
          <span>Food</span>
          <span>$50</span>
          <span>2025-04-10</span>
        </div>

        <div className="table-row">
          <span>Transport</span>
          <span>Bus fare</span>
          <span>Travel</span>
          <span>$10</span>
          <span>2025-04-11</span>
        </div>
      </div>
    </div>
  )
}

export default MainDisplay
