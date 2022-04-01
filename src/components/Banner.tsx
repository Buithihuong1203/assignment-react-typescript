import React from 'react'

type Props = {}

const Banner = (props: Props) => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide  my-5" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                <li data-target="#carouselExampleIndicators" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="https://picsum.photos/1920/500?auto=yes&bg=666&fg=444&text=First slide" alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://picsum.photos/1920/500?auto=yes&bg=666&fg=444&text=Second slide" alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://picsum.photos/1920/500?auto=yes&bg=555&fg=333&text=Third slide" alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />

            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />

            </a>
        </div>


    )
}

export default Banner