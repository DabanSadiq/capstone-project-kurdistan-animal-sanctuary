/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";

import Slider from "react-slick";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import shelter1 from "../public/assests-shelters/shelter 1.jpg";

import shelter2 from "../public/assests-shelters/shelter 2.jpg";

import shelter3 from "../public/assests-shelters/shelter 3.jpeg";

import shelter4 from "../public/assests-shelters/shelter 4.jpg";

import shelter5 from "../public/assests-shelters/shelter 5.jpg";

import shelter6 from "../public/assests-shelters/shelter 6.jpg";

import shelter7 from "../public/assests-shelters/shelter 7.jpg";

import shelter8 from "../public/assests-shelters/shelter 8.jpg";

const shelterImg = [
  {
    picture: shelter1,
    about:
      "1.lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem loremipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum",
  },
  {
    picture: shelter2,
    about:
      "2.lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem loremipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum",
  },
  {
    picture: shelter3,
    about:
      "3.lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem loremipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum",
  },
  {
    picture: shelter4,
    about:
      "4.lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem loremipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum",
  },
  {
    picture: shelter5,
    about:
      "5.lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem loremipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum",
  },
  {
    picture: shelter6,
    about:
      "6.lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem loremipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum",
  },
  {
    picture: shelter7,
    about:
      "7.lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem loremipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum",
  },
  {
    picture: shelter8,
    about:
      "8.lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem loremipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum",
  },
];

export default function ResourceCenter() {
  const NextArrow = ({ onClick }) => (
    <div className="top-1/3 right-0 arrow1 bg-transparent" onClick={onClick}>
      <FaArrowRight />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="top-1/3 left-0 arrow1 bg-transparent "
      onClick={onClick}
      aria-hidden="true"
    >
      <FaArrowLeft />
    </div>
  );

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="block px-4 md:px-20">
      <h1 className="font-extrabold text-center pt-16 pb-5 text-Quicksand text-3xl text-primary">
        RESOURCES CENTER
      </h1>
      <p className="text-center p-4 md:p-6 text-secondary font-bold w-full">
        lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit
        amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem
        ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem
        ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet
        lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum
        dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum
        dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem
        lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem ipsum dolor
        lorem ipsum dolor sit amet lorem lorem ipsum dolor lorem ipsum dolor sit
        amet lorem lorem ipsum dolor lorem ipsum dolor sit amet lorem lorem
        ipsum dolor lorem ipsum dolor sit amet lorem
      </p>
      <h1 className="text-xl font-bold text-center font-Quicksand   text-primary pt-6 pb-10">
        Find Shelters We Work With
      </h1>

      <Slider className="slider w-4/5" {...settings}>
        {shelterImg.map((img, idx) => (
          <div
            className={
              idx === imageIndex
                ? " activeSlide w-52 md:w-64 h-52 md:h-64 rounded-lg"
                : " slide rounded-lg"
            }
          >
            <img
              src={img.picture.src}
              alt={img}
              className=" w-full h-full hover:bg-gray-300 object-cover"
            />
          </div>
        ))}
      </Slider>

      <div className="text-center font-bold	 text-secondary font-Quicksand mb-16 mt-1 ">
        {shelterImg[imageIndex].about}
      </div>
    </div>
  );
}
