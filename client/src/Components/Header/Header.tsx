import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { AiOutlineClose, AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
// import Healthinfo from "../../Pages/Healthinfo/Healthinfo";

export const Header = () => {
  // const [diseaseDetails, setDiseaseDetails] = React.useState([] as any);
  const [blogs, setBlogs] = React.useState([] as any);

  const [patientInfo, setPatientInfo] = React.useState([] as any);
  const [healthInfo, setHealthInfo] = React.useState([] as any);

  const [serachBool, setSerachBool] = React.useState(false);
  const [patientInfoSerachVal, setPatientInfoSearachVal] = React.useState(
    [] as any
  );

  const [menu, setMenu] = React.useState(false);

  const search = (e: any) => {
    const patieninfo = patientInfo.filter((p: any) => {
      if (p.disease.toLowerCase().includes(e.target.value.toLowerCase())) {
        setSerachBool(true);
        return p;
      }
      p.sublink.find((i: any) => {
        if (i.name.toLowerCase().includes(e.target.value.toLowerCase())) {
          setSerachBool(true);
          return i;
        }
      });
    });
    const bloginfo = blogs.filter((b: any) => {
      if (b.title.toLowerCase().includes(e.target.value.toLowerCase())) {
        return b;
      }
    });
    const healthinfo = healthInfo.filter((h: any) => {
      if (h.diseaseName.toLowerCase().includes(e.target.value.toLowerCase())) {
        return h;
      }
    });

    setPatientInfoSearachVal([...patieninfo, ...bloginfo, ...healthinfo]);
    if (e.target.value == "") {
      setSerachBool(false);
    }
  };

  // const getDiseaseDetails = async () => {
  //   const { data } = await axios.get("/api/auth/disease/get");
  //   setDiseaseDetails([...data.disease]);
  // };

  const getPatientInfo = async () => {
    const { data } = await axios.get("/api/auth/patientinfo/get");
    console.log(data);
    if (data.success) {
      setPatientInfo([...data.patientInformation]);
    }
  };

  const getBlogs = async () => {
    const { data } = await axios.get("/api/auth/blog/get");
    if (data.success) {
      setBlogs([...data.allBlogs]);
    }
  };

  const getHealthInfo = async () => {
    const { data } = await axios.get("/api/auth/healthinfo/get");
    setHealthInfo([...data.healthInformation]);
    // const groupedWords: any = {};
    // data.healthInformation.forEach((word: any) => {
    //   const firstLetter = word.disease[0].toUpperCase();
    //   if (!groupedWords[firstLetter]) {
    //     groupedWords[firstLetter] = [];
    //   }
    //   groupedWords[firstLetter].push(word);
    // });
    // setGroupWord(groupedWords);
  };

  React.useEffect(() => {
    // getDiseaseDetails();
    getPatientInfo();
    getBlogs();
    getHealthInfo();
  }, []);

  console.log(patientInfoSerachVal);

  return (
    <header>
      <nav>
        <div className="left">
          <div className="logo-container">
            <Link to="/" className="link">
              <h2 className="desktop-logo">
                <AiOutlineHome className="home-icon" /> DR Santosh
                chaubey,FRACP(endocrinology)@ThePracticalDoctor.com
              </h2>
              <div className="mobile-logo">
                <AiOutlineHome className="home-icon" />
                <div>
                  <h2>DR Santosh chaubey</h2>
                  <h2>FRACP(endocrinology)</h2>
                  <h2>@ThePracticalDoctor.com</h2>
                </div>
              </div>
            </Link>
          </div>
          <div
            className="ham-burger"
            onClick={() => {
              setMenu(!menu);
            }}
          >
            {menu ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </div>
        </div>
        <div className="bottom">
          <div className="mid">
            <ul>
              {/* <li style={{ color: "#551A8B" }}>
              Health Topics
              <ul className="sub-menu-ul">
                {allTopics &&
                  allTopics.map((t: any) => {
                    return (
                      <a href={`/${t.name}`} className="link">
                        <li>{t.name}</li>
                      </a>
                    );
                  })}
              </ul>
            </li> */}
              <a href="/patientinformation/all" className="link">
                <li>useful websites</li>
              </a>{" "}
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
              <a href="/healthinformation/all" className="link">
                <li>Disease Catalogue</li>
              </a>{" "}
              <Link to="/consulation" className="link">
                <li>online consultaion</li>
              </Link>{" "}
            </ul>
          </div>
          <div className="right">
            <input
              type="text"
              name=""
              id=""
              placeholder="serach..."
              onKeyUp={(e) => {
                search(e);
              }}
            />
            {serachBool && (
              <div className="search-content">
                <ul>
                  {patientInfoSerachVal &&
                    patientInfoSerachVal.map((p: any) => {
                      return (
                        <>
                          {p.diseaseName && (
                            <a href={`/healthinformation/${p.diseaseName}`}>
                              <li>{p.diseaseName}</li>
                            </a>
                          )}
                          {p.disease && (
                            <a href={`/patientinformation/${p.disease}`}>
                              <li>{p.disease}</li>
                            </a>
                          )}
                          {p.title && (
                            <a href={`/blogs/${p._id}`}>
                              <li>{p.title}</li>
                            </a>
                          )}
                        </>
                      );
                    })}
                </ul>
              </div>
            )}

            <div>
              <a href="https://drsantoshhindi.onrender.com/">
                <button>Hindi</button>
              </a>
            </div>
          </div>
        </div>
      </nav>
      {menu && (
        <div className="mobile-navbar">
          <ul>
            {/* <li style={{ color: "#551A8B" }}>
              Health Topics
              <ul className="sub-menu-ul">
                {allTopics &&
                  allTopics.map((t: any) => {
                    return (
                      <a href={`/${t.name}`} className="link">
                        <li>{t.name}</li>
                      </a>
                    );
                  })}
              </ul>
            </li> */}
            <a href="/patientinformation/all" className="link">
              <li>useful websites</li>
            </a>{" "}
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
            <a href="/healthinformation/all" className="link">
              <li>Disease Catalogue</li>
            </a>{" "}
            <Link to="/consulation" className="link">
              <li>online consultaion</li>
            </Link>{" "}
          </ul>
        </div>
      )}
    </header>
  );
};
