import "./App.css";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import Reservations from "./Pages/Reservations";
import OrderOnline from "./Pages/OrderOnline";
import Login from "./Pages/Login";

//layouts
import Rootslayout from "./Layouts/Rootslayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={Rootslayout}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="menu" element={<Menu />} />
      <Route path="reservations" element={<Reservations />} />
      <Route path="OrderOnline" element={<OrderOnline />} />
      <Route path="Login" element={<Login />} />
    </Route>
  )
);
function App() {
  return (
    <>
      <Header />
      <Nav />
      <Main />
      <Footer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
