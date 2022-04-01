import Nav from '../../src/components/Nav';
import Search from '../../src/components/Search';

import React from 'react'
import Banner from './Banner';

type Props = {}

const Header = (props: Props) => {
    return (
        <header>
            <div className="text-center " style={{ backgroundColor: '#C1E3CE' }}>
                <p>HỆ THỐNG PHÂN PHỐI NẾN CHÍNH HÃNG AN TOÀN & UY TÍN NHẤT CẢ NƯỚC</p>

            </div>
            <div className="container my-8 w-3/6 flex">
                <div className='row'>
                    <div className="col-lg-6 col-md-12 mb-4">
                        <img src="	http://u639672.webmienphi.vn/userfiles/img/639672/beautyfresh_logo_1.png" width="20%" alt="" className="" />
                    </div>
                    <div className="col-lg-6 col-md-12 mb-4">
                        <Search />
                    </div>

                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <Nav />


                    </div>

                </div>
            </nav>
            <Banner />
        </header>
    )
}

export default Header