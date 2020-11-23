import './App.css'
import React from 'react'
import Card from './Card'
import data from './testing'
import Header from './Header';
import { useSelector } from 'react-redux'

const App = () => {
  const c = useSelector(state => state.data)
  console.log(c)
  return (
    <>
      <Header
        data={data}
      />

      <div className={"App"}>

        <Card
          data={data}
        />

      </div>
    </>
  )
}

export default App
