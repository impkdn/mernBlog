import { Outlet, Link } from "react-router-dom";
import Header from "../element/Header/header";
function Layout ()   {
  return (
    <>
    <Header/>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav> */}

      {/* <Outlet /> */}
    </>
  )
};

export default Layout;