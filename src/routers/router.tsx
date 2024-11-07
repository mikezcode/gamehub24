import { createBrowserRouter } from "react-router-dom";
import GameDetailPage from "../pages/GameDetailPage";
import Layout from "../pages/Layout";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "games/:slug",
        element: <GameDetailPage />,
      },
    ],
  },
]);

export default router;
