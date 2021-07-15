import React from "react";

const Signup = () => (
  <div className="bg-background h-screen bg-clip-content bg-no-repeat  bg-cover flex">
    <backgroundImage />
    <div className="m-auto bg-secondary bg-opacity-80 max-w-lg rounded-xl text-center w-96 ">
      <div className="w-80 m-auto ">
        <p className="text-primary text-5xl text-center font-Quicksand p-10 font-bold">
          Join Us
        </p>
        <div className="flex flex-col ">
          <input
            faIcon="envelope"
            placeholder="   Email   "
            className="border mb-6 border-primary rounded text-primary text-sm h-10 bg-secondary"
          />
          <input
            placeholder="   Password   "
            className="border  mb-6 border-primary rounded  text-primary text-sm h-10 bg-secondary"
            type="password"
          />
        </div>
        <div className="flex flex-row">
          <input
            placeholder="   First Name   "
            className="border border-primary rounded text-primary text-sm w-30 h-10 bg-secondary"
          />
          <span className="mr-6" />
          <input
            placeholder="   Last Name   "
            className="border mb-6 border-primary rounded text-primary text-sm w-30 h-10 bg-secondary"
          />
        </div>
        <button
          type="submit"
          className="place-items-center text rounded text-center mb-6 py-2 px-20 font-bold text-primary bg-highlight hover:bg-darken"
        >
          Sign up
        </button>
      </div>
      <div className="text-center text-primary font-Quicksand text-sm font-bold">
        <h1>Or continue With</h1> <br />
        <div className="flex flex-row items-center justify-center p-8">
          <span>
            <a href="www.facebook.com">
              <img
                alt="fb"
                className="w-10"
                src="https://seeklogo.com/images/F/facebook-icon-circle-logo-09F32F61FF-seeklogo.com.png"
              />
            </a>
          </span>
          <span className="ml-10" />
          <span>
            <a href="www.Google.com">
              <img
                alt="Google"
                className="w-10"
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png"
              />
            </a>
          </span>
          <span className="ml-10" />
          <span>
            <a href="www.Twitter.com">
              <img
                alt="Twitter"
                className="w-10"
                src="https://seeklogo.com/images/T/twitter-icon-circle-blue-logo-0902F48837-seeklogo.com.png"
              />
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
);
export default Signup;
