import React from "react";
import Pesquisa from "./components/Pesquisa/index";
import PesquisaContextProvider from "./context/PesquisaContext";
import Lista from "./components/Lista/index";

function App() {
  return (
    <div className="App">
      <PesquisaContextProvider>
        <Pesquisa />
        <Lista />
      </PesquisaContextProvider>
    </div>
  );
}

export default App;
