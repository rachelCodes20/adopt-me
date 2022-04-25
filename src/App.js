import { StrictMode, useState } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SearchParams from './SearchParams';
import Details from './Details';
import ThemeContext from './ThemeContext';
//babel will import jsx 
//sublevel components
//top level component
    //subcomponents within it

const App = () => {
const theme = useState('');
    return (
        <ThemeContext.Provider value={theme}>
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
        </ThemeContext.Provider>
      
    )
}
    

       
    
//create and return a react element (first arg) strictmode for stronger error messages
ReactDOM.render(<StrictMode><App /></StrictMode>, document.getElementById("root"));