import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import {
    Home,
    Contact,
    Projects,
    Resume,
    Header,
    InfoBar,
} from "./components/index";

const App: React.FC = () => {
    return (
        <div className="App">
            <div className="app_div center_all">
                <InfoBar title="Site en cours de développement" type="dev" />
                <BrowserRouter>
                    <Header />
                    <Route path="/" exact component={Home} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/projects" exact component={Projects} />
                    <Route path="/resume" exact component={Resume} />
                </BrowserRouter>
            </div>
        </div>
    );
};

export default App;
