import React from "react";
function LoadingPage() {
  return (
    <div className="loader">
      <img
        src={require("../../images/VVLoader.gif")}
        alt="Loading..."
        className="loader-image"
      />
    </div>
  );
}

export default LoadingPage;
