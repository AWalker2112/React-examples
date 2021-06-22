import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import Home from './Home';
import About from './About';
import Shop from "./Shop";


const Director = () => {

    return (
        <>
            <Router>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Home}/>
                        
                    
                    <Route path="/about" component={About}/>
                        
                    
                    <Route path="/shop" component={Shop}/>
                        
                    
                </Switch>
            </Router>


        </>
    )
}

export default Director;