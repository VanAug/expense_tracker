import React from 'react'

function Search({ search, onSearch }) {

  // change search value as it is being typed
  const handleChange = (event) => {
    onSearch(event.target.value)
  }

  return (
    <div>
      <input 
        type='text' 
        className='search' 
        placeholder='Search'
        value={search}
        onChange={handleChange}
      ></input>
    </div>
  )
}

export default Search