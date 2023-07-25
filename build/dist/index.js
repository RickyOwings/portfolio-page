import React from "../snowpack/pkg/react.js";
import {createRoot} from "../snowpack/pkg/react-dom/client.js";
import App from "./app.js";
function main() {
  document.body.innerHTML = '<div id="app"></div>';
  const appDOM = document.getElementById("app");
  if (!appDOM)
    return;
  const root = createRoot(appDOM);
  root.render(/* @__PURE__ */ React.createElement(App, null));
}
main();
