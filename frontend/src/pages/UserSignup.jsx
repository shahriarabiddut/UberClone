import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import useAxiosPublic from "../hooks/useAxiosPublic";

const UserSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUSer = {
      fullname: { firstname: firstName, lastname: lastName },
      email,
      password,
    };
    console.log(newUSer);
    const response = await axiosPublic.post("/users/register", newUSer);
    if (response.status === 201) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate(`/home`);
    }
    // console.log(newUSer);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        {" "}
        <Link to={`/`}>
          <img
            className="w-16 mb-7"
            src="https://pngimg.com/d/uber_PNG24.png"
            alt=""
          />
        </Link>
        <form onSubmit={handleSubmit}>
          <div>
            <h3 className="text-lg mb-2 font-medium">Whats Your Name</h3>
            <div className="flex justify-between gap-4 mb-7">
              <input
                type="text"
                required
                placeholder="First Name"
                className="bg-gray-300 rounded-xl px-4 py-2 w-1/2 text-base placeholder:text-sm"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                required
                placeholder="Last Name"
                className="bg-gray-300 rounded-xl px-4 py-2 w-1/2 text-base placeholder:text-sm"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <h3 className="text-lg mb-2 font-medium">Whats Your Email</h3>
          <input
            type="email"
            required
            placeholder="email@example.com"
            className="bg-gray-300 mb-7 rounded-xl px-4 py-2 w-full text-base placeholder:text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3 className="text-lg mb-2 font-medium">Enter Your Password</h3>
          <input
            type="password"
            required
            placeholder="password"
            className="bg-gray-300 mb-7 rounded-xl px-4 py-2 w-full text-base placeholder:text-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button className="bg-black text-white mb-7 px-4 py-2 w-full text-lg cursor-pointer hover:bg-gray-100 hover:text-black font-bold hover rounded-lg">
            Sign Up
          </button>
          <p className="text-center">
            Already Have an Account?{" "}
            <Link className="text-blue-600 font-medium" to={`/login`}>
              Login Here
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className="text-sm text-center mt-7">
          By proceeding, you consent to get calls, WhatsApp or SMS/RCS messages,
          including by automated means, from Uber and its affiliates to the
          number provided.
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
