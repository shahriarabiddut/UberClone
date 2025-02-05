import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    setCaptainData({ email, password });
    // console.log(captainData);
  };
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <Link to={`/`}>
          <img
            className="w-16 mb-7"
            src="https://www.svgrepo.com/show/505031/uber-driver.svg"
            alt=""
          />
        </Link>
        <form onSubmit={handleSubmit}>
          <h3 className="text-xl mb-2 font-medium">Whats Your Email</h3>
          <input
            type="email"
            required
            placeholder="email@example.com"
            className="bg-gray-300 mb-7 rounded-xl px-4 py-2 w-full text-lg placeholder:text-base"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3 className="text-xl mb-2 font-medium">Enter Your Password</h3>
          <input
            type="password"
            required
            placeholder="password"
            className="bg-gray-300 mb-7 rounded-xl px-4 py-2 w-full text-lg placeholder:text-base"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button className="bg-black text-white mb-7 px-4 py-2 w-full text-lg cursor-pointer hover:bg-gray-100 hover:text-black font-bold hover rounded-lg">
            Login
          </button>
          <p className="text-center">
            Join A Fleet ?{" "}
            <Link className="text-blue-600 font-medium" to={`/captain/signup`}>
              Register As A Captain
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link to={`/login`}>
          <button className="bg-green-400 text-white mb-7 px-4 py-2 w-full text-lg cursor-pointer font-bold hover rounded-lg hover:bg-green-500">
            Sign in as a User
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
