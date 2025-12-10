import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ContactPage from "./pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "sobre-mi", element: <AboutPage /> },
      { path: "servicios", element: <ServicesPage /> },
      { path: "portafolio", element: <PortfolioPage /> },
      { path: "portafolio/:slug", element: <ProjectDetailPage /> },
      { path: "contacto", element: <ContactPage /> },
    ],
  },
]);
