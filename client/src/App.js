// import logo from './logo.svg';
import "./App.css";
import Header from "./element/Header/header.js";
import Layout from "./pages/layout.js";
import Signup from "./pages/signUp.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home.js";
import Blogs from "./pages/blogs.js";
import Login from "./pages/login.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<Home />}></Route>
          <Route path="/signup" element= {<Signup/>}></Route>
          <Route path = "/login" element= {<Login/>}></Route>
          {/* <Route path="blogs" element={<Blogs />} /> */}
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
