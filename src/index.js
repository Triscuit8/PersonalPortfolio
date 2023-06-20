import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AboutMe from "./pages/AboutMe";
import MyProjects from "./pages/MyProjects";
import Extracurricular from "./pages/Extracurricular";
import Contact from "./pages/Contact";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "AboutMe",
    element: <AboutMe />,
  },
  {
    path: "MyProjects",
    element: <MyProjects />,
  },
  {
    path: "Extracurricular",
    element: <Extracurricular />,
  },
  {
    path: "Contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
