import { Link } from "react-router-dom";
import logo from "/logo.png";
import whatsapp from "/whatsapp.gif";

const Nav = () => {
  return (
    <>
      <nav>
        <div className=" container flex_box box_shadow">
          <div className="logo fw_700">
            <img className="img" src={logo} alt="logo" />
            CocoAce Kollectibles
          </div>

          <div className="social">
            <div className="social_icon">
              <Link to="https://api.whatsapp.com/send?phone=2349023019070&text=hello20%my20%name20%is ">
                <img className="img" src={whatsapp} alt="whatsapp" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
