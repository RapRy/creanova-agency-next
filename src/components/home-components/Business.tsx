import React from "react";
import Image from "next/image";
import { PhoneIcon } from "@heroicons/react/16/solid";

import TitlePill from "../TitlePill";
import TextWithGradient from "../TextWithGradient";
import FolderComp from "../FolderComp";
import IconPill from "../IconPill";

type Props = {};

const Business = (props: Props) => {
  return (
    <div className="pt-16">
      <div className="grid grid-cols-3 gap-x-20">
        <div className="pt-8">
          <TextWithGradient text="89x" />
          <p className="font-medium text-lg my-4">
            Let’s build your next big idea CreaNova a powerful Webflow Non Code
          </p>
          <div className="flex flex-row gap-2 items-center">
            <IconPill padding="px-3 py-1" pillColor="bg-red">
              <PhoneIcon className="h-5 w-5 text-black" />
            </IconPill>
            <p className="font-medium text-base">Call Us Today 800-236-789</p>
          </div>
        </div>
        <div className="col-span-2 pl-20">
          <TitlePill title="Business" />
          <h1 className="font-semibold text-6xl leading-normal">
            Grow Your Business With Our Help
          </h1>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-5 gap-x-4">
        <div className="relative rounded-2xl overflow-hidden h-[370px] w-full col-span-2">
          <div className="absolute bottom-12 right-6 z-50">
            <p className="font-semibold text-white text-xl mb-2 drop-shadow-lg">
              Who We Are
            </p>
            <p className="font-medium text-white text-base mb-2 drop-shadow-lg">
              Learn how to become <br />a sales machine
            </p>
            <a
              href="javascript:void(0)"
              className="underline text-white font-semibold text-sm drop-shadow-lg"
            >
              Learn more
            </a>
          </div>
          <div className="absolute bottom-0 right-0 z-40 w-full h-full">
            <Image
              src="/images/who_we_are.png"
              alt="who we are"
              fill
              objectFit="contain"
              objectPosition="right bottom"
            />
          </div>
          <FolderComp
            mainClass="h-[280px] w-full bg-secondary rounded-2xl relative"
            class1="bg-secondary absolute top-0 right-[95px] w-[70px] h-[65px] rounded-se-2xl shadow-[7px_-20px_0px_0px_#f3f3f3]"
            class2="bg-primary w-[95px] h-[65px] absolute top-0 right-0 rounded-es-2xl"
            class3="bg-secondary absolute w-14 h-2/6 top-[65px] right-[0px] rounded-se-2xl shadow-[7px_-7px_0px_0px_#f3f3f3]"
          />
        </div>
        <div className="col-span-3 w-full h-[370px] relative rounded-2xl overflow-hidden">
          <div className="absolute bottom-12 left-20 z-50">
            <p className="font-semibold text-text-color-1 text-xl mb-2">
              Small Business
            </p>
            <p className="font-medium text-text-color-1text-base mb-2">
              See how can we help <br />
              your business
            </p>
            <a
              href="javascript:void(0)"
              className="underline text-text-color-1 font-semibold text-sm"
            >
              Learn more
            </a>
          </div>
          <div className="absolute bottom-0 right-16 z-40 w-full h-full">
            <Image
              src="/images/small-business-guy.png"
              alt="who we are"
              fill
              objectFit="contain"
              objectPosition="right bottom"
            />
          </div>
          <FolderComp
            mainClass="h-[280px] bg-bisque rounded-2xl relative ml-8"
            class1="bg-bisque absolute top-0 right-0 w-3/5 h-[65px] rounded-t-2xl shadow-[-7px_-20px_0px_0px_#f3f3f3] z-10"
            class2="bg-primary w-2/5 h-[65px] absolute top-0 left-0 rounded-b-2xl"
            class3="bg-bisque absolute w-14 h-2/6 top-[65px] left-0 rounded-ss-2xl shadow-[-14px_-14px_0px_0px_#f3f3f3]"
          />
        </div>
      </div>
    </div>
  );
};

export default Business;
