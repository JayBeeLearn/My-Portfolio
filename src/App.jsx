import { useState } from "react";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MasterLayouts from "./Layouts/MasterLayouts";
import Header from "./Components/Header";
import Profile from "./Profile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MasterLayouts />}>
      <Route index element={<Profile />} />
    </Route>
  )
);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
