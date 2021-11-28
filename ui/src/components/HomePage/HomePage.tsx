import { ReactComponent as Background } from "assets/Icons/background.svg";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
/** @jsxImportSource @emotion/react */
import "twin.macro";

export const HomePage = () => {
  const history = useHistory();

  const handleBooking = () => {
    history.push(`/booking?step=1`);
  };

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://unpkg.com/typer-dot-js@0.1.0/typer.js";
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return (
    <div tw="py-16 px-4">
      <div tw="flex items-center justify-center">
        <div tw="w-1/3">
          <Background height={450} width={450} />
        </div>

        <div tw="w-1/3">
          <h1 tw="font-bold text-5xl width[350px] text-gray-900 leading-tight">
            We are here for your{" "}
            <span
              className="typer"
              data-colors="#dc3538"
              id="main"
              data-words="hair.,style.,pleasure."
              data-delay="100"
              data-deletedelay="1000"
            >
              hair
            </span>
            <span
              tw="text-red-500"
              className="cursor"
              data-cursordisplay="|"
              data-owner="main"
              style={{ transition: "all 0.1s ease 0s", opacity: "1" }}
            >
              |
            </span>
          </h1>
          <hr tw="w-24 h-1 bg-red-500 rounded-full mt-8 ml-0"></hr>
          <p tw="text-gray-800 text-base leading-relaxed mt-8 font-semibold">
            You just leave your phone number here
          </p>
          <div tw="flex mx-auto width[83%]">
            <button
              onClick={handleBooking}
              tw="text-xl bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded cursor-pointer"
            >
              Booking Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
