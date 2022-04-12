import SearchParams from './SearchParams';
//babel will import jsx 
//sublevel components
//top level component
    //subcomponents within it
import ReactDOM from "react-dom";

const App = () => (
        <div>
            <h1>Adopt Me</h1>
            <SearchParams />
        </div>
    )
//create and return a reat element (first arf)
ReactDOM.render(<App />, document.getElementById("root"));