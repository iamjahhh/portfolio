import React, { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import logo from "./assets/jah.jpg";

function CardComponent() {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('fade-in');
      }, index * 200); 
    });
  }, []);

  return (
    <div className="d-flex flex-column align-items-center" style={{ backgroundColor: "white", marginTop: "30px" }}>
      <div className="animate" style={{ width: "90%", maxWidth: "60rem" }}>
        <div className="card-body">
          <div className="d-flex flex-md-row">
            <img id="logo" src={logo} alt="logo" className="img-fluid me-3 mb-md-0" />
            <div id="cardTitles">
              <h5 className="card-title">John Benedict Badilla</h5>
              <h6 id="location" className="card-subtitle mb-2 text-body-primary">
                <i className="fa-solid fa-location-dot"></i> &nbsp;Bulacan, Philippines
              </h6>
              <p id="desc" className="card-subtitle text-body-primary">Software Developer and a Fullstack Developer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="animate d-flex flex-column flex-sm-row align-items-center" style={{ maxWidth: "60rem", width: "90%", marginTop: "20px", marginBottom: "10px" }}>
        <button type="button" className="btn btn-outline-dark me-0 me-sm-2 mb-2 mb-sm-0 w-100">
          <i className="bi bi-briefcase-fill"></i>&nbsp;&nbsp;Contact
        </button>
        <button type="button" className="btn btn-outline-primary me-0 me-sm-2 mb-2 mb-sm-0 w-100">
          <i className="bi bi-collection-fill"></i>&nbsp;&nbsp;Projects
        </button>
        <button type="button" className="btn btn-outline-success me-0 me-sm-2 w-100">
          <i className="fa-solid fa-trophy"></i>&nbsp;&nbsp;Certificates
        </button>
      </div>

      <div className="animate d-flex flex-column flex-md-row" style={{ width: "90%", maxWidth: "60rem", marginTop: "10px" }}>
        <div className="card me-md-3 mb-3 mb-md-0" style={{ flex: "1 1 auto", maxWidth: "100%" }}>
          <div className="card-body">
            <h4 className="mb-3"><i className="fa-solid fa-briefcase"></i><strong>&nbsp;&nbsp;About</strong></h4>
            <p style={{ color: "#2e2e2e" }}>
              Hello! I’m <strong>John Benedict Badilla</strong> (You can call me <strong>Jah</strong>) from Bulacan, Philippines. I am currently <strong><i>18 years old</i></strong> pursuing
              <strong> Bachelor of Science in Computer Science</strong> at <strong>Quezon City University</strong>, where I am in my freshman year.
              <br></br><br></br>
              As a <strong>full-stack software and web developer</strong>, I am passionate about developing user-centric solutions that improve services and enhance digital experiences.
            </p>
          </div>
        </div>

        <div className="card" style={{ flex: "1 1 auto", height: "auto" }}>
          <div className="card-body">
            <h4 className="mb-3"><i className="fa-solid fa-code"></i><strong>&nbsp;&nbsp;Tech Stack</strong></h4>
            <div className="d-flex flex-wrap">
              <div className="tech-card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                  alt="JavaScript Logo"
                  className="tech-logo"
                  title="JavaScript"
                  style={{ width: "15px", height: "15px" }} />
                <span>JavaScript</span>
              </div>
              <div className="tech-card">
                <img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png"
                  alt="TypeScript Logo"
                  className="tech-logo"
                  title="TypeScript"
                  style={{ width: "15px", height: "15px" }} />
                <span>TypeScript</span>
              </div>
              <div className="tech-card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg"
                  alt="C++ Logo"
                  className="tech-logo"
                  title="C++"
                  style={{ width: "15px", height: "15px" }} />
                <span>C++</span>
              </div>
              <div className="tech-card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png"
                  alt="C# Logo"
                  className="tech-logo"
                  title="C#"
                  style={{ width: "27px", height: "27px" }} />
                <span>C#</span>
              </div>
              <div className="tech-card">
                <i className="fab fa-rust tech-logo" title="Rust"></i>
                <span>Rust</span>
              </div>
              <div className="tech-card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                  alt="React Logo"
                  className="tech-logo"
                  title="React"
                  style={{ width: "15px", height: "15px" }} />
                <span>React</span>
              </div>
              <div className="tech-card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                  alt="Node.js Logo"
                  className="tech-logo"
                  title="Node.js"
                  style={{ width: "15px", height: "15px" }} />
                <span>Node.js</span>
              </div>
              <div className="tech-card">
                <i className="fas fa-database tech-logo" title="MySQL"></i>
                <span>MySQL</span>
              </div>
              <div className="tech-card">
                <i className="fas fa-database tech-logo" title="SQLite3"></i>
                <span>SQLite3</span>
              </div>
              <div className="tech-card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
                  alt="HTML Logo"
                  className="tech-logo"
                  title="HTML"
                  style={{ width: "15px", height: "15px" }} />
                <span>HTML</span>
              </div>
              <div className="tech-card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
                  alt="CSS Logo"
                  className="tech-logo"
                  title="CSS"
                  style={{ width: "15px", height: "15px" }} />
                <span>CSS</span>
              </div>
              <div className="tech-card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
                  alt="Bootstrap Logo"
                  className="tech-logo"
                  title="Bootstrap"
                  style={{ width: "15px", height: "15px" }} />
                <span>Bootstrap</span>
              </div>
              <div className="tech-card">
                <i className="fab fa-git tech-logo" title="Git"></i>
                <span>Git</span>
              </div>
              <div className="tech-card">
                <i className="fab fa-github tech-logo" title="GitHub"></i>
                <span>GitHub</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default CardComponent;
