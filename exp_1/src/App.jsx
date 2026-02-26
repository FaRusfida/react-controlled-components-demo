import { useState } from 'react'
import './App.css'
import FormComponent from './components/FormComponent'

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>STUDENT REGISTRATION FORM</h1>
        <p></p>
      </header>
      <main className="app-main">
        <FormComponent />
      </main>
    </div>
  )
}

export default App
