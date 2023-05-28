import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div> 
      <h1> Bem vindo a página home </h1> 
      <span> Sujeito Programador </span> <br /><br />

      <Link to="/sobre"> Sobre </Link><br /><br />
      <Link to="/contato"> Contato </Link>
    </div>
  )
}

export default Home