import { StrictMode } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SearchParams from './SearchParams';
import Details from './Details';
//babel will import jsx 
//sublevel components
//top level component
    //subcomponents within it

const App = () => {
    return (
        <div>  
            <Router>
                <header>
                    <Link to="/">               
                            <h1>Adopt Me</h1>
                    </Link>    
                </header>
                <Switch>
                     <Route path= "/details/:id">
                        <Details />
                    </Route>
                    <Route path="/">
                        <SearchParams />
                    </Route>
                </Switch>
            </Router>
    </div>
    )
}
    

       
    
//create and return a react element (first arg) strictmode for stronger error messages
ReactDOM.render(<StrictMode><App /></StrictMode>, document.getElementById("root"));