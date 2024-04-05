import React from 'react'
import './Category.css'

function Category(category_image) {
  return (
    <div className='Box'>
        <img src={category_image} className='category_image'></img>
        {console.log(category_image)}
    </div>
  )
}

export default Category