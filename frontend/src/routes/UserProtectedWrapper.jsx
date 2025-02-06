import React, { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { UserDataContext } from "../context/UserContext";
import useAxiosPublic from "../hooks/useAxiosPublic";

const UserProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { user, setUser, isLoading, setIsLoading } =
    useContext(UserDataContext);

  const axiosPublic = useAxiosPublic();
  const hasExecuted = useRef(false);
  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else if (!hasExecuted.current) {
      hasExecuted.current = true;
      axiosPublic
        .get("/users/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            const data = response.data;
            if (data.user === null) {
              localStorage.removeItem("token");
              navigate("/login");
            }
            setUser(data.user);
          }
        })
        .catch((error) => {
          console.log(error);
          localStorage.removeItem("token");
          setIsLoading(false);
          navigate("/login");
        });
    }
    setIsLoading(false);
    // console.log("UserProtectedWrapper");
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

export default UserProtectedWrapper;
