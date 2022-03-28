import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
        <div>
            <div className="">
                <footer style={{ backgroundColor: '#C1E3CE' }}>
                    <div className="container p-4">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 mb-4">
                                <h5 className="mb-3" style={{ letterSpacing: 2, color: '#818963' }}>Beauty Fresh</h5>
                                <p>
                                    Deliver between 1-3 working days<br />
                                    Register now to get 10% off your 1st purchase!*<br />
                                    Free delivery on orders above $60.00<br />
                                    Deliver between 1-3 working days<br />
                                    Register now to get 10% off your 1st purchase!*
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4">
                                <h5 className="mb-3" style={{ letterSpacing: 2, color: '#818963' }}>INFORMATION</h5>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-1">
                                        <a href="" style={{ color: '#4f4f4f' }}>Abouts Us</a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="" style={{ color: '#4f4f4f' }}>Career</a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="" style={{ color: '#4f4f4f' }}>Contact us</a>
                                    </li>
                                    <li>
                                        <a href="" style={{ color: '#4f4f4f' }}>Sitemap</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4">
                                <h5 className="mb-1" style={{ letterSpacing: 2, color: '#818963' }}>Opening hours</h5>
                                <table className="table" style={{ color: '#4f4f4f', borderColor: '#666' }}>
                                    <tbody>
                                        <tr>
                                            <td>Mon - Fri:</td>
                                            <td>8am - 9pm</td>
                                        </tr>
                                        <tr>
                                            <td>Sat - Sun:</td>
                                            <td>8am - 1am</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        © 2022 Copyright:
                        <a className="text-dark" href="https://mdbootstrap.com/">Huongbtph16610</a>
                    </div>
                    {/* Copyright */}
                </footer>
            </div>
            {/*End of.container-- >
    )
}
*/}</div>
    )
}


export default Footer