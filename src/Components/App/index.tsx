import * as React from "react";
import Routes from "Routes";
import { Global } from "@emotion/react";
import GlobalStyle from "./style";

function App() {
  return (
    <>
      <Global styles={GlobalStyle} />
      <Routes />
    </>
  );
}

export default App;
