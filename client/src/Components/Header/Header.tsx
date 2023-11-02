import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const Header = () => {
  const [diseaseDetails, setDiseaseDetails] = React.useState([] as any);
  const [disease, setDisease] = React.useState([] as any);

  const [patientInfo, setPatientInfo] = React.useState([] as any);
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
    const diseaseinfo = disease.filter((p: any) => {
      if (p.diseaseName.toLowerCase().includes(e.target.value.toLowerCase())) {
        setSerachBool(true);
        return p;
      }
    });

    setPatientInfoSearachVal([...patieninfo, ...diseaseinfo]);
    if (e.target.value == "") {
      setSerachBool(false);
    }
  };

  const getDiseaseDetails = async () => {
    const { data } = await axios.get("/api/auth/disease/get");
    setDiseaseDetails([...data.disease]);
  };

  const getPatientInfo = async () => {
    const { data } = await axios.get("/api/auth/patientinfo/get");
    console.log(data);
    if (data.success) {
      setPatientInfo([...data.patientInformation]);
    }
  };
  const getDisease = async () => {
    const { data } = await axios.get("/api/auth/disease/get");
    if (data.success) {
      setDisease([...data.disease]);
    }
  };

  React.useEffect(() => {
    getDiseaseDetails();
    getPatientInfo();
    getDisease();
  }, []);

  return (
    <header>
      <nav>
        <div className="left">
          <div className="logo-container">
            <Link to="/" className="link">
              <h2>
                DR Santosh chaubey,FRACP(endocrinology)@ThePracticalDoctor.com
              </h2>
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
              <li style={{ color: "#551A8B" }}>
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
              </li>
              <Link to="/blogs" className="link">
                <li>Blogs</li>
              </Link>
              <Link to="/healthinformation" className="link">
                <li>Healthinfo</li>
              </Link>{" "}
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
                        <a href={`/patientinformation/${p.disease}`}>
                          <li>{p.disease ? p.disease : p.diseaseName}</li>
                        </a>
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
            <li style={{ color: "#551A8B" }}>
              Diseases
              <ul className="sub-menu-ul">
                {diseaseDetails.length > 0 &&
                  diseaseDetails.map((d: any) => {
                    return (
                      <a href={`/disease/${d.diseaseName}`} className="link">
                        <li style={{ fontSize: "1.2rem" }}>{d.diseaseName}</li>
                      </a>
                    );
                  })}
              </ul>
            </li>
            <Link to="/blogs" className="link">
              <li>Blogs</li>
            </Link>
            <Link to="/healthinformation" className="link">
              <li>Healthinfo</li>
            </Link>{" "}
            <Link to="/consulation" className="link">
              <li>online consultaion</li>
            </Link>{" "}
          </ul>
        </div>
      )}
    </header>
  );
};
