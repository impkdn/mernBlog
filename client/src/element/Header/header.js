import logo from '../Header/images.png'
import './header.css'

function Header() {
  return(

    <div className="hc">
      <header className="hdr">
        <div className="logoImg">
        <img src={logo} alt="Logo" />
            
        </div>
        <nav  class="navBar">
            <ul>
                <li>
                  <a className="pageLinks" href="./pages/aboutUs.html" target="_blank">About Us</a>
                  
                </li>
                <li>
                  <a className="pageLinks" href="./pages/business.html" target="_blank">Business</a>
                    
                </li>
                <li>
                  <a className="pageLinks" href="./pages/contactUs.html" target="_blank">Contact Us</a>
                  
                </li>
                <li>
                  <a className="pageLinks" href="./pages/logIn.html" target="_blank">Log In</a>

                    
                </li>
            </ul>
        </nav>
        <div id="text">

        </div>
      </header>

      <nav></nav>
    </div>
  );
}

export default Header;