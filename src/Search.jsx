import React from 'react'
import { useGlobalContext } from './Context'

const Search = () => {

  const {query, setQuery , isError} = useGlobalContext(); //to use the queries properly
  return (
    <>
  {/*this is for search box */}
  <section className='search-section'> 
    <h2>Search Your Favourite Movie</h2>
    <form action="#" onSubmit={(e) => e.preventDefault()}>
      <div>
        <input type="text" placeholder='search' value={query} onChange={(e) => setQuery(e.target.value)}/> {/* update the value of  query when the user search something */}
      </div>
    </form>
    <div className='card-error'>
      <p>{isError.show && isError.msg}</p>

    </div>
  </section>




 
  </>
  )
}

export default Search