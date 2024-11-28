import React from "react";
import Image from "next/image";

import TitlePill from "../TitlePill";
import FolderComp from "../FolderComp";
import TextWithGradient from "../TextWithGradient";
import Button from "../Button";

type Props = {};

const WelcomePulsar = (props: Props) => {
  return (
    <div className="mt-32">
      <div className="grid grid-cols-5 gap-4">
        <div className="relative w-full h-[420px] col-span-3">
          <div className="absolute top-0 left-0 z-50">
            <TitlePill title="OVERVIEW" />
            <h2 className="text-secondary text-4xl w-full font-semibold my-2 leading-normal">
              Welcome to Pulsar
            </h2>
            <p className="text-text-color-2 text-lg">
              An overview of Pulsar benefits
            </p>
          </div>

          <div className="absolute bottom-16 left-20 z-50 w-[250px]">
            <TextWithGradient
              text="97%"
              gradient="bg-gradient-to-t from-secondary to-transparent"
              textColor="text-white"
              fontSize="text-5xl"
              fontWeight="font-semibold"
            />
            <p className="text-white text-xl font-semibold mt-4">
              Focus on what is more important tp you and be more productive
            </p>
          </div>

          <div className="absolute bottom-0 right-10 z-40 w-[35%] h-full">
            <Image
              src="/images/welcome-pulsar-girl.png"
              alt="who we are"
              fill
              objectFit="contain"
              objectPosition="right bottom"
            />
          </div>

          <FolderComp
            mainClass="h-[420px] w-full bg-secondary rounded-2xl relative"
            class1="bg-secondary absolute top-0 right-0 w-[43%] h-[140px] rounded-t-2xl shadow-[-7px_-20px_0px_0px_#f3f3f3] z-10"
            class2="bg-primary w-[57%] h-[140px] absolute top-0 left-0 rounded-b-2xl"
            class3="bg-secondary absolute w-14 h-2/6 top-[140px] left-[0px] rounded-ss-2xl shadow-[-14px_-14px_0px_0px_#f3f3f3]"
          />
        </div>
        <div className="relative bg-red w-full h-[420px] col-span-2 rounded-2xl p-6">
          <div className="relative w-full h-[114px] mt-10">
            <Image
              src="/images/benefit-imac.png"
              alt="who we are"
              fill
              objectFit="contain"
              objectPosition="top"
            />
          </div>
          <div className="mt-6 w-full">
            <p className="uppercase text-xs font-semibold text-primary mt-4">
              Benefits
            </p>
            <p className="text-white text-xl font-semibold mt-2 mb-8 w-4/5">
              With Pulsar you save time, money and stress
            </p>

            <Button
              title="Read More"
              border="border-2 border-white border-solid"
              width="w-2/5"
            />
          </div>
        </div>

        <div className="relative bg-red w-full h-[220px] col-span-2 rounded-2xl p-6">
          <div className="relative w-[200px] h-[63px]">
            <Image
              src="/images/feature-icons.png"
              alt="who we are"
              fill
              objectFit="contain"
              objectPosition="top"
            />
          </div>
          <div className="mt-6 w-full">
            <p className="uppercase text-xs font-semibold text-primary mt-4">
              Feature
            </p>
            <p className="text-white text-xl font-semibold mt-2 mb-8">
              Maximize over the return of your investments with Pulsar Template
            </p>
          </div>
        </div>

        <div className="relative bg-secondary w-full h-[220px] col-span-3 rounded-2xl pt-6 px-6 flex flex-row">
          <div className="w-full pr-18">
            <p className="uppercase text-xs font-semibold text-primary mt-4">
              Mobile
            </p>
            <p className="text-white text-2xl font-semibold mt-2">
              Fast and supreme support 24/7 all year around for your company
            </p>
          </div>
          <div className="relative w-[350px] h-full mr-5">
            <Image
              src="/images/mobile-iphone.png"
              alt="who we are"
              fill
              objectFit="contain"
              objectPosition="bottom"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePulsar;
