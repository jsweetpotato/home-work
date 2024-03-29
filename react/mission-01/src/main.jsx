import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const rootElement = document.getElementById("app");
const reactDomRoot = createRoot(rootElement);

reactDomRoot.render(<App />);
