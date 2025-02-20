import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import useAxiosPublic from "../hooks/useAxiosPublic";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { email, password };
    const response = await axiosPublic.post("/users/login", userData);
    if (response.status === 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate(`/home`);
    }
    // console.log(userData);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <Link to={`/`}>
          <img
            className="w-16 mb-7"
            src="https://pngimg.com/d/uber_PNG24.png"
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
            New Here ?{" "}
            <Link className="text-blue-600 font-medium" to={`/signup`}>
              Create New Account
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link to={`/captain/login`}>
          <button className="bg-orange-400 text-white mb-7 px-4 py-2 w-full text-lg cursor-pointer font-bold hover rounded-lg hover:bg-orange-500">
            Sign in as a Captain
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
