import { ReactNode, useContext, useEffect, useRef } from "react";

import "./Page.css";
import { SetTitleContext } from "../../../context/SetTitleContext";

interface PageProps {
  children: ReactNode;
  className?: string;
  heading: string;
  title: string;
}

const Page = ({ children, className, heading, title }: PageProps) => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const { setTitle } = useContext(SetTitleContext);
  useEffect(() => {
    setTitle(title);
  }, [setTitle, title]);

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <main className={`Page ${className || ""}`}>
      <h1 ref={headingRef} tabIndex={-1}>
        {heading}
      </h1>
      {children}
    </main>
  );
};

export default Page;
