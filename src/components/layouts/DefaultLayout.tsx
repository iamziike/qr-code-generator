import React, { FC } from "react";
import Header from "./Header";
import { Toaster } from "react-hot-toast";

interface Props {
  children: React.ReactNode;
}

const DefaultLayout: FC<Props> = ({ children }) => {
  return (
    <div className="default-layout">
      <Header />
      <main className="default-layout__main-content">{children}</main>
      <Toaster />
    </div>
  );
};

export default DefaultLayout;
