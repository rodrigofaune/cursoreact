import React from 'react'

const HeroFilter = ({ placeholder, handleInputChange, value }) => (
  <div className='row justify-content-md-center'>
    <div className='search-input'>
      <input
        type='text'
        placeholder={placeholder}
        onChange={handleInputChange}
        value={value}
      />
    </div>
  </div>

)

export default HeroFilter
