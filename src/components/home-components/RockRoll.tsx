import React from "react";
import Image from "next/image";
import TitlePill from "../TitlePill";
import Button from "../Button";

type Props = {};

const RockRoll = (props: Props) => {
  return (
    <div className="mt-32">
      <div>
        <TitlePill title="Benefits" />
        <h2 className="text-secondary text-4xl w-full font-semibold my-2 leading-normal">
          Our Rock and Roll
        </h2>
        <p className="text-text-color-2 text-lg">
          We bring ideas to life by combining years of
        </p>
      </div>

      <div className="mt-14 grid grid-cols-5 gap-4">
        <div className="relative w-full h-full pb-6 col-span-2">
          <div className="px-6 pb-6 relative z-10 h-full">
            <div className="w-fit mx-auto">
              <Image
                src="/images/guy-with-laptop.png"
                alt="who we are"
                width={300}
                height={369}
              />
            </div>
            <div className="bg-secondary rounded-2xl p-6 flex flex-row gap-x-6 items-center mb-2">
              <Image
                src="/images/calculator-icon.png"
                alt="calc"
                width={71}
                height={71}
              />
              <div>
                <p className="text-white text-xl font-semibold mb-1">
                  Expert Team
                </p>
                <p className="text-white text-base">
                  Start free while you learn
                </p>
              </div>
            </div>
            <Button title="Try Us" bg="bg-secondary" textColor="text-white" />
          </div>
          <div className="absolute bottom-0 left-0 bg-bisque rounded-2xl w-full h-[95%]" />
        </div>
        <div className="col-span-3 w-full h-full flex items-center pl-20">
          <div>
            <TitlePill
              title="Design"
              bg="bg-primary"
              border="border border-red border-solid"
              textColor="text-secondary"
            />
            <p className="text-text-color-1 text-2xl font-semibold mt-4">
              Pulsar was designed with the idea of being easy to use
            </p>
            <p className="text-text-color-2 text-lg mt-4">
              Easy as just on click to edit and be online in on time
            </p>
            <p className="text-text-color-1 text-lg mt-4 font-semibold">
              Overview
            </p>
            <p className="text-text-color-2 text-lg mt-2">
              Pulsar boasts a visually striking and modern design that is sure
              to leave a lasting impact on your visitors start today with Pulsar
              Template
            </p>
          </div>
        </div>
        <div className="col-span-2 w-full h-full flex items-center">
          <div>
            <p className="text-text-color-1 text-2xl font-semibold mt-4">
              Seamless Responsiveness Pulsar is fully responsive
            </p>
            <p className="text-text-color-2 text-lg mt-4">
              Non Code Template for Creatives like you
            </p>
            <p className="text-text-color-2 text-lg my-4">
              With it's clean layouts, sleek, typography, and engaging
              animations, this template ensures a memorable user experience
            </p>
            <Button title="Try This Plan" padding="py-4 px-10" width="w-fit" />
          </div>
        </div>
        <div className="relative w-full h-[500px] col-span-3 rounded-2xl overflow-hidden">
          <div className="absolute bottom-0 right-0 z-20">
            <Image
              src="/images/who_we_are.png"
              alt="who we are"
              width={400}
              height={452}
            />
          </div>
          <div className="absolute top-0 left-20 rounded-2xl bg-red w-full h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default RockRoll;
