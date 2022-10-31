import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={require("./images/IMG_1518.jpg")} alt="me" />

        <nav>
          <a href="#About">About</a>
          <a href="#Experience">Experience</a>
          <a href="#Skills">Skills</a>
          <a href="#Intrests">Interests</a>
          <a href="#MyProjects">MyProjects</a>
        </nav>
      </div>

      <div className="titles">
        <h1>
          {" "}
          Xavier <span>Twitty</span>
        </h1>
        <div className="inline-top">
          <p>Charlotte, NC </p>
          <p>xtwitty21@gmail.com</p>
        </div>
        <div className="logos">
          <a href="https://github.com/XavierTwitty">
            <img
              src="https://img.icons8.com/color/48/000000/github--v1.png"
              alt="Github"
              className="icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/xaviertwitty/">
            <img
              src="https://img.icons8.com/fluent/48/000000/linkedin.png"
              alt="LinkedIn"
              className="icon"
            />
          </a>
        </div>
      </div>

      <section id="About" className="container">
        <p>
          Hi I’m Xavier, and I’m a 𝐅𝐮𝐥𝐥 𝐒𝐭𝐚𝐜𝐤 𝐒𝐨𝐟𝐭𝐰𝐚𝐫𝐞 𝐄𝐧𝐠𝐢𝐧𝐞𝐞𝐫. I'm exploring
          current job offers amongst companies with a good work culture
          reputation where I can actively contribute to software engineering
          projects and further expand on my web development skills. I understand
          how to make single page apps and React apps (Web or Mobile first
          design) in VSCode for frontend web development. I enjoy backend
          development and more specifically configuring node servers with
          nodemon and building API's that work using CRUD. During my time at
          BloomTech I explored both backend and frontend web development
          projects and I found that I have a knack for creating tables with Knex
          and making migrations /seeds. I began my career in Web Development,
          and discovered my hunger for continuous learning within this industry,
          seeking to learn a variety of hands on software engineering skills. I
          chose to become certified at the beginning of Covid lockdown, because
          I had the opportunity to change my career path and pursue my passion
          for technology. Before my time at Bloom Institute of Technology, I was
          a small business owner and completed freelance work as a janitor
          cleaner with my father. The managerial and social skills I gained from
          working in both of these industries have proven valuable when
          coordinating project tasks amongst professional development teams. I
          am great at communicating with people and I often can overcome many
          challenges through communication. My future career goal is to become a
          Senior Engineer.{" "}
        </p>
      </section>
      <section id="Experience" className="container">
        <div className="inline">
          <h2>Experience</h2>
          <p>May 2016 - Present</p>
        </div>
        <h3> Contract Janitor</h3>
        <h4> TXT Janitorial </h4>
        <p>
          Consult with diverse commercial clients within the city and community
          to coordinate specific maintenance services.
        </p>
        <p>
          {" "}
          Logged 4+ employee hours using spreadsheets and improved employee
          attendance and payroll tracking.
        </p>
      </section>
      <section id="Education" className="container">
        <div className="inline">
          <h2>Education</h2>
          <p> June 2021 - September 2022 </p>
        </div>

        <h3>Bloom Institute of Technology</h3>
        <h4>Computer Software Engineering</h4>
      </section>
      <section id="Skills" className="container">
        <h2>Skills</h2>
        <h3>Programming Languages & Tools:</h3>
        <ul>
          <li>Javascript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>React</li>
          <li>SQLite</li>
        </ul>
      </section>
      <section id="Intrests" className="container">
        <h2>Interests</h2>
        <p>
          When i'm not writting code I enjoy working out at the YMCA. Going to
          the gym is relaxing to me, it's something I like to do to relieve
          stress and think about my day or what I want for the future. Aside
          from exercising I like to watch action movies on HBO. Recently I
          finished watching Game of Thones, before I began the series I had my
          doubts about it but I think its pretty good for anyone that like to
          binge watch tv shows. Im also a big sports fan , I love Basketball and
          Football. I use to play both sports growing up , now I spend my week
          nights and weekends watching the pros.
        </p>
      </section>
      <section id="MyProjects" className="container">
        <h2>My Projects</h2>
        <div className="links">
          <a href="https://lxbeauty-react.vercel.app/"> LX Beauty</a>
          <a href="https://lxbeauty.vercel.app/"> LX Beauty React</a>
        </div>
      </section>
    </div>
  );
}

export default App;
