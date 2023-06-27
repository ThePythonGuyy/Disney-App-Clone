import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import "./App.css";
import Header from "./Layouts/Header";
import Login from "./Components/Login";
import Home from "./Components/Home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Header />}>
        <Route index element={<Login />} />
        <Route path='home' element={<Home />} />
      </Route>
    )
  )
  return (
    <>
      <div>

        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
