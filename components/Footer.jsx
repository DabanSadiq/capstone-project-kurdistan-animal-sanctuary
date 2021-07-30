import React from "react";
import { SocialIcon } from "react-social-icons";

export default function footer() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <footer className="w-full h-96 pt-10 bg-secondary text-2xl bg-paw  bg-no-repeat  bg-cover font-Quicksand">
      <div className=" md:block-inline mx-5 justify-center mx-8 md:mx-0 md:pl-56 md:py-5">
        <div className=" hidden w-20 md:h-40 md:w-40 md:inline-block relative ">
          <img
            src="/logo.png"
            alt="logo"
            className="justify-self-end m-auto w-20 h-20 md:w-36 md:h-36  "
          />
        </div>
        <div className=" mb-5 md:mb-0 md:pt-5 md:pl-24 inline-block text-lg md:text-2xl">
          <h1 className=" text-primary font-bold font-Quicksand">About Us</h1>
          <p className="  text-primary font-Quicksand ">
            Kurdistan Animal Sanctacy (KAS) <br />
            is NGO that saves <br />
            animals and looks for a loving
            <br />
            parent to adopt them
            <br />
          </p>
        </div>
        <div className=" md:pt-5 md:pl-36 inline-block text-lg md:text-2xl">
          <h1 className=" text-primary font-bold font-Quicksand">
            Get in touch
          </h1>
          <p className=" text-primary font-Quicksand ">
            info@kas.com <br />
            964 123 456 7890 <br />
            KRG, Erbil, Iraq
            <br />
          </p>
          <div>
            <ul className="flex flex-row ">
              <li>
                <SocialIcon
                  url="twitter.com"
                  network="twitter"
                  bgColor="#056676"
                />
              </li>
              <li className="pl-1">
                <SocialIcon
                  url="https://www.instagram.com"
                  network="instagram"
                  bgColor="#056676"
                />
              </li>
              <li className="pl-1">
                <SocialIcon
                  url="https://www.facebook.com"
                  network="facebook"
                  bgColor="#056676"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
