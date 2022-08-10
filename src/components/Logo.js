import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      {/* Les images importées depuis la balise IMG sont accessibles dans "public" */}
      <img src="./logo192.png" alt="logo react" />
      <h1>BLOG</h1>
    </div>
  );
};

export default Logo;
