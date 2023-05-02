// import React from 'react'
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <p>Home</p>
      <p>This is Home Page</p>
      <Link to="/about">Go to About Page</Link>
    </div>
  )
}

export default Home;