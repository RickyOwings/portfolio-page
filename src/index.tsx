import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './app'

function main(): void {
    document.body.innerHTML = '<div id="app"></div>'
    const appDOM = document.getElementById("app");
    if (!appDOM) return;
    const root = createRoot(appDOM);
    root.render(<App/>)
}
main();
