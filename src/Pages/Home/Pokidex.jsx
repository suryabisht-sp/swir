import React from 'react'
import Pokemon from '../../component/Pokemon'
import useSWR from 'swr'
import { useNavigate } from "react-router-dom"
import { useState } from 'react';




function Page({ index }) {
  const { data: results, error } = useSWR(`${process.env.REACT_APP_BASEURL}/pokemon/?offset=${index}&limit=20`);
console.log("index", index)
  // Handle loading and error states
  if (error) return <div>Error fetching data</div>;
  if (!results) return <div>Loading...</div>;

  // Log the items in the console
  console.log("Returned items:", results.results);

  // Render the component
  return (
    <>
      {results?.results?.map((item, index) => {
        console.log("first, item", item)
        return ( 
        <Pokemon key={item.name} pokemon={item} />
   )})}
    </>
  );
}




const Pokedex = () => {
   const [pageIndex, setPageIndex] = useState (0);
  const { data: result, error } = useSWR(`${process.env.REACT_APP_BASEURL}/pokemon`)
  const navigate= useNavigate()
  if (error) return <h1>Something went wrong!</h1>
  if (!result) return <h1>Loading...</h1>
  return (
    <div>
       <button onClick={() => setPageIndex(pageIndex - 20)}>Previous</button>
    <button onClick={() => setPageIndex(pageIndex + 20)}>Next</button>
      <main className='App'>
      <h1>Pokedex</h1>
      <button onClick={()=>{navigate("/")}}>Go to Rick & Morty section</button>
        <div>
                <Page index={pageIndex} />

        {/* {result.results.map((pokemon) => (
          <Pokemon key={pokemon.name} pokemon={pokemon} />
        ))} */}
      </div>
    </main>
    </div>
  )
}

export default Pokedex