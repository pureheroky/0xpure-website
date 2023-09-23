import React, { Suspense } from "react";
import avatar from "../img/av.jpg";
import { useState, useEffect } from "react";

const AboutMobile = React.lazy(() => import("./mobile/AboutMobile"));
const SkillsMobile = React.lazy(() => import("./mobile/SkillsMobile"));
const PortfolioMobile = React.lazy(() => import("./mobile/PortofolioMobile"));

function UserBlog() {
  const [isVisible, setVisible] = useState(false);
  const [x, setX] = useState(false);
  const [isMobile, setMobile] = useState(false);
  const [isMobileWidth, setMobileWidth] = useState("w-1/4 p-8");
  const [isMobileImage, setMobileImage] = useState(
    "xl:w-52 xl:h-52 2xl:w-60 2xl:h-60 md:w-24 md:h-24 3xl:w-80 3xl:h-80 sm:w-24 sm:h-24"
  );
  const [mobileFragment, setMobileFragment] = useState("");

  useEffect(() => {
    const timeoutOpacity = setTimeout(() => {
      setVisible(true);
    }, 700);
    const timeoutX = setTimeout(() => {
      setX(true);
    }, 2000);

    if (window.matchMedia("only screen and (max-width: 760px)").matches) {
      setMobile(true);
      setMobileWidth("w-full p-3");
      setMobileImage("w-28 h-28");
    }

    return () => {
      clearTimeout(timeoutOpacity);
      clearTimeout(timeoutX);
    };
  }, []);

  function MobileFragmentFunction() {
    if (isMobile) {
      return (
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <div className="flex justify-center flex-row">
              <span
                className="p-2 font-Poppins text-black-blue-dark-darker font-semibold"
                onClick={() => {
                  setMobileFragment(<AboutMobile />);
                }}
              >
                About
              </span>
              <span
                className="p-2 font-Poppins text-black-blue-dark-darker font-semibold"
                onClick={() => {
                  setMobileFragment(<SkillsMobile />);
                }}
              >
                Skills
              </span>
              <span
                className="p-2 font-Poppins text-black-blue-dark-darker font-semibold"
                onClick={() => {
                  setMobileFragment(<PortfolioMobile />);
                }}
              >
                Portfolio
              </span>
            </div>
            {mobileFragment}
          </Suspense>
        </div>
      );
    }
  }

  return (
    <div
      className={`z-10 overflow-y-hidden flex flex-col h-full ${isMobileWidth} items-center justify-start transform transition-all ease-in-out duration-1000 ${
        isVisible ? "absolute opacity-100" : " absolute opacity-0"
      }
      ${
        x
          ? "translate-x-0 relative"
          : "absolute xl:translate-x-[150%] lg:translate-x-[100%] sm:translate-x-[150%] "
      }`}
    >
      <div className="flex">
        <img
          src={avatar}
          alt="That not me, just an image"
          className={`${isMobileImage} rounded-full`}
        ></img>
      </div>

      <div>
        <span
          className={`flex font-Poppins font-semibold xl:text-2xl 2xl:text-3xl md:text-xs sm:text-sm 3xl:text-6xl mt-5 text-black-blue-dark`}
        >
          0xpure
        </span>
      </div>

      <div>
        <span className="flex xl:text-xl 2xl:text-2xl md:text-xs sm:text-xs 3xl:text-4xl font-Poppins font-semibold m-3 text-center">
          17 y.o Fullstack/Python software developer
        </span>
      </div>

      <MobileFragmentFunction />

      {/* <div>
        <span className="flex xl:text-xl 2xl:text-2xl md:text-xs sm:text-xs 3xl:text-4xl font-Poppins font-semibold m-3 text-center">
          This is not a full-fledged version of the site, to get acquainted with
          the knowledge stack, projects, etc. either contact me or take a look
          at the PC version of the site
        </span>
      </div> */}

      <div className="flex flex-col h-full justify-end items-center">
        <span className="xl:text-2xl 2xl:text-2xl md:text-xs sm:text-sm 3xl:text-5xl font-Poppins font-semibold">
          Contacts:
        </span>
        <div className="font-Poppins font-thin flex flex-col">
          <span className="flex justify-center xl:text-xl 2xl:text-2xl md:text-xs sm:text-xs 3xl:text-2xl ">
            Git:
            <a
              href="https://github.com/0xpure"
              target="_blank"
              className="pl-2"
            >
              github.com/0xpure
            </a>
          </span>
          <span className="flex justify-center xl:text-xl 2xl:text-2xl md:text-xs sm:text-xs 3xl:text-2xl">
            Telegram:
            <a href="https://t.me/pureheroky" target="_blank" className="pl-2">
              t.me/pureheroky
            </a>
          </span>
          <span className="flex justify-center xl:text-xl 2xl:text-2xl md:text-xs sm:text-xs 3xl:text-2xl">
            Discord:<span className="pl-2">pureheroky</span>
          </span>
          <span className="flex justify-center xl:text-xl 2xl:text-2xl md:text-xs sm:text-xs 3xl:text-2xl">
            Gmail:
            <a
              href="mailto:pureheroky@gmail.com"
              target="_blank"
              className="pl-2"
            >
              pureheroky
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default UserBlog;