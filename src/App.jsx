import React, { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ImageBox from './components/ImageSection/ImageBox'
import './App.css'

const matrix = [
  [0,0], [1,0], [2,0], [3,0],
  [0,1], [1,1], [2,1], [3,1],
  [0,2], [1,2], [2,2], [3,2],
  [0,3], [1,3], [2,3], [3,3],
  [0,4], [1,4], [2,4], [3,4],
  [0,5], [1,5], [2,5], [3,5],
  [0,6], [1,6], [2,6], [3,6]
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Header />
      <Footer />
      <div className="wrapper">
        <div className="image-container">
          {matrix.map(([x,y], index) => (
            <ImageBox key={index} x={x} y={y} />
          ))}
        </div>
      </div>
      
    </main>
  )
}

export default App
