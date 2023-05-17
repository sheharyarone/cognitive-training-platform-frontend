import React from "react";
import Navbar from "../components/Navbar";
import "../styles/HomeScreen.css";
import MoleCard from "../assets/whack-a-mole.png";
import MemoryCard from "../assets/kisspng-computer-icons-human-brain-human-head-icon-design-line-infographic-5b4f2cd98406f8.2493640015319154815408.png";

export default function HomeScreen() {
  return (
    <div className="bg-home">
      <Navbar />
      <div className="h1 headingcolor text-center pt-lg-5">
        <p className="display-4">Welcome to Neuro Nexus!</p>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-12 d-flex align-items-center justify-content-center">
            <div className=" col-lg-12 col-md-6 d-flex flex-column align-items-center">
              <button
                className="btn colorprimary btn-lg mt-3"
                onClick={() => (window.location.href = "./whackamole")}
              >
                <img
                  src={MoleCard}
                  className="black-to-white"
                  style={{ width: "300px" }}
                  alt="Mole Card"
                />
                <p className="px-2 py-1 m-0 text-white text-center h3">
                  Whack-a-Mole
                </p>
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 d-flex align-items-center justify-content-center">
            <div className="d-flex flex-column align-items-center">
              <button
                className="btn colorprimary btn-lg mt-3"
                onClick={() => (window.location.href = "./memorymatch")}
              >
                <img
                  src={MemoryCard}
                  className="black-to-white"
                  style={{ width: "260px" }}
                  alt="Memory Card"
                />
                <p className="px-2 py-1 m-0 text-white text-center h3">
                  Memory Match
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
