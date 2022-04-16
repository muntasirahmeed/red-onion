import React from "react";
import {
  useSignInWithGoogle,
  useSignInWithFacebook,
  useSignInWithGithub,
} from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";
const SocialLogin = () => {
  const [signWithGoogle, user1, , erro1] = useSignInWithGoogle(auth);
  const [signWithFacebook, user2, , erro2] = useSignInWithFacebook(auth);
  const [signWithGithub, user3, , erro3] = useSignInWithGithub(auth);
  let errorMsg = "";
  if (erro1 || erro2 || erro3) {
    errorMsg = (
      <p className="text-center text-xs text-rose-800">
        {erro1?.message}
        {erro2?.message}
        {erro3?.message}
      </p>
    );
  } else {
    errorMsg = "";
  }
  return (
    <div className="mt-5">
      {errorMsg}
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
          onClick={() => signWithFacebook()}
          className="h-10 w-10 cursor-pointer shadow rounded-full"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
          alt=""
        />
        <img
          onClick={() => signWithGithub()}
          className="h-10 w-10 cursor-pointer shadow rounded-full"
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default SocialLogin;
