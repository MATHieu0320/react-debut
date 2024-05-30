import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      {/* Les images avec img sont accesibles dans public */}
      <img src="./logo192.png" alt="LogoReact" />
      <h2>React World</h2>
    </div>
  );
};

export default Logo;
