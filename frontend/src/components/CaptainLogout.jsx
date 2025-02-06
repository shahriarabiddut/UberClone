import React, { useEffect, useRef } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

const CaptainLogout = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const hasExecuted = useRef(false);

  useEffect(() => {
    if (!token) {
      navigate("/captain/login");
    } else if (!hasExecuted.current) {
      hasExecuted.current = true;
      console.log("Logging out...");

      axiosPublic
        .get(`/captains/logout`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            localStorage.removeItem("token");
            navigate(`/captain/login`);
          }
        })
        .catch((error) => {
          console.log(error);
          navigate(`/`);
        });
    }
  }, [token, navigate, axiosPublic]);

  return <Loading />;
};

export default CaptainLogout;
