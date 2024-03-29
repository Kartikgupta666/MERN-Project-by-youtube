import React from 'react'

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{"object-fit" : "contain !important" }}>
                <div className="carousel-caption d-none d-md-block" style={{"zIndex" : "10"}}>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                    </form>
                </div>
                <div className="carousel-inner" id="carousel">
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/900×700/?pastry" className="d-block w-100" style = {{"filter" : "brightness(30%)"}} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900×700/?burger" className="d-block w-100" style = {{"filter" : "brightness(30%)"}} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900×700/?noodles" className="d-block w-100" style = {{"filter" : "brightness(30%)"}} alt="..." />
                    </div>
                </div>
                
            </div>
        </div>
    )
}
