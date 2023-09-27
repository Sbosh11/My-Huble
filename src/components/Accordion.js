import React, { useState } from "react";
import sectionText from "../text/sectionText";
import Images from "../imgs/accord-imgs";
import "./Accordion.css";

function Accordion() {
  // Define initial accordion section states based on the text data
  const [sections, setSections] = useState(
    sectionText.map((section, index) => ({
      key: section.key,
      isOpen: index === 0, // First section is expanded by default
    }))
  );

  // Toggle the accordion section
  const toggleSection = (key) => {
    setSections((prevState) =>
      prevState.map(
        (section) =>
          section.key === key
            ? { ...section, isOpen: !section.isOpen }
            : { ...section, isOpen: false } // Close all other sections
      )
    );
  };

  return (
    <div className="main-container">
      <div>
        <h1>Connecting the industry through digital closing solutions</h1>
        <p>
          Select your organization type to learn how Snapdocs can help you save
          time and money on every transaction.
        </p>
      </div>
      <div className="holding-container">
        <div className="left-section">
          {/* Mapping and rendering accordion sections */}
          {sections.map((section) => (
            <div
              className={`accordion-section ${
                section.isOpen ? "expanded" : ""
              }`}
              key={section.key}
            >
              <div
                className="accordion-header"
                onClick={() => toggleSection(section.key)}
              >
                <h2>
                  {
                    sectionText.find((item) => item.key === section.key)
                      ?.headerText
                  }
                </h2>
                <i className={`arrow ${section.isOpen ? "up" : "down"}`} />
              </div>
              <div
                className={`accordion-content ${
                  section.isOpen ? "expanded slide-up" : "slide-down"
                }`}
              >
                {section.isOpen && (
                  <div className="left-section-content">
                    {/* Accordion section content */}
                    <p>
                      {
                        sectionText.find((item) => item.key === section.key)
                          ?.contentText
                      }
                    </p>
                    <div className="cta-buttons">
                      {/* CTA Button 1 */}
                      <a
                        href={
                          sectionText.find((item) => item.key === section.key)
                            ?.buttonLink1
                        }
                        className="primary-button"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {
                          sectionText.find((item) => item.key === section.key)
                            ?.buttonText1
                        }
                      </a>
                      {/* CTA Button 2 */}
                      <a
                        href={
                          sectionText.find((item) => item.key === section.key)
                            ?.buttonLink2
                        }
                        className="secondary-button"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {
                          sectionText.find((item) => item.key === section.key)
                            ?.buttonText2
                        }
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="right-section">
          {/* Mapping and rendering images */}
          {sections.map((section) => (
            // ...
            <div
              className={`image-container ${
                section.isOpen ? "expanded slide-up" : "slide-down"
              }`}
              key={section.key}
            >
              {section.isOpen && (
                <img
                  src={Images[section.key].src}
                  alt={Images[section.key].alt}
                  width={Images[section.key].width}
                  height={Images[section.key].height}
                />
              )}
            </div>
            // ...
          ))}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
