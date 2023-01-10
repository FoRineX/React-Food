import { Footer } from './Components/Footer'
import { Header } from './Components/Header'

import { Outlet } from "react-router-dom";


function App() { 
  return (
    <>
      <Header/>
      <main className='container content'>
      <Outlet/>
      </main>
      <Footer/>
    </>
    )
}

export default App;
