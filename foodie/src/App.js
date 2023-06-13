import Header from "./Header";
import Home from "./components/Home";
import About from "./components/About";
import { Route, Switch } from 'react-router-dom';

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path="/about" component={About} />
            </Switch>
        </div>
    )

}

export default App;
