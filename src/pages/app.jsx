import React from "react";

import Header from "../organisms/header";
import Layout from "../templates/layout";
import Menu from "../organisms/menu";
import InputSearch from "../organisms/search";


function App() {
  return (
    <div>
      <Layout> 
        <Header />
        <Menu />
        <InputSearch />
        
      </Layout>
    </div>
  );
}

export default App;

