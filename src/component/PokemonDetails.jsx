import React from 'react'
import useSWR from 'swr'
import { useParams } from 'react-router-dom';

const PokemonDetails = () => {
  const { name } = useParams()
  const { data, error } = useSWR(`${process.env.REACT_APP_BASEURL}/pokemon/${name}`)
    
  console.log("firstjjjjjjjjjjj", data)
  return (
    <div>
      <h1>Pokedex <span> {data?.name} </span> info </h1>
      <div className='Card'>
          <span className='Card--name' style={{color:"#444"}}> {data?.name}</span>
            <img
                className='Card--image'
                 src={data?.sprites?.front_default}
          alt={name}
        />
        <div className>
          <h1 className='Card--name'>Abilities: {data?.abilities?.map((poke) => poke?.ability?.name).join(', ')}</h1>
          <span className='Card--name'>
          Height: {data?.height}
          <br/>
          Type: {data?.types[0]?.type?.name}
        </span>
        </div>
      </div>
      </div>

  )
}

export default PokemonDetails