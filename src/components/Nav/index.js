import React from "react";

function Nav(props)  {
    const { navSections, setCurrentSection, currentSection } = props;

  return (
    <div className="nav">
      <ul className="nav-list">
        {navSections.map((section) => (
          <li className="nav-item" key={section}>
            <a
              href={["#",section.toLowerCase().replace(/\s/g, '')].join('')}
              onClick={() => {
                setCurrentSection(section);
                console.log("section :: ", "#" & section.toLowerCase().replace(/\s/g, ''));
              }}
              className={
                currentSection === section ? "nav-active" : "nav-inactive"
              }
            >
              {section}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;