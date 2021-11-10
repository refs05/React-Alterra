import { NavLink } from "react-router-dom";

const NotFoundPage = ()=> {
    return (
        <div>
            <h1>Page Not found</h1>
            <NavLink to="/">Go Home</NavLink>
        </div>
    )
} 

export default NotFoundPage;