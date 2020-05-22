import React from "react";
import safetyGuru from "../img/safetyGuru.jpg";
import generator from "../img/generator.jpg";
import todo from "../img/jsquiz.jpg";
import PropTypes from "prop-types";

export default class Projects extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="my-projects" className="container-fluid bg-light mt-5">
          <div className=" project-container container bg-light pb-5">
            <h1
              id="projects"
              className={"text-center " + this.props.fadeInRight}
            >
              Projects
            </h1>
            <div className="row my-5">
              <div
                className={
                  "testbg col-12 col-sm-12 col-md-4 " + this.props.fadeIn
                }
              >
                <div className="overlay">
                  <div className="text">
                    <h2>Safety Guru</h2>
                  </div>
                  <div>
                    <button
                      id="safetyGuru-button"
                      className="project-button"
                      onClick={() => {
                        var modalBG = document.getElementById("gallery-card");
                        var marineModal = document.getElementById("safetyGuru");
                        modalBG.style.display = "block";
                        marineModal.style.display = "block";
                      }}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div
                className={
                  "aguabg col-12 col-sm-12 col-md-4 " + this.props.fadeIn
                }
              >
                <div className="overlay">
                  <div className="text">
                    <h2>Password Generator</h2>
                  </div>
                  <div>
                    <button
                      id="agua-button"
                      className="project-button"
                      onClick={() => {
                        var modalBG = document.getElementById("gallery-card");
                        var aguaModal = document.getElementById("generator");
                        modalBG.style.display = "block";
                        aguaModal.style.display = "block";
                      }}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div
                className={
                  "todobg col-12 col-sm-12 col-md-4 " + this.props.fadeIn
                }
              >
                <div className="overlay">
                  <div className="text">
                    <h2>JS Quiz</h2>
                  </div>
                  <div>
                    <button
                      id="todo-button"
                      className="project-button"
                      onClick={() => {
                        var modalBG = document.getElementById("gallery-card");
                        var todoModal = document.getElementById("jsquiz");
                        modalBG.style.display = "block";
                        todoModal.style.display = "block";
                      }}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*hidden modals*/}
        <div id="gallery-card">
          <div id="safetyGuru" className="modal-card">
            <div className="visual">
              <img src={safetyGuru} alt="" />
            </div>
            <div className="modal-info">
              <h2>Safety Guru</h2>
              <div className="modal-description">
                <ul>
                  <li>
                    Prototype web-application to provide information about
                    vehicles and their Safety Ratings, Crash Ratings, and all of
                    their Recalls.
                  </li>
                  <li>
                    Designed with HTML5, CSS3, NHTSA API, AJAX and Materialize.
                  </li>
                </ul>
              </div>
              <div className="modal-bottom">
                <a href="./safetyguru/index.html" target="_blank">
                  <h3>View live demo</h3>
                </a>
                <p
                  className="close-icon"
                  style={{
                    textAlign: "right",
                    fontWeight: 900,
                    fontSize: 2 + "rem",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    var modalBG = document.getElementById("gallery-card");
                    var marineModal = document.getElementById("safetyGuru");
                    modalBG.style.display = "none";
                    marineModal.style.display = "none";
                  }}
                >
                  &#10005;
                </p>
              </div>
            </div>
          </div>

          <div id="generator" className="modal-card">
            <div className="visual">
              <img src={generator} alt="" />
            </div>
            <div className="modal-info">
              <h2>Password Generator</h2>
              <div className="modal-description">
                <ul>
                  <li>A customizeable password generator</li>
                  <li>Developed with HTML5, CSS3, Bootstrap and VanillaJS.</li>
                </ul>
              </div>
              <div className="modal-bottom">
                <a href="./generator/index.html" target="_blank">
                  <h3>View live demo</h3>
                </a>
                <p
                  className="close-icon"
                  style={{
                    textAlign: "right",
                    fontWeight: 900,
                    fontSize: 2 + "rem",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    var modalBG = document.getElementById("gallery-card");
                    var aguaModal = document.getElementById("generator");
                    modalBG.style.display = "none";
                    aguaModal.style.display = "none";
                  }}
                >
                  &#10005;
                </p>
              </div>
            </div>
          </div>

          <div id="jsquiz" className="modal-card">
            <div className="visual">
              <img src={todo} alt="" />
            </div>
            <div className="modal-info">
              <h2>JS Quiz</h2>
              <div className="modal-description">
                <ul>
                  <li>A Javascript quiz to test what you know.</li>
                  <li>Developed with HTML5, CSS3, Bootstrap, Vanilla Java.</li>
                </ul>
              </div>
              <div className="modal-bottom">
                <a href="./jsquiz/index.html" target="_blank">
                  <h3>View live demo</h3>
                </a>
                <p
                  className="close-icon"
                  style={{
                    textAlign: "right",
                    fontWeight: 900,
                    fontSize: 2 + "rem",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    var modalBG = document.getElementById("gallery-card");
                    var todoModal = document.getElementById("jsquiz");
                    modalBG.style.display = "none";
                    todoModal.style.display = "none";
                  }}
                >
                  &#10005;
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Projects.propTypes = {
  bounceIn: PropTypes.string,
  fadeInLeft: PropTypes.string,
  fadeInRight: PropTypes.string,
  fadeIn: PropTypes.string,
  tada: PropTypes.string,
};
