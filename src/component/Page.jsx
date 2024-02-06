import { useState } from 'react';
import useSWR from 'swr'

function Page({ index }) {
  const { data } = useSWR(`/api/data?page=${index}`);
 
  // ... handle loading and error states
 
  return data.map(item => <div key={item.id}>{item.name}</div>)
}
 
function App () {
  const [pageIndex, setPageIndex] = useState(0);
 
  return <div>
    <Page index={pageIndex}/>
    <button onClick={() => setPageIndex(pageIndex - 1)}>Previous</button>
    <button onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
  </div>
}