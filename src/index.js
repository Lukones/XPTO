import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageFriend from "./pages/pagefriend/pagefriend";
import Sport from "./pages/sport/sport";
import Faq from "./pages/faq/faq"; 

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  
    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      background: #fff;
    }

    ::-webkit-scrollbar-thumb {
      background: linear-gradient(to bottom, #81A4FC 0%, #A174FC 100%);
      border-radius: 5px;
    }
    
    ::-webkit-scrollbar {
      border-radius: 10px;
}
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "friend",
    element: <PageFriend />,
  },
  {
    path: "sport",
    element: <Sport />,
  },
  {
    path: "faq",
    element: <Faq />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);