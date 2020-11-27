
import React from 'react'

const FilmItem = ({ item }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.img} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Nombre:</strong> {item.title}
            </li>
            <li>
              <strong>Intro:</strong> {item.opening_crawl}
            </li>
            <li>
              <strong>Director:</strong> {item.director}
            </li>
            <li>
              <strong>Productor:</strong> {item.producer}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FilmItem
