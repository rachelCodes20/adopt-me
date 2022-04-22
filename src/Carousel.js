import { Component } from "react";

class Carousel extends Component {
    state = {
        active: 0
    };
    //in case no props are passed
    static defaultProps = {
        images: ['http://pets-images.dev-apis.com/pets/none.jpg']
    }
    
    render () {
        const { active } = this.state;
        const { images } = this.props;
        console.log('imag ', images)


        return (
            <div className="carousel">
                <img src={images[active]} alt="animal"/>
                <div className="carousel-smaller">
                    {images.map((photo, index) => {
                        return ( 
                        <img 
                        key={photo}
                        src={photo}
                        className={index === active ? active : ""}
                        alt="animal-thumbnail"
                        />
                        )
                    })}
                </div>
            </div>
        )
    }
}


export default Carousel;