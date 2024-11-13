import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'

import Home from './pages/Home'
import Gallery from './pages/Gallery'


function App() {
  const title = 'Simmer Soup Co'

  return (
    <>
      <Header title={title} />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          /
          <Route path="/gallery" element={<Gallery />} />

        </Routes>
      </main>

      {/* <Footer /> */}

    </>
  )
}

export default App
