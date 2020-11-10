import React from "react";
import Pesquisa from "./components/Pesquisa/index";
import PesquisaContextProvider from "./context/PesquisaContext";

function App() {
  return (
    <div className="App">
      <PesquisaContextProvider>
        <Pesquisa />
      </PesquisaContextProvider>
    </div>
  );
}

export default App;
