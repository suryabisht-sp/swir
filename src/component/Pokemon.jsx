import React from 'react'
import useSWR from 'swr'
import {useNavigate} from "react-router-dom"
// We are now able to fetch remote data with SWR. However, this setup is a local one and can be a bit redundant as we are using the same fetcher function in home.js and pokemon.js to do the same thing. 
// const fetcher = (...args) => fetch(...args).then((res) => res.json())

const Pokemon = ({ pokemon }) => {
  const navigate= useNavigate()
    const { name } = pokemon
    const { data, error } = useSWR(`${process.env.REACT_APP_BASEURL}/pokemon/${name}`)

    if (error) return <h1>Something went wrong!</h1>
  if (!data) return <h1>Loading...</h1>
  

  const handleDetailPokemon = (name) => {
    navigate(`/pokemon/${name}`)
  }    
  
    return (
         <div className='Card' onClick={()=>{handleDetailPokemon(name)}}>
            <span className='Card--id'>#{data.id}</span>
            <img
                className='Card--image'
                src={data?.sprites?.front_default}
                   alt={name}

        />
            <h1 className='Card--name'>{name}</h1>
            <span className='Card--details'>
          {data?.types?.map((poke) => poke?.type?.name).join(', ')}
            </span>
        </div>
    )
}

export default Pokemon