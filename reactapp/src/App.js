import logo from './logo.svg';
import './App.css';

import {Movies} from './admin/Movies';
import {Genre} from './admin/Genre';
import {Series} from './admin/Series';
import {Navigation} from './Navigation';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="container-fluid">


     <Navigation/>

     <Switch>
       <Route path='/admin/movies' component={Movies} exact/>
       <Route path='/admin/series' component={Series}/>
       <Route path='/admin/genre' component={Genre}/>     
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;