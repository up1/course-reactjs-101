import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <>
            <div className={'nav-container'}>
                <div>React Hooks</div>
                <nav id="sidebar" className={'nav-item-container'}>
                    <NavLink to="/" className={"nav-item"}>Home</NavLink>
                    <NavLink to="/xyz">Xyz</NavLink>
                    <NavLink to="/not-found">Not Found</NavLink>
                </nav>
            </div>
            <hr />
        </>
    )
}