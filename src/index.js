import React , {useState} from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";
import {Link, Router} from "@reach/router";
import Details from "./Details";
import ThemeContext from "./ThemeContext";
import "./style.css";
const App = () => {
    const themeHook  =useState("peru");
     return(
       <ThemeContext.Provider value={themeHook}>
           <div>
        <header>
        <Link to="/">
              Adopt Me!
        </Link>
        </header>
        <Router>
        <SearchParams path="/"/>
        <Details path="/details/:id" />
        </Router>
      </div>
       </ThemeContext.Provider>
     );
  };
  
  ReactDOM.render(<App/>, document.getElementById("root"));