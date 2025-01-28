


import React from "react";
import './App.css';


function App() {
  return (
    <div className="resume">
      <div className="header">
        <div className="title">GRAPHIC DESIGNER</div>
        <h1 className="name">MARIANA NAPOLITANI</h1>
        <div className="contact">
          <p><i className="fas fa-envelope"></i> hello@reallygreatsite.com</p>
          <p><i className="fas fa-phone-alt"></i> +123-456-7890</p>
          <p><i className="fas fa-map-marker-alt"></i> 123 Anywhere St., Any City</p>
          <p><i className="fas fa-globe"></i> reallygreatsite.com</p>
        </div>
      </div>
      <div className="main-content">
        <div className="left-column">
          <div className="section about">
            <h2>ABOUT ME</h2>
            <p>
              Passionate and creative graphic designer with 8+ years of experience in creating visually stunning designs across various media. Adept at collaborating with teams and clients to achieve design goals. Skilled in branding, typography, and digital illustration.
            </p>
          </div>
          <div className="section education">
            <h2>EDUCATION</h2>
            <p>
              <strong>Master of Arts in Creative Design</strong>
              <br />
              Wardiere University, 2008
            </p>
            <p>
              <strong>Bachelor of Arts in Graphic Design</strong>
              <br />
              Wardiere University, 2004
            </p>
          </div>
          <div className="section skills">
            <h2>SKILLS</h2>
            <ul>
              <li>Branding and Identity</li>
              <li>Motion Graphics</li>
              <li>Web Design and UI/UX</li>
              <li>Illustration (Digital & Hand-drawn)</li>
              <li>Photo Editing and Retouching</li>
            </ul>
          </div>
          <div className="section languages">
            <h2>LANGUAGES</h2>
            <ul>
              <li>English (Fluent)</li>
              <li>German (Intermediate)</li>
              <li>Spanish (Beginner)</li>
            </ul>
          </div>
          {/* Added Certifications Section */}
          <div className="section certifications">
            <h2>CERTIFICATIONS</h2>
            <ul>
              <li>Adobe Certified Expert - Illustrator (2021)</li>
              <li>UX Design Fundamentals (2020)</li>
              <li>Advanced Motion Graphics (2019)</li>
              <li>Certified Web Designer - W3C (2018)</li>
            </ul>
          </div>
          {/* Added Links Section */}
          <div className="section links">
            <h2>LINKS</h2>
            <ul>
              <li>
                <a href="https://www.behance.net/mariananapolitani" target="_blank" rel="noopener noreferrer">
                  Portfolio - Behance
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/mariananapolitani" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/mariananapolitani" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.dribbble.com/mariananapolitani" target="_blank" rel="noopener noreferrer">
                  Dribbble
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-column">
          <div className="section work-experience">
            <h2>WORK EXPERIENCE</h2>
            <div className="experience">
              <h3>Senior Graphic Designer</h3>
              <p>Studio Shodwe (2019 - 2022)</p>
              <p>
                Led the design team to develop brand strategies and graphic elements for high-profile clients. Created digital assets, marketing materials, and visual identities that enhanced the brand visibility of several clients.
              </p>
            </div>
            <div className="experience">
              <h3>Senior Graphic Designer</h3>
              <p>Salford & Co. (2017 - 2019)</p>
              <p>
                Collaborated with marketing and web teams to design and deliver high-quality promotional campaigns, websites, and print materials. Successfully increased client engagement by 20% through strategic design solutions.
              </p>
            </div>
            <div className="experience">
              <h3>Junior Graphic Designer</h3>
              <p>Wardiere Inc. (2015 - 2017)</p>
              <p>
                Worked on a variety of design projects ranging from social media graphics to print advertisements. Contributed to the redesign of the company website, leading to a 15% increase in website traffic.
              </p>
            </div>
          </div>
          <div className="section projects">
            <h2>PROJECTS</h2>
            <div className="project">
              <h3>Brand Identity for XYZ Corp</h3>
              <p>
                Designed and implemented a complete branding package for XYZ Corp, including logos, business cards, stationery, and digital assets. The new brand identity led to a 30% increase in client engagement.
              </p>
            </div>
            <div className="project">
              <h3>Motion Graphics for ABC Studios</h3>
              <p>
                Created an animated logo and several promotional motion graphics for ABC Studios, which helped boost their online presence and increase audience retention by 25%.
              </p>
            </div>
            <div className="project">
              <h3>E-commerce Website Redesign</h3>
              <p>
                Spearheaded the redesign of an e-commerce platform for a major retail brand. Improved the user interface, resulting in a 20% increase in conversions and a smoother shopping experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
