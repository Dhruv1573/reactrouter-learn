import { Link } from "react-router-dom"

const Page404=()=>{
    return(
        <div>
            <h1>This is 404 Page</h1>
            <p>You are accessing invalid url</p>
            <Link to="/">Go to Home Page</Link>
        </div>
    )
}

export default Page404