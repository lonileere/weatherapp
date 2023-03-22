import React from "react";

interface Props {
  children?: React.ReactNode;
  onClick: () => void;
  secondary?: true;
  tailwind?: string;
  isDisabled?: boolean;
}

export const Button: React.FC<Props> = ({
  children,
  onClick,
  secondary,
  tailwind,
  isDisabled,
}) => {
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      className={`py-2 px-4 rounded-lg transition-colors duration-100 ${
        secondary
          ? `bg-gray-300 hover:bg-gray-400 text-black`
          : `bg-gray-800 text-white hover:bg-gray-900`
      } ${tailwind} ${isDisabled && `!bg-gray-300`}`}
    >
      {children}
    </button>
  );
};
