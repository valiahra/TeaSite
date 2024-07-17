import React from 'react'

export default function Pagination({coffeesPerPage, totalCoffees, paginate}) {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalCoffees/coffeesPerPage); i++){
        pageNumbers.push(i)
    }

  return (
    <div style={{marginLeft:'42%', marginTop:'2%'}}>
      <ul className='pagination'>
        {pageNumbers.map(number => (
            <li className='page-item' key={number}>
                <a href='#' className='page-link' onClick={() => paginate(number)}>{number}</a>
            </li>
        ))}
      </ul>
    </div>
  )
}
