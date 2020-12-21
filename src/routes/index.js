import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Trending from "../pages/Trending/index";
import FilmeDetalhe from "../components/FilmeDetalhe/index";
import PessoaDetalhe from "../components/PessoaDetalhe/index";
import SerieDetalhe from "../components/SerieDetalhe/index";
import Favorito from "../pages/Favoritos/index";
import Pesquisa from "../components/Pesquisa/index";

export default function Routes() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Trending} />
          <Route path="/pesquisa" exact component={Pesquisa} />
          <Route path="/favoritos" component={Favorito} />
          <Route path="/pesquisa/pessoa/:id" component={PessoaDetalhe} />
          <Route path="/pesquisa/filme/:id" component={FilmeDetalhe} />
          <Route path="/pesquisa/serie/:id" component={SerieDetalhe} />
        </Switch>
      </Router>
    </div>
  );
}
