import React from 'react'
import useSWR from 'swr'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
const RickDetails = () => {
  const { id } = useParams()
  const { data, error } = useSWR(`${process.env.REACT_APP_BASEURL2}/${id}`)
  console.log("Data", data)
  const [pageIndex, setPageIndex] = useState(1);
  
  return (
    <div>
      <div className=''>
          <span className='Card--name' style={{color:"#444"}}> {data?.name}</span>
            <img
                className='Card--image'
                src={data.image}
          alt={id}
        />
        <div className>
 <h1 className='Card--name'>
            Status: {data?.status}</h1> 
        
        <span className='Card--name'>
          Gender: {data?.gender}
          <br/>
           Location: {data?.location?.name}
          </span>
          <span>{data?.episode.map((data)=>data)}</span>
        </div>
      </div>
      </div>

  )
}

export default RickDetails