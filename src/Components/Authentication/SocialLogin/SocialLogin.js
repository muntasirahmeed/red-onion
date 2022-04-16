import React from "react";
import {
  useSignInWithGoogle,
  useSignInWithFacebook,
  useSignInWithGithub,
} from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";
const SocialLogin = () => {
  const [signWithGoogle, user, loading, error1] = useSignInWithGoogle(auth);

  // const googleLogin = () => {};
  // const facebookLogin = () => {};
  // const githubLogin = () => {};
  if (user) {
    console.log(user);
  }
  return (
    <div className="mt-5">
      <div className="flex items-center mt-3">
        <div className="h-[2px] bg-gray-600 w-full rounded-full"></div>
        <div className="mx-6 text-gray-600">Or</div>
        <div className="h-[2px] bg-gray-600 w-full rounded-full"></div>
      </div>
      <div className="flex items-center justify-center space-x-3 mt-3">
        <img
          onClick={() => signWithGoogle()}
          className="h-10 w-10 cursor-pointer shadow rounded-full"
          src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png"
          alt=""
        />
        <img
          className="h-10 w-10 cursor-pointer shadow rounded-full"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
          alt=""
        />
        <img
          className="h-10 w-10 cursor-pointer shadow rounded-full"
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default SocialLogin;
