import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="header">
        <nav>About</nav>
        <nav>Experience</nav>
        <nav>Skills</nav>
        <nav>Intrests</nav>
        <nav>MyProjects</nav>
      </div>

      <div className="body-container">
        <div>
          <h1> Xavier Twitty</h1>
          <p>Charlotte, NC </p>
          <p>xtwitty21@gmail.com</p>
        </div>

        <div className="About container">
          <p>
            Hi I’m Xavier, and I’m a 𝐅𝐮𝐥𝐥 𝐒𝐭𝐚𝐜𝐤 𝐒𝐨𝐟𝐭𝐰𝐚𝐫𝐞 𝐄𝐧𝐠𝐢𝐧𝐞𝐞𝐫. I'm exploring
            current job offers amongst companies with a good work culture
            reputation where I can actively contribute to software engineering
            projects and further expand on my web development skills. I
            understand how to make single page apps and React apps (Web or
            Mobile first design) in VSCode for frontend web development. I enjoy
            backend development and more specifically configuring node servers
            with nodemon and building API's that work using CRUD. During my time
            at BloomTech I explored both backend and frontend web development
            projects and I found that I have a knack for creating tables with
            Knex and making migrations /seeds. I began my career in Web
            Development, and discovered my hunger for continuous learning within
            this industry, seeking to learn a variety of hands on software
            engineering skills. I chose to become certified at the beginning of
            Covid lockdown, because I had the opportunity to change my career
            path and pursue my passion for technology. Before my time at Bloom
            Institute of Technology, I was a small business owner and completed
            freelance work as a janitor cleaner with my father. The managerial
            and social skills I gained from working in both of these industries
            have proven valuable when coordinating project tasks amongst
            professional development teams. I am great at communicating with
            people and I often can overcome many challenges through
            communication. My future career goal is to become a Senior Engineer.{" "}
          </p>
        </div>
        <div className="Experience container"></div>
        <div className="Education container"></div>
        <div className="Skills container"></div>
        <div className="Intrests container"></div>
        <div className="MyProjects container"></div>
      </div>
    </div>
  );
}

export default App;
