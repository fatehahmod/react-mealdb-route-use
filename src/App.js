
import { BrowserRouter,Switch,Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Restaurent from './Components/Restaurent/Restaurent';
import SingleMeal from './Components/SingleMeal/SingleMeal';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Link to="/restaurent">Restaurent</Link>
     
      <Switch>
        <Route path="/restaurent">
          <Restaurent></Restaurent>

        </Route>
        <Route path="/singleMeal/:meals">
          <SingleMeal></SingleMeal>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
