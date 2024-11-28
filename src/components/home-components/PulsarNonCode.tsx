import React from "react";
import FolderComp from "../FolderComp";
import TitlePill from "../TitlePill";
import IconPill from "../IconPill";
import {
  BriefcaseIcon,
  ShieldCheckIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

type Props = {};

const PulsarNonCode = (props: Props) => {
  return (
    <div className="mt-32 pt-16 px-16 pb-20 relative h-[670px]">
      <div className="relative z-20">
        <TitlePill title="Intro" />
        <h2 className="text-primary text-4xl w-3/5 font-semibold my-5 leading-normal">
          Let's build your next big idea with Pulsar a Non Code Template
        </h2>
        <p className="text-primary text-lg">
          As easy as just double click and type edit
        </p>
        <div className="mt-20 flex flex-row justify-evenly gap-x-20">
          <div className="w-full">
            <IconPill padding="px-4 py-4 mb-4" pillColor="bg-red">
              <BriefcaseIcon className="h-8 w-8 text-white" />
            </IconPill>
            <h3 className="text-lg font-semibold text-white">About Us</h3>
            <p className="text-text-color-2 text-base font-medium mb-4">
              Pulsar template boasts a visually striking and modern design
            </p>
            <a
              href="javascript:void(0)"
              className="underline text-white font-semibold text-sm drop-shadow-lg"
            >
              Learn more
            </a>
          </div>
          <div className="w-full">
            <IconPill padding="px-4 py-4 mb-4" pillColor="bg-red">
              <EnvelopeIcon className="h-8 w-8 text-white" />
            </IconPill>
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <p className="text-text-color-2 text-base font-medium mb-4">
              Pulsar offers a wide array of thoughtfully designed sections
            </p>
            <a
              href="javascript:void(0)"
              className="underline text-white font-semibold text-sm drop-shadow-lg"
            >
              Learn more
            </a>
          </div>
          <div className="w-full">
            <IconPill padding="px-4 py-4 mb-4" pillColor="bg-red">
              <ShieldCheckIcon className="h-8 w-8 text-white" />
            </IconPill>
            <h3 className="text-lg font-semibold text-white">Our Services</h3>
            <p className="text-text-color-2 text-base font-medium mb-4">
              Fully responsive, adapting to different screen sizes
            </p>
            <a
              href="javascript:void(0)"
              className="underline text-white font-semibold text-sm drop-shadow-lg"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>

      <FolderComp
        mainClass="h-[670px] w-full bg-secondary rounded-2xl relative"
        class1="bg-secondary absolute top-0 right-[350px] w-[70px] h-[65px] rounded-se-2xl shadow-[7px_-20px_0px_0px_#f3f3f3]"
        class2="bg-primary w-[350px] h-[65px] absolute top-0 right-0 rounded-es-2xl"
        class3="bg-secondary absolute w-14 h-2/6 top-[65px] right-[0px] rounded-se-2xl shadow-[7px_-7px_0px_0px_#f3f3f3]"
      />
    </div>
  );
};

export default PulsarNonCode;
