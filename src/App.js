import "./App.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

import GetTechImage from './components/TechImage';
import ParticlesBackground from './components/ParticlesBackground';

import { ThemeProvider, useTheme } from './components/ThemeContext';
import React, { useEffect, useState } from 'react';

import useDeviceDetection from './components/Device';
import eduArchive from "./assets/eduarchive.png";
import connexto from "./assets/connexto.png";
import logo from "./assets/jah.jpg";

const projects = [
  {
    id: 1,
    title: "EduArchive",
    description: "A platform dedicated to academic resources, helping students and educators access and manage educational materials efficiently.",
    image: eduArchive,
    tags: ["JavaScript", "Node.js", "React", "Bootstrap", "HTML", "CSS"],
    link: "https://eduarchive-v2.vercel.app/"
  },
  {
    id: 2,
    title: "Connexto",
    description: "A global chat platform that connects students and professionals worldwide, enabling seamless communication, cultural exchange, and collaborative learning in real time.",
    image: connexto,
    tags: ["JavaScript", "Node.js", "React", "Next.js", "Tailwind", "HTML", "CSS"],
    link: "https://connexto.vercel.app/"
  }
];

function ThemeToggle() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <div className="theme-toggle-wrapper">
      <label className="theme-switch">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <span className="slider round">
          <i className="fas fa-sun"></i>
          <i className="fas fa-moon"></i>
        </span>
      </label>
    </div>
  );
}

