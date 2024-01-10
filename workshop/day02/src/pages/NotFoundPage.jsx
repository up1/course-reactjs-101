import { NavLink } from "react-router-dom"

export const NotFoundPage = () => {
    console.log("NotFoundPage ...")
    return (
        <>
           <NavLink to="/" className={"nav-item"}>Back to Home</NavLink>
            <h1>Not Found Page</h1>
        </>
    )
}