import "./Login.css";
import LoginImg from "../../assets/gif/Login.gif";
import google from "../../assets/icons/google.svg";

import TextField from "../../elements/TextField/TextField";
import { NavLink } from "react-router-dom";
import TextFieldPassword from "../../elements/TextField/TextFieldPassword";
import { useEffect, useState } from "react";
import ButtonComponent from "../../elements/Buttons/ButtonComponent";
import { adminApi, membershipApi } from "../../api/Api";
// import useAxios from "../../customhooks/useAxios";
import { setUserSession } from "../../util/common";
import useAxiosFunction from "../../customhooks/useAxiosFunction";
import useAxios from "../../customhooks/useAxios";
const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bodyApi, setBodyApi] = useState();

  const [response, error, loading, axiosFetch] = useAxiosFunction();
  // const getData = () => {
  //   axiosFetch({
  //     api: membershipApi,
  //     method: "get",
  //     url: "/membership",
  //   });
  // };
  // useEffect(() => {
  //   getData();
  //   // eslint-disable--line react-hooks/exhaustive-deps
  // }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    axiosFetch({
      api: adminApi,
      method: "POST",
      url: "/login",
      requestConfig: {
        headers: {
          Accept: "application/json",
        },
        data: {
          email: email,
          password: password,
        },
      },
    });

    // axiosFetch({
    //   api: membershipApi,
    //   method: "POST",
    //   url: "/membership",
    //   requestConfig: {
    //     // headers: {
    //     //   Accept: "application/json",
    //     // },
    //     data: {
    //       // email: email,
    //       // password: password,
    //       receiver: "test1",
    //       type: "test1",
    //       status: "active",
    //       date: "2023-06-02T01:27:40.923Z",
    //       amount: "387.00",
    //       img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/826.jpg",
    //       gender: "cwk",
    //       email: "Westley_VonRueden81@gmail.com",
    //       weight: 16,
    //       height: 8,
    //       goal_weight: 3,
    //       payment: "payment 1",
    //       id: "5",
    //     },
    //   },
    //   // body: JSON.stringify({
    //   //   email: email,
    //   //   password: password,
    //   // }),
    // });

    // console.log(email);
    // console.log("+++++++++++++++++++++++++");
    // console.log(error);
    // console.log("+++++++++++++++++++++++++");
    // console.log(password);
    // setAdminSession(response.token, response.role);

    // if (email === "") {
    //   alert("Please enter email");
    // } else if (password === "") {
    //   alert("Please enter password");
    // }
  };
  // console.log(response);
  // useEffect(() => {
  //   if (response !== null) {
  //     console.log(response);
  //   }
  // });
  return (
    <>
      <div className="overflow-hidden overflow-x-hidden">
        <div className="row">
          <div className="col-6 d-none d-md-block">
            <img
              src={LoginImg}
              alt=""
              style={{ height: "100vh", width: "55vw" }}
            />
          </div>
          <div className=" col-md-6 LoginRightSide rounded-5 d-flex justify-content-center align-items-center ">
            <div className=" w-75 ">
              <p className=" mt-5 fw-bold fs-1 h1-rightside">Welcome!</p>
              <p className=" mt-3 fw-semibold fs-5 mb-4">Log in you account</p>
              <TextField
                label={`Your Email`}
                type={"text"}
                name={"email"}
                id={"email"}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                placeholder={"userName@gmail.com"}
                classNameLabel={"mb-2 text-secondary"}
              />

              <div className="mt-4">
                <TextFieldPassword
                  placeholder={"******"}
                  label="Password"
                  id={"password"}
                  name={"password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  classNameLabel={"mb-2 text-secondary"}
                />
              </div>
              <div className="row mt-3">
                <div className="col-6">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="rememberme"
                      checked={rememberMe}
                      onChange={() => setRememberMe(!rememberMe)}
                    />
                    <label
                      className="form-check-label fw-semibold"
                      htmlFor="exampleCheck1">
                      Remember Me
                    </label>
                  </div>
                </div>
                <div className="col-6 text-end">
                  {/* <NavLink to={""}> */}
                  <p className="ForgotPasswordText">Forgot Password?</p>
                  {/* </NavLink> */}
                </div>
              </div>

              <ButtonComponent
                type={"submit"}
                className={"btn-login fs-5"}
                id={"login"}
                onClick={handleLogin}
                buttonName={"Log in"}
              />
              <div className="LineTextMiddle mt-5 mb-5">
                <span className="fs-5">or</span>
              </div>

              <ButtonComponent
                type={"button"}
                className={"btnGoogle p-2"}
                id={"googlelogin"}
                onClick={() => {
                  console.log("login with google");
                }}
                imgUrlStart={google}
                buttonName={
                  <span className="fs-5 ms-3 fw-semibold">
                    Continue with Google
                  </span>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
