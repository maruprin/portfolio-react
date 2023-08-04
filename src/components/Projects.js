import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projUX1 from "../assets/img/project-ux1.png";
import projUX2 from "../assets/img/project-ux2.png";
import projUX3 from "../assets/img/project-ux3.png";
import projFR1 from "../assets/img/project-fr1.png";
import projFR2 from "../assets/img/project-fr2.png";
import projFR3 from "../assets/img/project-fr3.png";
import projFULL1 from "../assets/img/project-full1.png";
import projFULL2 from "../assets/img/project-full2.png";
import projFULL3 from "../assets/img/project-full3.png";
import projFile1 from "../assets/files/SC-metamorph.pdf";
import projFile2 from "../assets/files/SC-miBankeep.pdf";
import projFile3 from "../assets/files/SC-myTailor.pdf";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projectsFront = [
    {
      title: "Oxygen Shop",
      description: "Design & Development",
      imgUrl: projFR1,
      url: "https://maruprin.github.io/oxygen-shop/",
    },
    {
      title: "Miranda",
      description: "Design & Development",
      imgUrl: projFR2,
      url: "https://web-miranda.vercel.app/",
    },
    {
      title: "Portfolio",
      description: "Design & Development",
      imgUrl: projFR3,
      url: "https://github.com/maruprin/portfolio",
    },
  ];
  const projectsFull = [
    {
      title: "Photo App",
      description: "Design & Development",
      imgUrl: projFULL1,
      url: "https://maruprin.github.io/photo-app/",
    },
    {
      title: "Dashboard Travl",
      description: "Design & Development",
      imgUrl: projFULL2,
      url: "https://maruprin.github.io/dashboardMiranda/",
    },
    {
      title: "Portfolio",
      description: "Design & Development",
      imgUrl: projFULL3,
      url: "#",
    },
  ];
  const projectsUX = [
    {
      title: "Metamorph",
      description: "UX/UI Design",
      imgUrl: projUX1,
      url: projFile1,
    },
    {
      title: "miBankeep",
      description: "UX/UI Designer",
      imgUrl: projUX2,
      url: projFile2,
    },
    {
      title: "My Taylor App",
      description: "UX/UI Designer",
      imgUrl: projUX3,
      url: projFile3,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Aquí están algunos de mis proyectos, la mayoría de ellos, si
                    volviera a realizarlos los <b>optimizaría y desarrollaría
                    diferente</b>. Pero todo es un proceso y me encuentro en
                    <b> constante evolución</b>.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">UX/UI</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Front End</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Full Stack</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projectsUX.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <Row>
                          {projectsFront.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projectsFull.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="bg" />
    </section>
  );
};
