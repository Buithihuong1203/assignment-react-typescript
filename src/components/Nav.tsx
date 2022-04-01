import React from 'react'

type Props = {}

const Nav = (props: Props) => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">SPECIAL DEALS</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">BRANDS</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">WHAT'S NEW</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">FRAGRANCE</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled">CONTACT</a>
            </li>
        </ul>
    )
}

export default Nav