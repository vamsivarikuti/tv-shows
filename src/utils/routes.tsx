import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../common/Layout";
import { HomePage } from "../pages/HomePage";
import { ShowPage } from "../pages/ShowPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/show/:id",
        element: <ShowPage />,
      },
    ],
  },
]);
