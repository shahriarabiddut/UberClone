import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import useAxiosPublic from "../hooks/useAxiosPublic";

const CaptainSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState(1);
  const [vehicleType, setVehicleType] = useState("");
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: { firstname: firstName, lastname: lastName },
      email,
      password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        type: vehicleType,
      },
    };
    const response = await axiosPublic.post(`/captains/register`, captainData);
    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate(`/captainHome`);
    }
    // console.log(captain);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
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
          <div>
            <h3 className="text-lg mb-2 font-medium">
              Whats Our Captain's Name
            </h3>
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
          <h3 className="text-lg mb-2 font-medium">
            Whats Our Captain's Email
          </h3>
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
          <h3 className="text-lg mb-2 font-medium">Vehicle Details</h3>
          <div className="flex justify-between gap-4 mb-7">
            <input
              type="text"
              required
              placeholder="Vehicle Color"
              className="bg-gray-300 rounded-xl px-4 py-2 w-1/2 text-base placeholder:text-sm"
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
            />
            <input
              type="text"
              required
              placeholder="Vehicle Plate"
              className="bg-gray-300 rounded-xl px-4 py-2 w-1/2 text-base placeholder:text-sm"
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
            />
          </div>
          <div className="flex justify-between gap-4 mb-7">
            <input
              type="number"
              required
              placeholder="Seating Capacity"
              className="bg-gray-300 rounded-xl px-4 py-2 w-1/2 text-base placeholder:text-sm"
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
            />
            <select
              required
              className="bg-gray-300 rounded-xl px-4 py-2 w-1/2 text-base"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value="">Select Type</option>
              <option value="car">Car</option>
              <option value="motorcycle">Bike</option>
              <option value="cng">CNG</option>
            </select>
          </div>
          <br />
          <button className="bg-black text-white mb-7 px-4 py-2 w-full text-lg cursor-pointer hover:bg-gray-100 hover:text-black font-bold hover rounded-lg">
            Sign Up as a Captain
          </button>
          <p className="text-center">
            Already Have an Account?{" "}
            <Link className="text-blue-600 font-medium" to={`/captain/login`}>
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

export default CaptainSignup;
