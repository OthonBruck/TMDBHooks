import React from "react";
import Header from "./components/Menu/index";
import FavoritoContextProvider from "./context/FavoritoContext";
import PesquisaContextProvider from "./context/PesquisaContext";
import Routes from "./routes/index";

function App() {
  return (
    <div>
      <FavoritoContextProvider>
        <PesquisaContextProvider>
          <Routes />
        </PesquisaContextProvider>
      </FavoritoContextProvider>
    </div>
  );
}

export default App;
