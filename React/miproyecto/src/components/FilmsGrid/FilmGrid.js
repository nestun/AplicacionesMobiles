import React from 'react'
import FilmItem from './FilmItem'
import Spinner from '../ui/Spinner'

const FilmGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {items.map((item) => (
        <FilmItem key={item.episode_id} item={item}></FilmItem>
      ))}
    </section>
  )
}

export default FilmGrid