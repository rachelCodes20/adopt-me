import { StrictMode } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchParams from './SearchParams';
import Details from './Details';
//babel will import jsx 
//sublevel components
//top level component
    //subcomponents within it

const App = () => {

    return (
        <div>
        {/* <h1>Adopt Me</h1> */}
        <Router>
             <Route path= "/details/:id">
                 <Details />
             </Route>
             <Route path="/">
                 <SearchParams />
            </Route>
        </Router>
       
    </div>
    )
}
    

       
    
//create and return a react element (first arg) strictmode for stronger error messages
ReactDOM.render(<StrictMode><App /></StrictMode>, document.getElementById("root"));