import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Home, Contact, Projects, Resume, Header } from "./components/index";

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <BrowserRouter>
                <Route path="/" exact component={Home} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/projects" exact component={Projects} />
                <Route path="/resume" exact component={Resume} />
            </BrowserRouter>
        </div>
    );
};

export default App;
