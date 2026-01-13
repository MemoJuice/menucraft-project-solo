import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/Header-Footer/Layout";
import HeroHome from "./views/HeroHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <div className="flex justify-center items-center">
        <h1 className="text-4xl">404 - Page Not Found</h1>
      </div>
    ),
    children: [{ path: "/", element: <HeroHome /> }],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
