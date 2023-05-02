// import React from 'react'
import { Link,useNavigate } from "react-router-dom";
const Home = () => {
  const navigate=useNavigate();
  const navToPage=(url)=>{
    navigate(url);
  }
  return (
    <div>
      <p>Home</p>
      <p>This is Home Page</p>
      <Link to="/about">Go to About Page</Link><br />
      {/* <button onClick={()=>navigate("/about")}>Go to About</button> <br />
      <button onClick={()=>navigate("/filter")}>Go to User</button> */}
      <button onClick={()=>navToPage("/about")}>Go to About</button> <br />
      <button onClick={()=>navToPage("/filter")}>Go to Filter</button> 

    </div>
  )
}

export default Home;

//useNavigate -> it helps us to navigate the pages based on\
// click on button or based on function calls.