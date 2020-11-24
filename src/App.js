import React from "react";
import Pesquisa from "./components/Pesquisa/index";
import PesquisaContextProvider from "./context/PesquisaContext";
import Header from "./components/Menu/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/index";
import FilmeDetalhe from "./components/FilmeDetalhe/index";
import PessoaDetalhe from "./components/PessoaDetalhe/index";
import SerieDetalhe from "./components/SerieDetalhe/index";

function App() {
  return (
    <div>
      <Router>
        <PesquisaContextProvider>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/pesquisa" exact component={Pesquisa} />
            <Route path="/pesquisa/pessoa/:id" component={PessoaDetalhe} />
            <Route path="/pesquisa/filme/:id" component={FilmeDetalhe} />
            <Route path="/pesquisa/serie/:id" component={SerieDetalhe} />
          </Switch>
        </PesquisaContextProvider>
      </Router>
    </div>
  );
}

export default App;
