import React from "react";
import Pesquisa from "./components/Pesquisa/index";
import PesquisaContextProvider from "./context/PesquisaContext";
import Lista from "./components/Lista/index";
import Header from "./components/Header/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <PesquisaContextProvider>
          <Header />
          <Switch>
            <Route path="/" exact />
            <Route path="/pesquisa" component={Pesquisa} />
          </Switch>
        </PesquisaContextProvider>
      </Router>
    </div>
  );
}

export default App;
