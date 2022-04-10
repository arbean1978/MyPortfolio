import React from "react";

import Nav from "../Nav";

function Header(props) {

  return (
    <div>
      <div className="div-container h-24 bg-gray-400">
        <h1 className="heading div-container h-24 bg-gray-400">Aaron Bean</h1>
      </div>
      <Nav
        navSections={props.navSections}
        setCurrentSection={props.setCurrentSection}
        currentSection={props.currentSection}
      ></Nav>
    </div>
  );
};

export default Header;