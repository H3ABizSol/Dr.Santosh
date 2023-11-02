import { Link } from "react-router-dom";
import "./Footer.scss";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
} from "react-icons/bi";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="social-icon-wrapper">
          <ul>
            <ul>
              <li>
                <a href="tel:+">
                  <BiLogoFacebook size={40} />
                </a>
              </li>
              <li>
                <a href="tel:+">
                  <BiLogoInstagram size={40} />
                </a>
              </li>
              <li>
                <a href="tel:+">
                  <BiLogoLinkedin size={40} />
                </a>
              </li>
            </ul>
          </ul>
        </div>
        <div className="footer-details">
          <ul>
            <ul>
              <Link to="/consulation" className="link">
                <li>online consultaion</li>
              </Link>{" "}
              <a href="/patientinformation/all" className="link">
                <li>Patientinfo</li>
              </a>{" "}
              <Link to="/healthinformation" className="link">
                <li>Healthinfo</li>
              </Link>{" "}
              {/* <li style={{ color: "#551A8B" }}>
                Diseases
                <ul className="sub-menu-ul">
                  {diseaseDetails.length > 0 &&
                    diseaseDetails.map((d: any) => {
                      return (
                        <a href={`/disease/${d.diseaseName}`} className="link">
                          <li style={{ fontSize: "1.2rem" }}>
                            {d.diseaseName}
                          </li>
                        </a>
                      );
                    })}
                </ul>
              </li> */}
              <Link to="/blogs" className="link">
                <li>Blogs</li>
              </Link>
            </ul>
          </ul>
        </div>
        <div className="copyright">
          <p>
            © Copyright 2023, all right reserved H3A Business Solutions Pvt Ltd
          </p>
        </div>
      </footer>
    </>
  );
};
