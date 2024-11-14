import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Order from './pages/Order'


function App() {
  const title = 'Simmer Soup Co'

  return (
    <>
      <Header title={title} />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/gallery" element={<Gallery />} />

          <Route path="/order" element={<Order />} />

        </Routes>
      </main>

      <Footer />

    </>
  )
}

export default App
