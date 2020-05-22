import React from "react";

import github from "../img/github.png";
import linkedin from "../img/linkedin.png";

class Footer extends React.Component {
  render() {
    return (
      <div id="footer" className="container-fluid text-center py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-8 mx-auto">
              <a
                className="px-3"
                href="https://github.com/mikeshev23"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="" />
              </a>
              <a
                href="https://www.linkedin.com/in/mikeshev23"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="" />
              </a>
            </div>
          </div>
          <h5 className="pt-4">Mike Shevchenko &copy; 2018</h5>
        </div>
      </div>
    );
  }
}

export default Footer;
