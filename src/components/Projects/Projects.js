import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="TuneHub"
              description="Personal Music Player Built using springboot,Thymeleaf with MySql as database built to demontrate the spring as well as ease of accessing the app with higher performance and many more improvements as conventional methods."
              ghLink="https://github.com/Rishabhpathak22/TuneHubJavaFinal"
              //demoLink="https://tuneHub.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bhojan"
              description="My personal restaurant menu and booking app build using Python and Django used MySql as Database ."
              ghLink="https://github.com/Rishabhpathak22/Bhojan"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <-------- Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Crypto Trading App"
              description="This is the online crypto trading app built using springboot , React and Mysql as database used to built the application in such a way to make it more relaible and fast with ease of availabilityof crypto trading in current market"
              ghLink="https://github.com/Rishabhpathak22/tradingapp"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <-------- Please include a demo link here            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="ChatBook"
              description="ChatBook is a real-time chat application designed for seamless communication. It offers an intuitive interface, allowing users to engage in instant messaging, share media, and connect with friends, all while ensuring a smooth, responsive experience across devices."
              ghLink="https://github.com/Rishabhpathak22/chatBook"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <-------- Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="ToDo Project"
              description="
A React-based Todo app designed for efficient task management. It allows users to add, edit, and delete tasks, organize them into categories, and track progress with a simple and responsive interface. The app ensures a seamless experience for staying productive and organized."
              ghLink="https://github.com/Rishabhpathak22/todoapp"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
