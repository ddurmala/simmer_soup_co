import { NavLink } from 'react-router-dom'

import logo from '../../assets/ssco_logo.png'

function Header() {
    return (

        <header className="header py-3">
            <div className="container is-flex is-flex-direction-column is-align-items-center">
                <NavLink to="/" className="mb-3">
                    <img src={logo} alt='simmer soup logo' className='logo image'></img>
                </NavLink>

                <nav className="nav-links is-flex is-justify-content-center mb-2">
                    <NavLink to="/" className='nav-link mx-3'>Home</NavLink>

                    <NavLink to="/gallery" className='nav-link mx-3'>Gallery</NavLink>

                    <NavLink to="/order" className='nav-link mx-3'>Order</NavLink>
                </nav>
            </div>
        </header>
    )

}

export default Header;