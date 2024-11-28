import React from "react";

type Props = {
  text: string;
  gradient?: string;
  textColor?: string;
  fontSize?: string;
  fontWeight?: string;
};

const TextWithGradient = ({
  text,
  gradient = "bg-gradient-to-t from-primary to-transparent",
  textColor = "text-black",
  fontSize = "text-4xl",
  fontWeight = "font-bold",
}: Props) => {
  return (
    <div className="relative w-fit h-fit">
      <div
        className={`absolute w-full h-4/5 bottom-0 left-0 ${gradient}  opacity-80`}
      ></div>
      <p className={`${fontSize} ${fontWeight} ${textColor}`}>{text}</p>
    </div>
  );
};

export default TextWithGradient;
