/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Main from "./main";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
);
