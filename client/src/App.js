import "./App.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { Home } from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
