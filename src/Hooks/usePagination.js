/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import useSWR from 'swr'
import Pokemon from '../component/Pokemon'
import  useSWRPages  from 'swr';

export const usePagination = (path) => {
    console.log("use hook custom", path)
    const { pages, isLoadingMore, loadMore, isReachingEnd } = useSWRPages(
        'pokemon-page',
        ({ offset, withSWR }) => {
          
            const url = offset || `https://pokeapi.co/api/v2${path}`
            const { data: result, error } = withSWR(useSWR(url))
console.log("first", result)
            if (error) return <h1>Something went wrong!</h1>
            if (!result) return <h1>Loading...</h1>

            return result.results.map((pokemon) => (
                <Pokemon key={pokemon.name} pokemon={pokemon} />
            ))
        },
        (SWR) => SWR.data.next,
        []
    )
  console.log("things", pages, isLoadingMore, loadMore, isReachingEnd)
    return { pages, isLoadingMore, loadMore, isReachingEnd }
}