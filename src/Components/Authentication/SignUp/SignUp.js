import React, { useRef, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../Firebase/firebase.init";
import logo from "../../../Images/all-image/logo2.png";
import SocialLogin from "../SocialLogin/SocialLogin";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confrimPass, setConfrimPass] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  console.log(email, password, name, confrimPass);
  // const emailRef = useRef();
  // const passRef = useRef();
  // const nameRef = useRef();
  // const confrimRef = useRef();
  // const setValue = () => {
  //   setEmail(emailRef.current.value);
  //   setPassword(passRef.current.value);
  //   setConfrimPass(confrimRef.current.value);
  //   setName(nameRef.current.value);
  // };
  let errorMsg;
  <i></i>

  const submitFrom = (event) => {
    event.preventDefault();
   
  };
  return (
    <div className="banner2">
      <div className="h-[100vh] flex justify-center items-center w-full font-poppins">
        <form onSubmit={submitFrom}>
          <div className="bg-gray-100 px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
            <img className="h-10 block mx-auto" src={logo} alt="" />
            <div className="space-y-4 mt-10">
              <div>
                <input
                  placeholder="Name"
                  onBlur={(event) => setName(event.target.value)}
                  name="name"
                  type="text"
                  className="bg-slate-200 px-4 py-2 outline-none rounded-md w-full"
                />
              </div>
              <div>
                <input
                  placeholder="Email"
                  onBlur={(event) => setEmail(event.target.value)}
                  name="email"
                  type="email"
                  className="bg-slate-200 px-4 py-2 outline-none rounded-md w-full"
                />
              </div>

              <div>
                <input
                  placeholder="Password"
                  onBlur={(event) => setPassword(event.target.value)}
                  name="password"
                  type="password"
                  className="bg-slate-200 px-4 py-2 outline-none rounded-md w-full"
                />
              </div>
              <div>
                <input
                  placeholder="Confrim Password"
                  onBlur={(event) => setConfrimPass(event.target.value)}
                  name="confirmpass"
                  type="password"
                  className="bg-slate-200 px-4 py-2 outline-none rounded-md w-full"
                />
              </div>
            </div>

            <button className="mt-5 w-full text-white bg-rose-700 font-semibold py-2 rounded-md  tracking-wide">
              Register
            </button>
            <p className="text-center mt-3">
              <small>
                Already have an account ?{" "}
                <Link className="text-rose-500" to="/login">
                  Login
                </Link>
              </small>
            </p>
            {errorMsg}
            {/* or section  */}
            <SocialLogin></SocialLogin>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
