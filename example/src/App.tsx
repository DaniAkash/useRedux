import * as React from 'react'
import Tasks from './Components/Tasks'
import Footer from './Components/Footer'
import InputField from './Components/InputField'

export default function App() {
  return (
    <div className='App'>
      <InputField />
      <Tasks />
      <Footer />
    </div>
  )
}
