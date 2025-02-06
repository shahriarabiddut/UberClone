import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };
  useGSAP(
    function () {
      gsap.to(panelRef.current, {
        height: panelOpen ? "67%" : 0,
        opacity: panelOpen ? 1 : 0,
        padding: panelOpen ? "1.5rem" : 0,
        duration: 0.5,
        ease: "power4.out",
      });
      gsap.to(panelCloseRef.current, {
        opacity: panelOpen ? 1 : 0,
        duration: 0.5,
        ease: "power4.out",
      });
    },
    [panelOpen]
  );
  return (
    <section className="relative h-screen">
      <img
        className="w-16 absolute top-5 left-5"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
        alt=""
      />
      <div>
        {/* Temporary Image */}
        <img
          className="w-screen h-screen object-cover"
          src="https://cdn.theatlantic.com/thumbor/BlEOtTo9L9mjMLuyCcjG3xYr4qE=/0x48:1231x740/960x540/media/img/mt/2017/04/IMG_7105/original.png"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-end h-screen absolute top-0 w-full ">
        <div className="h-[30%] bg-white p-6 relative">
          <h5
            className="absolute top-3 right-3 text-2xl text-gray-500"
            onClick={() => setPanelOpen(false)}
            ref={panelCloseRef}
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find A Trip</h4>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="line absolute h-20 w-1 top-[43%]  md:left-[6%] lg:left-[4%] left-[8%] bg-gray-800 rounded-full"></div>
            <input
              type="text"
              required
              placeholder="Add A Pickup Location"
              className="bg-gray-300 mb-7 rounded-xl px-12 py-2 w-full text-base placeholder:text-base mt-3"
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
            />
            <input
              type="text"
              required
              placeholder="Enter Your Destination"
              className="bg-gray-300 mb-7 rounded-xl px-12 py-2 w-full text-base placeholder:text-base"
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </form>
        </div>
        <div ref={panelRef} className=" bg-white ">
          <LocationSearchPanel />
        </div>
      </div>
    </section>
  );
};

export default Home;
