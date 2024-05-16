import Layout from "./Layout";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";
import Home from "./components/Mainpage/Home";
import NewHome from "./components/Mainpage/NewHome";
import Products from "./components/Products/Products";
import BestSeller from "./components/Products/BestSeller";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Favorites from "./components/favorites/Favorites";
import EverydayEssentials from "./components/Products/EverydayEssentials";
import AccessoriesModels from "./components/Products/AccessoriesModels ";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<NewHome />} />
            <Route path="/products" element={<Products />}>
            <Route path="/products/bestsellers" element={<BestSeller/>}/>
            <Route path="/products/everyday-essentials" element={<EverydayEssentials/>}/>
            <Route path="/products/allaccessories" element={<AccessoriesModels/>}/>

            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
