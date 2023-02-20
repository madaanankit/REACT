import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div>
      <h3 className="text-xl">{title}</h3>
      {isVisible ? (
        <button
          onClick={() => setIsVisible(false)}
          className="cursor-pointer underline"
        >
          Hide
        </button>
      ) : (
        <button
          onClick={() => setIsVisible(true)}
          className="cursor-pointer underline"
        >
          Show
        </button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};
const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");
  return (
    <div>
      <h1>Instamart</h1>
      <Section
        title={"About"}
        description={"About Instamart"}
        isVisible={visibleSection === "about"}
        setIsVisible={() =>
          setVisibleSection(visibleSection === "about" ? "" : "about")
        }
      />
      <Section
        title={"Team"}
        description={"Team Instamart"}
        isVisible={visibleSection === "team"}
        setIsVisible={() =>
          setVisibleSection(visibleSection === "team" ? "" : "team")
        }
      />
      <Section
        title={"Careers"}
        description={"Careers in Instamart"}
        isVisible={visibleSection === "careers"}
        setIsVisible={() =>
          setVisibleSection(visibleSection === "careers" ? "" : "careers")
        }
      />
    </div>
  );
};

export default Instamart;
