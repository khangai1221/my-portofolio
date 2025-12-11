import React from "react";

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="section alt"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
    >
      <div className="section">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Here are some of the projects I've worked on during my studies and
          personal time
        </p>

        <div className="projects-grid">
          <div className="project-card">
            <img
              src="https://media.istockphoto.com/id/1046976906/photo/carnival-arcade-game.jpg?s=1024x1024&w=is&k=20&c=Ovj2aEXTL8448X6N1rAs_2eDtBYAArNc3rHiqhBf3S4="
              alt="Whack-A-Mole"
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">Whack-A-Mole</h3>
              <p className="project-description">
                A fun arcade game where players whack moles as they appear.
                Built with vanilla JavaScript for game logic and DOM
                manipulation.
              </p>
              <div className="project-tech">
                <span className="tech-badge">HTML</span>
                <span className="tech-badge">CSS</span>
                <span className="tech-badge">JavaScript</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/khangai1221/whack-a-mole"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  View Code
                </a>
                <a
                  href="https://whack-a-mole-cyan-one.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img
              src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400"
              alt="Barcelona Fan News"
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">Barcelona Fan News</h3>
              <p className="project-description">
                A news website dedicated to Barcelona football club fans,
                featuring latest updates, match reports, and player news.
              </p>
              <div className="project-tech">
                <span className="tech-badge">HTML</span>
                <span className="tech-badge">CSS</span>
                <span className="tech-badge">JavaScript</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/khangai1221/barcelona-fan-news"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  View Code
                </a>
                <a
                  href="https://barcelona-fan-news.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img
              src="https://images.unsplash.com/photo-1557683316-973673baf926?w=400"
              alt="Choose Color Game"
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">Choose Color Game</h3>
              <p className="project-description">
                An interactive color guessing game that tests your color
                recognition skills with RGB values.
              </p>
              <div className="project-tech">
                <span className="tech-badge">HTML</span>
                <span className="tech-badge">CSS</span>
                <span className="tech-badge">JavaScript</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/khangai1221/choose-color-game"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  View Code
                </a>
                <a
                  href="https://choose-color-game-pink.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400"
              alt="PINETOUR"
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">PINETOUR</h3>
              <p className="project-description">
                A tourism website showcasing beautiful destinations and travel
                packages with interactive maps and booking features.
              </p>
              <div className="project-tech">
                <span className="tech-badge">HTML</span>
                <span className="tech-badge">CSS</span>
                <span className="tech-badge">JavaScript</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/khangai1221/PINETOUR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  View Code
                </a>
                <a
                  href="https://pinetour-psi-ten.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400"
              alt="Calculator"
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">Calculator</h3>
              <p className="project-description">
                A fully functional calculator with basic arithmetic operations,
                built with clean UI and responsive design.
              </p>
              <div className="project-tech">
                <span className="tech-badge">HTML</span>
                <span className="tech-badge">CSS</span>
                <span className="tech-badge">JavaScript</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/khangai1221/calculator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  View Code
                </a>
                <a
                  href="https://calculator-seven-liard-58.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400"
              alt="Anime"
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">Anime</h3>
              <p className="project-description">
                An anime information website featuring character profiles,
                series listings, and anime recommendations.
              </p>
              <div className="project-tech">
                <span className="tech-badge">HTML</span>
                <span className="tech-badge">CSS</span>
                <span className="tech-badge">JavaScript</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/khangai1221/anime"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  View Code
                </a>
                <a
                  href="https://anime-eight-murex.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img
              src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400"
              alt="To Do List"
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">To Do List</h3>
              <p className="project-description">
                A task management application with add, edit, delete, and mark
                complete functionality for daily productivity.
              </p>
              <div className="project-tech">
                <span className="tech-badge">HTML</span>
                <span className="tech-badge">CSS</span>
                <span className="tech-badge">JavaScript</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/khangai1221/to-do-list"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  View Code
                </a>
                <a
                  href="https://to-do-list-nu-seven-77.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img
              src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400"
              alt="Hangman"
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">Hangman</h3>
              <p className="project-description">
                Classic hangman word guessing game with multiple categories and
                difficulty levels.
              </p>
              <div className="project-tech">
                <span className="tech-badge">HTML</span>
                <span className="tech-badge">CSS</span>
                <span className="tech-badge">JavaScript</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/khangai1221/hangman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  View Code
                </a>
                <a
                  href="https://hangman-two-gamma.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400"
              alt="AI Chatbot"
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">AI Chatbot</h3>
              <p className="project-description">
                An interactive chatbot interface with AI-powered responses and
                conversation history.
              </p>
              <div className="project-tech">
                <span className="tech-badge">HTML</span>
                <span className="tech-badge">CSS</span>
                <span className="tech-badge">JavaScript</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/khangai1221/ai-chatbot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  View Code
                </a>
                <a
                  href="https://ai-chatbot-k29q.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img
              src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400"
              alt="Instagram Frontend"
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">Instagram Frontend</h3>
              <p className="project-description">
                A frontend clone of Instagram with feed, stories, and profile
                pages featuring modern UI design.
              </p>
              <div className="project-tech">
                <span className="tech-badge">HTML</span>
                <span className="tech-badge">CSS</span>
                <span className="tech-badge">JavaScript</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/khangai1221/instagram-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  View Code
                </a>
                <a
                  href="https://instagram-frontend-6dfx7d1sd-25s-projects-b89115e3.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img
              src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400"
              alt="Countries and Their Flags"
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">Countries and Their Flags</h3>
              <p className="project-description">
                An educational website displaying information about countries,
                their flags, capitals, and geographical data.
              </p>
              <div className="project-tech">
                <span className="tech-badge">HTML</span>
                <span className="tech-badge">CSS</span>
                <span className="tech-badge">JavaScript</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/khangai1221/countries-and-their-flags"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  View Code
                </a>
                <a
                  href="https://countries-and-their-flags.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img
              src="https://images.unsplash.com/photo-1556438064-2d7646166914?w=400"
              alt="Snake Game"
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">Snake Game</h3>
              <p className="project-description">
                Classic Snake game with score tracking, increasing difficulty,
                and smooth gameplay mechanics.
              </p>
              <div className="project-tech">
                <span className="tech-badge">HTML</span>
                <span className="tech-badge">CSS</span>
                <span className="tech-badge">JavaScript</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/khangai1221/snake-game"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  View Code
                </a>
                <a
                  href="https://snake-game-psi-navy.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img
              src="https://images.unsplash.com/photo-1470252647378-9c22267e83de?w=400"
              alt="Radio Globe"
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">Radio Globe</h3>
              <p className="project-description">
                An interactive 3D globe visualization that displays radio
                stations from around the world. Users can rotate the globe,
                click on stations to play music, and explore global radio
                broadcasts.
              </p>
              <div className="project-tech">
                <span className="tech-badge">HTML</span>
                <span className="tech-badge">CSS</span>
                <span className="tech-badge">JavaScript</span>
                <span className="tech-badge">TypeScript</span>
                <span className="tech-badge">React</span>
                <span className="tech-badge">Three.js</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/HOP2B/radio-globe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  View Code
                </a>
                <a
                  href="https://radio-globe-bice.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
