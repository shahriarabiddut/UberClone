import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <>
      <section className="bg-[url(https://cdn.inprnt.com/thumbs/3b/41/3b41c1cd10d0acb41b6661ff7c779e83.jpg)] bg-cover bg-center h-screen w-full bg-red-500 flex justify-between flex-col pt-8 ">
        <img
          className="w-24 ml-5"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
          alt=""
        />
        <div className="bg-white p-4">
          <h2 className="text-3xl font-bold">Get Started With Uber</h2>
          <Link to={`/login`}>
            <button className="w-full bg-black text-white py-3 cursor-pointer hover:bg-gray-100 hover:text-black font-bold hover rounded-lg mt-4">
              Continue
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Start;
