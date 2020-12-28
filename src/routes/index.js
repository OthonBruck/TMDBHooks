import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Trending from "../pages/Trending/index";
import Filme from "../pages/Detalhes/Filme/index";
import Pessoa from "../pages/Detalhes/Pessoa/index";
import Serie from "../pages/Detalhes/Serie/index";
import Favorito from "../pages/Favoritos/index";
import Pesquisa from "../pages/Pesquisa/index";
import Error from "../pages/Error/index";

export default function Routes() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Trending} />
          <Route path="/pesquisa" exact component={Pesquisa} />
          <Route path="/favoritos" exact component={Favorito} />
          <Route path="/favoritos/pessoa/:id" component={Pessoa} />
          <Route path="/favoritos/filme/:id" component={Filme} />
          <Route path="/favoritos/serie/:id" component={Serie} />
          <Route path="/pessoa/:id" component={Pessoa} />
          <Route path="/filme/:id" component={Filme} />
          <Route path="/serie/:id" component={Serie} />
          <Route path="/pesquisa/pessoa/:id" component={Pessoa} />
          <Route path="/pesquisa/filme/:id" component={Filme} />
          <Route path="/pesquisa/serie/:id" component={Serie} />
          <Route path="*" component={Error} />
        </Switch>
      </Router>
    </div>
  );
}
