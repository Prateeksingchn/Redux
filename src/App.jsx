import { useState } from 'react'
import './App.css'
import { useSelector } from 'react-redux'

function App => () {
  const { value } = useSelector((state) => state.counterReducer);

  return (
    <div className='mt-2 w-[80%] mx-auto p-10'>
        <h1 className='text-4xl'>Counter: {value}</h1>
    </div>
  )
}

export default App
