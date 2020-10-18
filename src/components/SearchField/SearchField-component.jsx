import React from 'react'
import './SearchField-styles.css'

export const SearchField = ({ placeholder, handleChange }) => (
    <input className='search'
        onChange={handleChange}
        type='search'
        placeholder={placeholder} />
)