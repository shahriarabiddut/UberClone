import React, { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { CaptainDataContext } from "../context/CaptainContext";
import useAxiosPublic from "../hooks/useAxiosPublic";

const CaptainProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { captain, setCaptain, isLoading, setIsLoading } =
    useContext(CaptainDataContext);
  const axiosPublic = useAxiosPublic();
  const hasExecuted = useRef(false);
  useEffect(() => {
    if (!token) {
      navigate("/captain/login");
    }
    if (!hasExecuted.current) {
      hasExecuted.current = true;
      axiosPublic
        .get("/captains/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            const data = response.data;
            if (data.captain === null) {
              localStorage.removeItem("token");
              navigate("/captain/login");
            }
            setCaptain(data.captain);
          }
        })
        .catch((error) => {
          console.log(error);
          localStorage.removeItem("token");
          setIsLoading(false);
          navigate("/captain/login");
        });
    }
    setIsLoading(false);
    // console.log("CaptainProtectedWrapper");
  }, [token, navigate]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <></>
      {children}
    </>
  );
};

export default CaptainProtectedWrapper;
