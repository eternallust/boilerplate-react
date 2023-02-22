import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
