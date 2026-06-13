import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                         <li className="nav-item">
                            <Link className="nav-link" to="/event">Event</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/forms">Forms</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Display_data">Display_data</Link>
                        </li>
                         <li className="nav-item">
                            <Link className="nav-link" to="/UserList">UserList</Link>
                        </li>

                        
                    </ul>
                </div>
            </nav>

        </>
    )
}
