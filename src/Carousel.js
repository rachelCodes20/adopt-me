import { Component } from "react";

class Carousel extends Component {
    state = {
        active: 0
    };
    //in case no props are passed
    static defaultProps = {
        images: ['https://thumbs.modthesims2.com/img/2/5/2/7/8/0/2/MTS_traelia-1316840-MTSPromo.jpg']
    }
    
    handleIndxClick(event) {
        this.setState = ({
            //coerce to a num with +
            active : +event.target.dataset.index
        });
    }
    render () {
        const { active } = this.state;
        const { images } = this.props;

        return (
            <div className="carousel">
                <img src={images[active]} alt="animal"/>
                <div className="carousel-smaller">
                    {images.map((photo, index) => {
                        //eslint-disable-next-line
                        return ( 
                        <img 
                        key={photo}
                        src={photo}
                        data-index={index}
                        onClick={this.handleIndxClick.bind(this)}
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