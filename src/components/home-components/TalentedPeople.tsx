import React from "react";
import Image from "next/image";
import TitlePill from "../TitlePill";
import FolderComp from "../FolderComp";

type Props = {};

const TalentedPeople = (props: Props) => {
  return (
    <div className="mt-32">
      <div>
        <TitlePill title="Team" />
        <h2 className="text-secondary text-4xl w-full font-semibold my-2 leading-normal">
          Our Talented People
        </h2>
        <p className="text-text-color-2 text-lg">
          We bring ideas to life by combining years of experiences of our
          talented team
        </p>
      </div>

      <div className="grid grid-cols-3 gap-x-8 gap-y-14 mt-14">
        <div>
          <div className="relative w-full h-[400px] overflow-hidden">
            <div className="relative z-20 w-fit h-full mx-auto px-6 top-[75px] left-0">
              <Image
                src="/images/guy-with-laptop.png"
                alt="who we are"
                width={325}
                height={359}
              />
            </div>
            <FolderComp
              mainClass="h-[400px] w-full bg-secondary rounded-2xl relative"
              class1="bg-secondary absolute top-0 right-[150px] w-[100px] h-[40px] rounded-se-2xl shadow-[7px_-20px_0px_0px_#f3f3f3]"
              class2="bg-primary w-[150px] h-[40px] absolute top-0 right-0 rounded-es-2xl"
              class3="bg-secondary absolute w-14 h-2/6 top-[40px] right-[0px] rounded-se-2xl shadow-[7px_-7px_0px_0px_#f3f3f3]"
            />
          </div>
          <div className="pt-8">
            <p className="text-secondary text-xl w-full font-semibold leading-normal">
              Alfredo Otis
            </p>
            <p className="text-text-color-2 text-base">CEO</p>
          </div>
        </div>
        <div>
          <div className="relative w-full h-[400px] overflow-hidden">
            <div className="relative z-20 w-fit h-full mx-auto px-6 top-[75px] left-0">
              <Image
                src="/images/jordan-sambo.png"
                alt="who we are"
                width={325}
                height={359}
              />
            </div>
            <FolderComp
              mainClass="h-[400px] w-full bg-red rounded-2xl relative"
              class1="bg-red absolute top-0 right-[150px] w-[100px] h-[40px] rounded-se-2xl shadow-[7px_-20px_0px_0px_#f3f3f3]"
              class2="bg-primary w-[150px] h-[40px] absolute top-0 right-0 rounded-es-2xl"
              class3="bg-red absolute w-14 h-2/6 top-[40px] right-[0px] rounded-se-2xl shadow-[7px_-7px_0px_0px_#f3f3f3]"
            />
          </div>
          <div className="pt-8">
            <p className="text-secondary text-xl w-full font-semibold leading-normal">
              Jordan Sambo
            </p>
            <p className="text-text-color-2 text-base">CFO</p>
          </div>
        </div>
        <div>
          <div className="relative w-full h-[400px] overflow-hidden">
            <div className="relative z-20 w-fit h-full mx-auto px-6 top-[75px] left-0">
              <Image
                src="/images/tom-yhorke.png"
                alt="who we are"
                width={325}
                height={359}
              />
            </div>
            <FolderComp
              mainClass="h-[400px] w-full bg-secondary rounded-2xl relative"
              class1="bg-secondary absolute top-0 right-[150px] w-[100px] h-[40px] rounded-se-2xl shadow-[7px_-20px_0px_0px_#f3f3f3]"
              class2="bg-primary w-[150px] h-[40px] absolute top-0 right-0 rounded-es-2xl"
              class3="bg-secondary absolute w-14 h-2/6 top-[40px] right-[0px] rounded-se-2xl shadow-[7px_-7px_0px_0px_#f3f3f3]"
            />
          </div>
          <div className="pt-8">
            <p className="text-secondary text-xl w-full font-semibold leading-normal">
              Tom Yhorke
            </p>
            <p className="text-text-color-2 text-base">CTO</p>
          </div>
        </div>
        <div>
          <div className="relative w-full h-[400px] overflow-hidden">
            <div className="relative z-20 w-fit h-full mx-auto px-6 top-[75px] left-0">
              <Image
                src="/images/cathy-hills.png"
                alt="who we are"
                width={325}
                height={359}
              />
            </div>
            <FolderComp
              mainClass="h-[400px] w-full bg-red rounded-2xl relative"
              class1="bg-red absolute top-0 right-[150px] w-[100px] h-[40px] rounded-se-2xl shadow-[7px_-20px_0px_0px_#f3f3f3]"
              class2="bg-primary w-[150px] h-[40px] absolute top-0 right-0 rounded-es-2xl"
              class3="bg-red absolute w-14 h-2/6 top-[40px] right-[0px] rounded-se-2xl shadow-[7px_-7px_0px_0px_#f3f3f3]"
            />
          </div>
          <div className="pt-8">
            <p className="text-secondary text-xl w-full font-semibold leading-normal">
              Catty Hills
            </p>
            <p className="text-text-color-2 text-base">DESIGNER</p>
          </div>
        </div>
        <div>
          <div className="relative w-full h-[400px] overflow-hidden">
            <div className="relative z-20 w-fit h-full mx-auto px-6 top-[75px] left-0">
              <Image
                src="/images/brandon-murphy.png"
                alt="who we are"
                width={325}
                height={359}
              />
            </div>
            <FolderComp
              mainClass="h-[400px] w-full bg-secondary rounded-2xl relative"
              class1="bg-secondary absolute top-0 right-[150px] w-[100px] h-[40px] rounded-se-2xl shadow-[7px_-20px_0px_0px_#f3f3f3]"
              class2="bg-primary w-[150px] h-[40px] absolute top-0 right-0 rounded-es-2xl"
              class3="bg-secondary absolute w-14 h-2/6 top-[40px] right-[0px] rounded-se-2xl shadow-[7px_-7px_0px_0px_#f3f3f3]"
            />
          </div>
          <div className="pt-8">
            <p className="text-secondary text-xl w-full font-semibold leading-normal">
              Brandon Murphy
            </p>
            <p className="text-text-color-2 text-base">CODER</p>
          </div>
        </div>
        <div>
          <div className="relative w-full h-[400px] overflow-hidden">
            <div className="relative z-20 w-fit h-full mx-auto px-6 top-[75px] left-0">
              <Image
                src="/images/maria-zurich.png"
                alt="who we are"
                width={325}
                height={359}
              />
            </div>
            <FolderComp
              mainClass="h-[400px] w-full bg-red rounded-2xl relative"
              class1="bg-red absolute top-0 right-[150px] w-[100px] h-[40px] rounded-se-2xl shadow-[7px_-20px_0px_0px_#f3f3f3]"
              class2="bg-primary w-[150px] h-[40px] absolute top-0 right-0 rounded-es-2xl"
              class3="bg-red absolute w-14 h-2/6 top-[40px] right-[0px] rounded-se-2xl shadow-[7px_-7px_0px_0px_#f3f3f3]"
            />
          </div>
          <div className="pt-8">
            <p className="text-secondary text-xl w-full font-semibold leading-normal">
              Maria Zurich
            </p>
            <p className="text-text-color-2 text-base">SUPPORT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentedPeople;
