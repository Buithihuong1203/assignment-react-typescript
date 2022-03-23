import Nav from '../../src/components/Nav';
import Search from '../../src/components/Search';

import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <header>
            <div className="logo text-center container my-5">
                <img src="https://picsum.photos/130/40" alt="" />
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light container my-5">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <Nav />
                        <Search />
                    </div>
                </div>
            </nav>

        </header>
    )
}

export default Header