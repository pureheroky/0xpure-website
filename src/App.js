import React, { useState, useEffect } from "react";

const UserBlog = React.lazy(() => import("./components/UserBlock"));
const MainContent = React.lazy(() => import("./components/MainContent"));

function App() {
  const [jusitfy, setJustify] = useState(false);
  const [isMobile, setMobile] = useState("flex-row");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setJustify(true);
    }, 500);
    if (window.matchMedia("only screen and (max-width: 760px)").matches) {
      setMobile("flex-col");
    }

    return () => clearTimeout(timeout);
  }, [jusitfy]);

  return (
    <div className=" bg-periwinkle flex w-full h-full flex-col">
      <div className={`bg-periwinkle flex ${isMobile} w-full h-full`}>
        <UserBlog />
        <MainContent />
      </div>
    </div>
  );
}

export default App;