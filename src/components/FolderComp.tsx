import React from "react";

type Props = {
  mainClass: string;
  class1: string;
  class2: string;
  class3: string;
  containerWidth?: string;
};

const FolderComp = ({
  mainClass,
  class1,
  class2,
  class3,
  containerWidth = "w-full",
}: Props) => {
  return (
    <div className={`absolute bottom-0 left-0 ${containerWidth}`}>
      <div className={mainClass}>
        <div className={class1} />
        <div className={class2} />
        <div className={class3} />
      </div>
    </div>
  );
};

export default FolderComp;
