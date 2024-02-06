import React from 'react'
import useSWR from 'swr'
import RickAndMorty from '../../component/RickandMorty'
import {useNavigate} from "react-router-dom"
import { useState } from 'react'

// We are now able to fetch remote data with SWR. However, this setup is a local one and can be a bit redundant as we are using the same fetcher function in home.js and pokemon.js to do the same thing. 
// const fetcher = (...args) => fetch(...args).then((res) => res.json())

const Home = () => {
  const navigate= useNavigate()
  const [pageIndex, setPageIndex] = useState(1);
  const { data: result, error } = useSWR(`${process.env.REACT_APP_BASEURL2}/?page=${pageIndex}`)
  if (error) return <h1>Something went wrong!</h1>
  if (!result) return <h1>Loading...</h1>
 
   
  console.log("data", result)
  return (
    <div>
      <main className='App'>
        <h1>Rick and Morty</h1>
        <button onClick={()=>{navigate("/pokemon")}}>Go to Pokemon section</button>
        <div>
          {result.results.map((pokemon) => (
            <RickAndMorty key={pokemon.name} pokemon={pokemon} />
          ))}
        </div>
        {pageIndex !== 1 && <button onClick={() => setPageIndex(pageIndex - 1)}>
          Previous
        </button>}
                <button onClick={() => setPageIndex(pageIndex + 1)}>
                    Next
                </button>
      </main></div>
  )
}

export default Home