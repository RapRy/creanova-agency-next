import React from "react";

type Props = {
  title: string;
  fontSize?: string;
  fontWeight?: string;
  bg?: string;
  textColor?: string;
  border?: string;
  width?: string;
  borderRadius?: string;
  padding?: string;
};

const Button = ({
  title,
  fontSize = "text-sm",
  fontWeight = "font-semibold",
  bg = "bg-red",
  textColor = "text-white",
  border = "border-0",
  width = "w-full",
  borderRadius = "rounded-full",
  padding = "px-5 py-3",
}: Props) => {
  return (
    <a
      href="#"
      className={`inline-block text-center ${padding} ${fontSize} ${fontWeight} ${bg} ${textColor} ${border} ${width} ${borderRadius}`}
    >
      {title}
    </a>
  );
};

export default Button;
