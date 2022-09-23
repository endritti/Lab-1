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
      <div className="container">
        <Navigation />

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
