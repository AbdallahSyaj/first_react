import React from 'react';
import './App.css';
import { House, Info, Code, LaptopCode, Calendar, Phone, PaperPlane } from 'lucide-react';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="body">
        <Header />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}

function Nav() {
  return (
    <nav className="nav">
      <a href="#"><House /></a>
      <a href="#about"><Info /></a>
      <a href="#skills"><Code /></a>
      <a href="#my_work"><LaptopCode /></a>
      <a href="#cert"><Calendar /></a>
      <a href="#last"><Phone /></a>
    </nav>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="my_img"></div>
      <h1>CSci.Abdallah Ali Syaj</h1>
      <h2>Full Stack Developer</h2>
      <div className="header_cont">
        <a href="https://github.com/AbdallahSyaj"><Github className="firsti" size={50} /></a>
        <a href="https://linkedin.com/in/abdallah-syaj"><Linkedin className="firsti" size={50} /></a>
      </div>
      <div className="header_info">
        <a href="#last"> 
          <div className="btn">
            <Mail />
            Contact me
          </div>
        </a>
        <a href="/Abdallah-Syaj.pdf">
          <div className="btn">
            <FileArrowDown />
            Download CV
          </div>
        </a>
      </div>
    </header>
  );
}

function About() {
  return (
    <main className="about" id="about">
      <h2 className="about_tit">👋 Hello!</h2>
      <br />
      <p className="about_txt">
        I'm a web developer and web applications enthusiast, passionate about entrepreneurship and driven to innovate creative solutions that bridge modern technology with user experience.
        <br /><br />
        With in-depth knowledge in front-end and back-end development, I am committed to enhancing web and application experiences through advanced technologies. 🌐💻
        <br /><br />
        I believe that mobile applications📱 and websites💻 can revolutionize user interactions. I aim to create enhancements that improve performance and engagement on websites and web applications. 🚀✨
      </p>
    </main>
  );
}

function Skills() {
  return (
    <div className="skills" id="skills">
      <h2 className="skills_tit"> My Skills 🔥💻</h2>
      <div className="skill1 skl">
        <h3>Frontend Developer</h3>
        <br />
        <ol style={{ width: "80%" }}>
          <li>Languages & Tools:
            <ul>
              <li>🌐💻HTML5, CSS3, JavaScript (ES6+).</li>
            </ul>
          </li>
          <li>Frameworks:
            <ul>
              <li>
                <span className="icon-react"></span>
                React, 
                <span className="icon-angular"></span>
                Angular, 
                <span className="icon-vue"></span>
                Vue.js.
              </li>
            </ul>
          </li>
          <li>Skills:
            <ul>
              <li>📱Responsive Web Design.</li>
              <li><span className="icon-palette"></span>User Experience (UX) optimization.</li>
              <li><span className="icon-bootstrap"></span>Styling tools: Tailwind CSS, Bootstrap, SCSS.</li>
            </ul>
          </li>
        </ol>
      </div>

      <div className="skill2 skl">
        <h3>Backend Developer</h3>
        <br />
        <ol style={{ width: "80%" }}>
          <li>Languages & Tools:
            <ul>
              <li>
                <span className="icon-js"></span>
                JavaScript,
                <span className="icon-php"></span> PHP, 
                <span className="icon-java"></span> Java
              </li>
            </ul>
          </li>
          <li>Frameworks:
            <ul>
              <li>
                <span className="icon-node"></span>
                Node.js,
                <span className="icon-laravel"></span>
                Laravel
              </li>
            </ul>
          </li>
          <li>API Development:
            <ul>
              <li>RESTful API.</li>
              <li>GraphQL.</li>
            </ul>
          </li>
          <li>Databases:
            <ul>
              <li>Relational: MySQL, PostgreSQL.</li>
              <li>Non-Relational: MongoDB, Firebase.</li>
            </ul>
          </li>
        </ol>
      </div>

      <div className="skill3 skl">
        <h3>Soft Skills</h3>
        <br />
        <dl style={{ width: "80%" }}>
          <dt>🧠 Critical:</dt>
          <dd>Ability to analyze complex problems and develop efficient solutions.</dd>
          <dt>🛠️ Problem-Solving:</dt>
          <dd>Quickly identifying and resolving technical challenges.</dd>
          <dt>🕒 Time Management:</dt>
          <dd>Organizing tasks and meeting deadlines effectively.</dd>
          <dt>📚 Quick Learning:</dt>
          <dd>Adapting to new tools, frameworks, and environments rapidly.</dd>
        </dl>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <article className="my_work" id="my_work">
      <h2>My Projects <Code /></h2>
      <div className="project"><h2>Coming Soon</h2></div>
      <div className="project"><h2>Coming Soon</h2></div>
      <div className="project"><h2>Coming Soon</h2></div>
    </article>
  );
}

function Timeline() {
  return (
    <article className="cert" id="cert">
      <h2>Time Line <Clock /></h2>
      <div className="cer">
        <div className="img4"></div>
        <h2>Orange Coding Academy</h2>
        <h4>Full Stack Web Development trainee <br /> 2025/1 - 2025/5</h4>
      </div>
      <div className="cer">
        <div className="img2"></div>
        <h2>Zepter international Jordan</h2>
        <h4>IT Support <br /> 2024/3 - 2024/12</h4>
      </div>
      <div className="cer">
        <div className="img1"></div>
        <h2>The Hashemite university</h2>
        <h4>Computer Science <br /> 2020-2024</h4>
      </div>
    </article>
  );
}

function ContactSection() {
  return (
    <section className="last" id="last">
      <div className="email">
        <h2>Contact Me <Mail /></h2>
        <ContactForm />
      </div>
    </section>
  );
}

function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    // Using formspree.io as in the original site
    const form = e.target;
    const formAction = "https://formspree.io/f/mqapwwok";
    
    fetch(formAction, {
      method: 'POST',
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        alert('Thank you for your message!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        alert('There was an error sending your message. Please try again.');
      }
    })
    .catch(error => {
      alert('There was an error sending your message. Please try again.');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          name="name" 
          id="name" 
          placeholder="Your name" 
          required 
          className="modern-input"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          name="email" 
          id="email" 
          placeholder="Your email" 
          required 
          className="modern-input"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="subject">Subject</label>
        <input 
          type="text" 
          name="subject" 
          id="subject" 
          placeholder="Subject" 
          required 
          className="modern-input"
          value={formData.subject}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea 
          name="message" 
          id="message" 
          placeholder="Your message" 
          required 
          className="modern-textarea"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="modern-button">
        <PaperPlane /> Send Message
      </button>
    </form>
  );
}

function Footer() {
  return (
    <footer className="Contact">
      <p><a href="/Abdallah-Syaj.pdf">Abdallah Ali Syaj</a></p>
      <p><a href="mailto:abdallah.ali.syaj@gmail.com">abdallah.ali.syaj@gmail.com</a></p>
      <p>
        <a href="https://github.com/AbdallahSyaj"><Github className="lasti" size={30} /></a>
        <a href="https://linkedin.com/in/abdallah-syaj"><Linkedin className="lasti" size={30} /></a>
      </p>
    </footer>
  );
}

// Icons that were using Font Awesome in the original code
function Mail() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
}

function FileArrowDown() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M12 18v-6"/><path d="m9 15 3 3 3-3"/></svg>;
}

function Clock() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
}

export default App;