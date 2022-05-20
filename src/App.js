import React from "react";
import CardCatalog from "./CardCatalog";

import "./App.css";

const App = () => {
   return (
      <div className="mypage">
         <div className="gutter"></div>
         <CardCatalog />
         <div className="gutter"></div>
      </div>
   );
};

export default App;
