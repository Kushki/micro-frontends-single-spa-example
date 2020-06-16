import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { LifeCycles, registerApplication, start } from "single-spa";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

registerApplication({
  name: "app-angular",
  app: (): Promise<LifeCycles> => (window as any).System.import("http://localhost:4200/main.js"),
  activeWhen: "/angular"
});

registerApplication({
  name: "app-react",
  app: (): Promise<LifeCycles> => (window as any).System.import("@single-spa-test/app-react"),
  activeWhen: "/react"
});

start();
