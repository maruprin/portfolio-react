import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi I'm Maru`}{" "}
                    <div
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </div>
                  </h1>
                  <p>
                    Soy desarrolladora web Fullstack, aunque mi pasión es el
                    FrontEnd, ya que vengo del mundo del diseño UX/UI y el
                    famoso 'pixel perfect' es mi aliado, llevo como bandera que
                    los detalles marcan la diferencia.<br></br>
                    Te cuento un poco más sobre mi.. <br></br>
                    Fui nadadora profesional desde pequeña, por eso
                    la disciplina, la organización, constancia y planificación,
                    entre otras cualidades, están inmersas en mi. <br></br>
                    Tengo facilidad para trabajar en equipo, ya que se me da bien
                    comunicarme con los demás y ser empática. Soy responsable,
                    proactiva, mi vida siempre fue muy activa y funciono mejor
                    cuando tengo muchas responsabilidades que sacar adelante, se
                    trabajar bajo presión. <br></br>
                    Esto último y la creatividad los puse en práctica en mi carrera como diseñadora, ya que es una disciplina muy subjetiva donde siempre hay que defender los
                    trabajos y rehacerlos una y otra vez, gracias a ello tengo
                    constancia, perseverancia y no me rindo fácil. <br></br>
                    Siempre dispuesta a aprender, crecer y adquirir nuevos
                    conocimientos, abierta a desafíos, me adapto a los cambios
                    con facilidad. <br></br>
                    Soy una persona resolutiva y optimista que
                    tiene muchas ganas de ir por más.
                  </p>
                  <button onClick={() => console.log("connect")}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
