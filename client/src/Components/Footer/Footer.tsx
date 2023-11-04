import { Link } from "react-router-dom";
import "./Footer.scss";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoYoutube,
} from "react-icons/bi";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="social-icon-wrapper">
          <ul>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/people/The-Practical-Doctor/61552908999749/?mibextid=ZbWKwL"
                  target="_blank"
                >
                  <BiLogoFacebook size={40} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/thepracticaldoctorindia/?igshid=YTQwZjQ0NmI0OA%3D%3D"
                  target="_blank"
                >
                  <BiLogoInstagram size={40} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@thepracticaldoctorindia"
                  target="_blank"
                >
                  <BiLogoLinkedin size={40} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@thepracticaldoctorindia"
                  target="_blank"
                >
                  <BiLogoYoutube size={40} />
                </a>
              </li>
            </ul>
          </ul>
        </div>
        <div className="footer-details">
          <ul>
            <ul>
              <a href="/patientinformation/all" className="link">
                <li>Useful Websites</li>
              </a>{" "}
              <Link to="/blogs" className="link">
                <li>Blogs</li>
              </Link>
              <Link to="/healthinformation/all" className="link">
                <li>Disease Catalogue</li>
              </Link>{" "}
              <Link to="/consulation" className="link">
                <li>Online Consultaion</li>
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
