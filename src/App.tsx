import { Suspense } from 'react'
import './App.css'
import Nav from './components/Nav'
import Techonologies from './components/Techonologies'
import type { ITechonologi } from './type/techonologiType'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'
import Hero from './components/Hero'




const techonologiFetch = async (): Promise<ITechonologi[]> => {
  const res = await fetch('/data.json')
  const data = await res.json();
  return data;
}


function App() {
  const techonologiPromise = techonologiFetch();

  return (
    <>

      <Nav></Nav>
      <Hero />
      <Suspense fallback={<h2 className='text-2xl text-red-500 font-bold h-50'>Loading......</h2>}>
        <Techonologies techonologiPromise={techonologiPromise} />

      </Suspense>
      <Footer></Footer>
      <ToastContainer />


    </>
  )
}

export default App
