import React from 'react'
import Navbar from './component/Navbar.jsx'
import NewsBoard from './component/NewsBoard.jsx'
import NewsItem from './component/NewsItem.jsx'
import { useState } from 'react'

const App = () => {

  const [category, setCategory] = useState("general");
  return (
    <>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />

    </>
  )
}

export default App
