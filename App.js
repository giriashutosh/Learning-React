import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const heading = <h1 className="head">Namaste React using JSX</h1>;

const Title = () => (
  <h1 className="head" tabIndex="5">
    I am a Title Component
  </h1>
)
//React Functional Component
const HeadingComponent = () => {
  return (
    <>
    <div className="container">
      {/* <Title/> or <Title></Title> */} {Title()}
      <h1 className="header">Namaste React Functional Component</h1>
    </div>
    <div className="container">
      {/* <Title/> or <Title></Title> */} {Title()}
      <h1 className="header">Namaste React Functional Component</h1>
    </div>
    </>
    
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />); // render method converting the heading into a tag from object
