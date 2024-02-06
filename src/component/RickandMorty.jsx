import React from 'react'
import useSWR from 'swr'
import { useUrl } from '../Hooks/useUrl'
import {useNavigate} from "react-router-dom"

const RickAndMorty = ({ pokemon }) => {
  const { name, id } = pokemon  
  const { data, error } = useUrl(`/${id}`)
  const navigate= useNavigate()
    if (error) return <h1>Something went wrong!</h1>
    if (!data) return <h1>Loading...</h1>
  
  const handleDetailPokemon = (id) => {
    navigate(`/rick&morty/${id}`)
  }
    return (
         <div className='Card' onClick={()=>{handleDetailPokemon(data?.id)}}>
            <span className='Card--id'>#{data.id}</span>
            <img
                className='Card--image'
                  src={data.image}
          alt={name}

        />
            <h1 className='Card--name'>{name}</h1>
            <span className='Card--details'>
           {data?.species}
          </span>
        </div>
    )
}

export default RickAndMorty