import React from "react";

interface Props {
  children: React.ReactNode;
}

export const Page = ({ children }: Props) => {
  return (
    <div className="flex flex-row justify-center bg-slate-50">
    <div
      className="min-h-screen pt-5 pb-5 flex-col justify-start w-[1280px]"
    >
      {children}
      </div>
    </div>
  );
};
