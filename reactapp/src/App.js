import logo from "./logo.svg";
import "./App.css";

import { Movies } from "./admin/Movies";
import { Genre } from "./admin/Genre";
import { Series } from "./admin/Series";
import { Actors } from "./admin/Actors";
import { Producer } from "./admin/Producer";
import { Users } from "./admin/Users";
import { Navigation } from "./Navigation";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <div className="container">
        <Navigation />
=======
    <div className="container-fluid">
>>>>>>> b92a11d421ae2bc616446d287a31988785c96ad5

        <Switch>
          <Route path="/admin/movies" component={Movies} exact />
          <Route path="/admin/series" component={Series} />
          <Route path="/admin/genre" component={Genre} />
          <Route path="/admin/actors" component={Actors} />
          <Route path="/admin/producer" component={Producer} />
          <Route path="/admin/useri" component={Users} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
