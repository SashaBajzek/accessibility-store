import { ReactNode, useContext, useEffect } from "react";

import "./Page.css";
import { SetTitleContext } from "../../../context/SetTitleContext";

interface PageProps {
  children: ReactNode;
  className?: string;
  heading: string;
  title: string;
}

const Page = ({ children, className, heading, title }: PageProps) => {
  const { setTitle } = useContext(SetTitleContext);
  useEffect(() => {
    setTitle(title);
  }, [setTitle, title]);

  return (
    <main className={`Page ${className || ""}`}>
      <h1>{heading}</h1>
      {children}
    </main>
  );
};

export default Page;
