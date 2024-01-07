import { useState } from 'react'
import './App.css'
import TopNav from './Components/TopNav'
import Featured from './Components/Featured'
import Delivery from './Components/Delivery'
import TopPicks from './Components/TopPicks'
import Meal from './Components/Meal'
import Catagory from './Components/Catagory'
import NewsLetters from './Components/NewsLetters'
import Footer from './Components/Footer'

function App() {

  return (
<div className="app">
  <TopNav/>
  <Featured/>
  <Delivery/>
  <TopPicks/>
  <Meal/>
  <Catagory/>
  <NewsLetters/>
  <Footer/>
  
</div>
  )
}

export default App
