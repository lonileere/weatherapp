import React from "react";

interface Props {
  children?: React.ReactNode;
  onClick: () => void;
  primary: true;
  tailwind: string;
}

export const Button: React.FC<Props> = ({
  children,
  onClick,
  primary,
  tailwind,
}) => {
  return (
    <button
      onClick={onClick}
      className={` py-2 px-4 rounded-lg transition-colors duration-100 ${
        primary
          ? `bg-gray-800 text-white hover:bg-gray-900`
          : `bg-gray-300 hover:bg-gray-400 text-black`
      } ${tailwind}`}
    >
      {children}
    </button>
  );
};
