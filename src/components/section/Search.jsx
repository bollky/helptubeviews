import React from 'react'

const Search = () => {
  return (
    <div id='search'>
        <div className='search_inner'>
            <label htmlFor='searchInput'>
                <span className='ir'>Search</span>
            </label>
            <input type='search' id='searchInput' autoComplete='off' className='search_input'  placeholder='Please enter search keyword'/>
        </div>
    </div>
  )
}

export default Search