import React from "react";

type Props = {
  children: React.ReactNode;
  padding: string;
  pillColor: string;
};

const IconPill = ({ children, padding, pillColor }: Props) => {
  return (
    <div className={`${padding} ${pillColor} rounded-full inline-block`}>
      {children}
    </div>
  );
};

export default IconPill;
