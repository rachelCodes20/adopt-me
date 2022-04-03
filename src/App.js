import SearchParams from './SearchParams'
//babel will import jsx for you
//sublevel components
//top level component
    //subcomponents within it
import ReactDOM from "react-dom";
import Pet from './Pet';

// const App = () => {
//     return React.createElement("div", {}, [
//     React.createElement("h1", "Adopt Me"),
//         React.createElement(Pet, { name : "Diggy", animal: "Dog", breed: "Shih -tzu"})
//     ])
// }

const App = () => {
    return (
        <div>
            <h1>Adopt Me</h1>
            <Pet name="Diggy" animal="Dog" breed="Shih Tsu" />
            <SearchParams />
        </div>
    )
}
//create and return a reat element (first arf)
ReactDOM.render(<App />, document.getElementById("root"));