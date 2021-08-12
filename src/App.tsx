import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
    Home,
    Contact,
    Projects,
    Resume,
    Header,
    InfoBar,
    MissingPage,
    ProjectDetails,
} from "./components/index";

// Liste des projets
const App: React.FC = () => {
    return (
        <div className="App">
            <div className="app_div center_all">
                <InfoBar title="Website in developement" type="dev" />
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/contact" exact component={Contact} />
                        <Route path="/projects" exact component={Projects} />
                        <Route
                            path="/projects/ogites"
                            component={ProjectDetails}
                        />
                        <Route
                            path="/projects/geoworld"
                            component={ProjectDetails}
                        />
                        <Route path="/resume" exact component={Resume} />
                        <Route path="/" component={MissingPage} />
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    );
};

export default App;
