import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./App.tsx";

import "@patternfly/react-core/dist/styles/base.css";
import "@patternfly/patternfly/patternfly-addons.css";
import "./fonts.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
