import logo from "../assests/icons2.png";
import navIcon1 from "../assests/nav-icon1.svg";
import navIcon2 from "../assests/whatsapp3.svg";
import navIcon3 from "../assests/nav-icon3.svg";
import { Link } from "react-router-dom";
function Footer() {
  return (
        <div className="footer_first">
          <div className="footer_logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="footer_second">
            <div className="social-icon">
              <Link  className='linkedin' to="https://www.linkedin.com/in/nadeenshaik/" target="_blank">
                <img src={navIcon1} alt="icon" />
              </Link>
              <Link  className='whatsapp' to="https://api.whatsapp.com/send?phone=919182320462&utm_source=Messaging&utm_medium=Whatsapp" target="_blank">
                <img src={navIcon2} alt="icon" />
              </Link>
              <Link className="instagram" to="https://www.instagram.com/nadeenshaik/" target="_blank">
                <img src={navIcon3} alt="icon" />
              </Link>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </div>
        </div>
  );
}
export default Footer;
