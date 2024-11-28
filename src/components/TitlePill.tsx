import React from "react";

type Props = {
  title: string;
  bg?: string;
  border?: string;
  textColor?: string;
};

const TitlePill = ({
  title,
  bg = "bg-red",
  border = "border-0",
  textColor = "text-primary",
}: Props) => {
  return (
    <div className={`px-3 py-1 ${bg} ${border} rounded-full inline-block`}>
      <p className={`uppercase text-xs font-semibold ${textColor}`}>{title}</p>
    </div>
  );
};

export default TitlePill;
