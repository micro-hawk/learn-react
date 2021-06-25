import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar dark color="danger">
        <div className="container">
          <NavbarBrand href="/">MicroHawk</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
