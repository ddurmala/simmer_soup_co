import { NavLink } from 'react-router-dom'

import logo from '../../assets/ssco_logo.png'

function Header() {
    return (

        <header className="header d-flex flex-column justify-content-between align-items-center mb-3 py-2">
            <NavLink to="/">
                <img src={logo} alt='simmer soup logo' className='logo '></img>
            </NavLink>

            <nav className="nav-links d-flex mt-auto py-3">
                <NavLink to="/" className='nav-link mx-3'>Home</NavLink>

                <NavLink to="/gallery" className='nav-link mx-3'>Gallery</NavLink>

                <NavLink to="/order" className='nav-link mx-3'>Order</NavLink>
            </nav>
        </header>
    )

}

export default Header;