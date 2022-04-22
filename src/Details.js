
import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from './Carousel';

class Details extends Component {
    //constructor not needed if assigning to state like so
    state = { loading: true };
    
    // constructor () {
    //     super()
    //     this.state = { loading: true };
    // }
    async componentDidMount() {
        // match = mathed path + params + id
        const res =  await fetch(`http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`);
        const json = await res.json();
        //Obj assign will copy over all the properties of obj assisgn so we dont have to indiv add
        this.setState(Object.assign({},
            {
                loading: false
            },
            json.pets[0],
        )
        )
    }
    render () {
        console.log(this.state)
        if(this.state.loading){
            return (
                <div>
                    <h2>Loading ...</h2>
                </div>
            )
        }else{
            const { animal, breed, city, state, description, name, images } = this.state;
             return (
        <div className="details">
            <Carousel images={images} />
            <div>
                <h1>{name}</h1>
                <h2>{animal} : {breed} : {city} : {state}</h2>
                <button>ADOPT {name}</button>
                <p>{description}</p>
            </div>
        </div>
            )
        }
    }
}
//reactRouter info (props, etc) will be sent to route)
export default withRouter(Details);