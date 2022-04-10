import React from 'react';
import meImage from "../../assets/images/Me.jpg"


        const About = () => {
            return (
              <section className="flex-row about-container">
                  <h2 className="primary-section-title">// About Me //</h2>
                <section className="flex-row section-info about-info">
                  <section className="bio-img">
                    <img
                      src={meImage}
                      alt="Aaron"
                    />
                  </section>
                  <section className="bio-text"></section>
                    <p>
                    Hello! I am Aaron, a student of .Full-stack Web Development from Salt Lake City, Utah
                    attending coding bootcamp at The University of Utah . 
                    I love sports, weight-training, and spending time with family.
                    </p>
                    <p>
                    For more than 5 months, I've been developing my technical and non-technical skills 
                    working on Front and Back-end projects using HTML, CSS, React, JavaScript, 
                    Node, Mysql as well as other frameworks and languages to build real-world projects.
                    </p>
                </section>
             </section>
       
  );
};

export default About;