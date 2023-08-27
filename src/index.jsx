import React from "react";
import ReactDOMClient from "react-dom/client";
import { Index } from "./screens/index";

const app = document.getElementById("root");
const root = ReactDOMClient.createRoot(app);
root.render(<Index />);
