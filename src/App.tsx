import { Suspense } from 'react'
import './App.css'
import Nav from './components/Nav'
import Techonologies from './components/Techonologies'
import type { ITechonologi } from './type/techonologiType'




const techonologiFetch = async ():Promise<ITechonologi[]> => {
  const res = await fetch('/data.json')
  const data = await res.json();
  return data;
}


function App() {
  const techonologiPromise = techonologiFetch();

  return (
    <>

      <Nav></Nav>

      <Suspense fallback={<h2>Loading......</h2>}>
        <Techonologies techonologiPromise={techonologiPromise} />

      </Suspense>
    
    
      {/* <Hero></Hero> */}
    </>
  )
}

export default App
