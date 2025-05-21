import React from 'react'
import css from './SearchBox.module.css'


const SearchBox = ({inputValue, handleChange}) => {
  return (
    <div className={css.searchbar}>
      <label className={css.sbLabel} >
        Find contacts by name: 
        <input className={css.sbInput} type="text" value={inputValue} onChange={handleChange} />
        </label>
    </div>
  )
}

export default SearchBox