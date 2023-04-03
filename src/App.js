import React, { useState } from "react";
import "./App.css";
import Map from "./components/map";
import Chart from "./components/chart";
import Snr from "./components/snr";
import Raw from "./components/raw";
import Trubidite from "./components/turbidite";
import RawBar from "./components/topbar-et-sidbar/barRaw";
import Bar from "./components/navbar";
import Logging from "./components/logging";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        { /* at path root => render only the modified bar and the logging components */ }
        <Route exact path='/'>
            {/* Top bar modifier */}
            <RawBar/>
            {/* Se connecter */}
            <Logging/>
        </Route> 
        {/* Render other components  */}
        <Switch>
          <Route path="/home">
            <Bar />
            <div className="grid-container">
              <div className="map grid-item2">
                <Map />
              </div>

              <div className="grid-item1">
                <Chart />
              </div>

              <div className="grid-item4">
                <Snr />
              </div>

              <div className="grid-item3">
                <h4>Raw Telemetery</h4>
                <Raw />
              </div>

              <div className="grid-item5">
                <Trubidite />
                <h4>Turbidite</h4>
              </div>
            </div> 
          </Route>
          <Route path="/map">
            <Bar />
            <div className="component-map">
              <Map />
            </div>
          </Route>
          <Route path="/temperature">
            <Bar />
            <div className="component">
              <Chart />
            </div>
          </Route>
          <Route path="/rssisnr">
            <Bar />
            <div className="component">
              <Snr />
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}
export default App;
