import React from "react";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const boxStyle = {
    zIndex: "1000",
    position: "fixed",
    width: "100%",
    backgroundColor: scrolled ? "#ffffffff" : "transparent",
    transition: "background-color 0.01s ease",
    // zIndex: 999,
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg "
        style={boxStyle}
        id="navbarSupportedContent"
      >
        <div className="container-fluid mx-4">
          <a className="navbar-brand d-flex" href="#">
            <h3 className="d-flex">
              <b style={{ color: "red" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-award-fill "
                  viewBox="0 0 16 16"
                >
                  <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914" />
                </svg>
                A
              </b>
              <p>Kshay</p>
            </h3>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto d-flex gap-4 ">
              <li className="nav-item ">
                <a className="nav-link active " aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Link
                </a>
              </li>
            </ul>
            <div className="d-flex" role="search">
              <button
                className="btn text-white"
                type="submit"
                style={{ backgroundColor: "rgb(114 90 235)" }}
              >
                <b>
                  Download CV <i className="bi mx-1 bi-arrow-right"></i>
                </b>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