function CardContent() {
  const { darkMode } = useTheme();
  const device = useDeviceDetection();

  const [viewers, setViewers] = useState(0);
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    const liked = localStorage.getItem('hasLiked') === 'true';
    setHasLiked(liked);

    async function fetchLikes() {
      try {
        const response = await fetch("/api/Likes");
        const data = await response.json();
        setLikes(data.likes);
      } catch (error) {
        console.error("Failed to fetch likes:", error);
      }
    }

    fetchLikes();

    async function fetchViewers() {
      try {
        const response = await fetch("/api/Viewers");
        const data = await response.json();
        setViewers(data.viewers);

        await fetch("/api/Viewers", {
          method: "POST"
        });
      } catch (error) {
        console.error("Failed to handle viewers:", error);
      }
    }

    fetchViewers();
  }, []);

  const handleLike = async () => {
    if (!hasLiked) {
      try {
        const response = await fetch("/api/Likes", {
          method: "POST"
        });
        const data = await response.json();
        setLikes(data.likes);
        setHasLiked(true);
        localStorage.setItem('hasLiked', 'true');
      } catch (error) {
        console.error("Failed to update likes:", error);
      }
    }
  };

  useEffect(() => {
    const elements = document.querySelectorAll('.animate');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('fade-in');
      }, index * 200);
    });
  }, []);

  const chunkedProjects = () => {
    const itemsPerSlide = window.innerWidth <= 768 ? 1 : 2; // Force 2 on desktop, 1 on mobile
    return projects.reduce((acc, curr, i) => {
      if (i % itemsPerSlide === 0) acc.push([]);
      acc[acc.length - 1].push(curr);
      return acc;
    }, []);
  };

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
      <ParticlesBackground darkMode={darkMode} />
      <div className="d-flex flex-column align-items-center" style={{ marginTop: "40px", marginBottom: "30px" }}>

        <div className="animate snapInfo position-relative">
          <ThemeToggle />
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

        <div className="animate mainButtons d-flex flex-column flex-sm-row align-items-center">

          {device === "Phone" ? (
            <>
              <button type="button" className="btn btn-outline-dark me-0 me-sm-2 mb-2 mb-sm-0 w-100">
                <i className="bi bi-briefcase-fill"></i>&nbsp;&nbsp;Contact
              </button>
              <button type="button" className="btn btn-outline-primary me-0 me-sm-2 mb-2 mb-sm-0 w-100">
                <i className="bi bi-collection-fill"></i>&nbsp;&nbsp;Projects
              </button>
              <button type="button" className="btn btn-outline-success me-0 me-sm-2 w-100">
                <i className="fa-solid fa-trophy"></i>&nbsp;&nbsp;Certificates
              </button>
            </>
          ) : (
            <>
              <button type="button" className="btn btn-outline-dark me-2 w-100">
                <i className="bi bi-briefcase-fill"></i>&nbsp;&nbsp;Contact
              </button>
              <button type="button" className="btn btn-outline-primary me-2 w-100">
                <i className="bi bi-collection-fill"></i>&nbsp;&nbsp;Projects
              </button>
              <button type="button" className="btn btn-outline-success w-100">
                <i className="fa-solid fa-trophy"></i>&nbsp;&nbsp;Certificates
              </button>
            </>
          )}
        </div >

        <div className="animate d-flex flex-column flex-md-row" style={{ width: "90%", maxWidth: "60rem", marginTop: "15px" }}>
          <div className="card" style={{ flex: "1 1 100%", height: "auto" }}>
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
        </div >

        <div className="animate d-flex flex-column flex-md-row" style={{ width: "90%", maxWidth: "60rem", marginTop: "10px" }}>
          <div className="card me-md-3 mb-3 mb-md-0" style={{ flex: "1 1 30%", maxWidth: "100%" }}>
            <div className="card-body">
              <h4 className="mb-3">
                <i className="fa-solid fa-chart-line"></i>
                <strong>&nbsp;&nbsp;Statistics & Socials</strong>
              </h4>

              {/* Stats Section */}
              <div className="card mb-3 stats-inner-card">
                <div className="card-body">
                  <div className="d-flex flex-column gap-2">
                    <div className="tech-card viewer-card">
                      <i className="fas fa-eye"></i>
                      <span className="ms-2">{viewers} visitors</span>
                    </div>
                    <div
                      className={`tech-card viewer-card like-card ${hasLiked ? 'liked' : ''}`}
                      onClick={handleLike}
                      style={{ cursor: hasLiked ? 'default' : 'pointer' }}
                    >
                      <i className="fas fa-heart"></i>
                      <span className="ms-2">
                        {likes} likes {!hasLiked && '- Tap to like!'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Socials Section */}
              <a href="https://github.com/iamjahhh" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark mb-2 w-100">
                <i className="bi bi-github"></i>&nbsp;&nbsp;Github
              </a>
              <a href="https://facebook.com/jbbb.iii" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary mb-2 w-100">
                <i className="bi bi-facebook"></i>&nbsp;&nbsp;Facebook
              </a>
              <a href="https://instagram.com/jbbb.iii" target="_blank" rel="noopener noreferrer" className="btn btn-outline-danger w-100">
                <i className="bi bi-instagram"></i>&nbsp;&nbsp;Instagram
              </a>
            </div>
          </div>

          <div className="card" style={{ flex: "1 1 50%", height: "auto" }}>
            <div className="card-body">
              <h4 className="mb-3">
                <i className="fa-solid fa-code"></i>
                <strong>&nbsp;&nbsp;Tech Stack</strong>
              </h4>

              <div className="mb-4">
                <h6 className="text-muted mb-2">Mastered</h6>
                <div className="d-flex flex-wrap">
                  <div className="tech-card mastered">
                    {GetTechImage({ logo: 'javascript' })}
                    <span>JavaScript</span>
                  </div>
                  <div className="tech-card mastered">
                    {GetTechImage({ logo: 'react' })}
                    <span>React</span>
                  </div>
                  <div className="tech-card mastered">
                    {GetTechImage({ logo: 'node.js' })}
                    <span>Node.js</span>
                  </div>
                  <div className="tech-card mastered">
                    {GetTechImage({ logo: 'c++' })}
                    <span>C++</span>
                  </div>
                </div>
              </div>

              {/* Other Technologies */}
              <h6 className="text-muted mb-2">Other Technologies</h6>
              <div className="d-flex flex-wrap">
                <div className="tech-card">
                  {GetTechImage({ logo: 'typescript' })}
                  <span>TypeScript</span>
                </div>
                <div className="tech-card">
                  {GetTechImage({ logo: 'c#' })}
                  <span>C#</span>
                </div>
                <div className="tech-card">
                  {GetTechImage({ logo: 'rust' })}
                  <span>Rust</span>
                </div>
                <div className="tech-card">
                  {GetTechImage({ logo: 'html' })}
                  <span>HTML</span>
                </div>
                <div className="tech-card">
                  {GetTechImage({ logo: 'css' })}
                  <span>CSS</span>
                </div>
                <div className="tech-card">
                  {GetTechImage({ logo: 'database' })}
                  <span>MySQL</span>
                </div>
                <div className="tech-card">
                  {GetTechImage({ logo: 'database' })}
                  <span>SQLite3</span>
                </div>
                <div className="tech-card">
                  {GetTechImage({ logo: 'bootstrap' })}
                  <span>Bootstrap</span>
                </div>
                <div className="tech-card">
                  {GetTechImage({ logo: 'git' })}
                  <span>Git</span>
                </div>
                <div className="tech-card">
                  {GetTechImage({ logo: 'github' })}
                  <span>GitHub</span>
                </div>
                <div className="tech-card">
                  {GetTechImage({ logo: 'supabase' })}
                  <span>Supabase</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="animate d-flex flex-column flex-sm-row" style={{ width: "90%", maxWidth: "60rem", marginTop: "15px" }}>
          <div className="card" style={{ flex: "1 1 100%", height: "auto" }}>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="mb-0">
                  <i className="fa-solid fa-project-diagram"></i>
                  <strong>&nbsp;&nbsp;Projects</strong>
                </h4>
              </div>
              
              <div id="projectsCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  {chunkedProjects().map((chunk, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                      <div className="d-flex justify-content-center gap-4">
                        {chunk.map(project => (
                          <div key={project.id} className="project-card">
                            <div className="project-image">
                              <img src={project.image} alt={project.title} />
                              <div className="project-overlay">
                                <a href={project.link} className="view-project" target="_blank" rel="noopener noreferrer">
                                  View Project
                                </a>
                              </div>
                            </div>
                            <div className="project-info">
                              <h5>{project.title}</h5>
                              <p>{project.description}</p>
                              <div className="tech-tags">
                                {project.tags.map((tag, i) => (
                                  <span key={i} className="tech-tag tech-tags-small">
                                    {GetTechImage({ logo: tag.toLowerCase() })}
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#projectsCarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#projectsCarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="animate d-flex flex-column flex-md-row" style={{ width: "90%", maxWidth: "60rem", marginTop: "15px" }}>
          <div className="card" style={{ flex: "1 1 70%", height: "auto" }}>
            <div className="card-body">
              <h4 className="mb-3"><i className="fa-solid fa-trophy"></i><strong>&nbsp;&nbsp;Certificates</strong></h4>
              <div className="d-flex flex-wrap">
              </div>
            </div>
          </div>
        </div>

        <div className="credits-section mt-2">
          <p className="text-center mt-5 mb-1">
            Programmed with&nbsp;
            <i className="fab fa-react" title="React.js"></i>&nbsp;
            <i className="fab fa-html5" title="HTML 5"></i>&nbsp;
            <i className="fab fa-css3" title="CSS 3"></i>&nbsp;
            <i className="fab fa-bootstrap" title="Bootstrap 5"></i>&nbsp;
            <i className="fab fa-font-awesome" title="Font Awesome"></i>&nbsp;
          </p>
          <p className="text-center text-muted small">
            © {new Date().getFullYear()} John Benedict Badilla. All rights reserved.
          </p>
        </div>

      </div>
    </div>
  );
}

function CardComponent() {
  return (
    <ThemeProvider>
      <CardContent />
    </ThemeProvider>
  );
}

export default CardComponent;
