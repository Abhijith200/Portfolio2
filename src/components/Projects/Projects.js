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
              title="Slog Fitness"
              description="Slog Fitness is a high-energy fitness brand focused on building strength, endurance, and confidence through dynamic workouts."
              ghLink={false}
              demoLink="https://slog-fitness.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Better Job Placement"
              description="Dedicated and skilled professional seeking better job placement to leverage my expertise and grow in a dynamic work environment."
              // ghLink=""
              demoLink="https://betterjob-placement.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Designer Portfolio"
              description="Creative designer crafting impactful visuals that blend style with purpose."
              // ghLink=""
              demoLink="https://niyas-design.web.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Daycare & Pre School"
              description="A nurturing and safe environment for early childhood learning and development."
              // ghLink=""
              demoLink="https://thelittilenext.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Future Crafts"
              description="Creative handmade items that blend artistry with functionality."
              // ghLink=""
              demoLink="https://abhijith200.github.io/Future-Crafts/"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Hospital Management System"
              description="It is a comprehensive software solution designed to streamline and automate the administrative, financial, and clinical operations of a hospital."
              // ghLink=""
              demoLink="https://fayizamp.github.io/hospital-management-system/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
