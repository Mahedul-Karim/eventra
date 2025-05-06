import React from 'react'

const Main = ({name,description}) => {
  return (
    <section>
        <h3 className='text-2xl text-dark font-bold' >{name}</h3>
        <p className='text-muted my-4' >{description}</p>
    </section>
  )
}

export default Main