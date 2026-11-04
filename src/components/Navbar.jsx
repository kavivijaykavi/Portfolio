import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "../styles/Navbar.css"

function Navbar() {
    const [show, setShow] = useState(false);
    const menus = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ]

    return (
        <>
            <nav className='navbar'>
                <Link style={{textDecoration:"none", color:"#fff"}} path="/">
                    <h2>Kavitha V</h2>
                </Link>
                <button className='menubar' type='button' onClick={() => setShow(!show)}>
                    {show ? <i className="bi bi-x-circle"></i> : <i className="bi bi-list"></i>}
                </button>
                <ol className={show? "menulistactive":"menulist"}>
                    {
                    menus.map((items, index) => (
                        <li key={index}><Link path={items.path}>{items.name}</Link></li>
                    ))
                    }
                </ol>
            </nav>
        </>
    )
}

export default Navbar