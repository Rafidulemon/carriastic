"use client";
import * as React from "react";
import { type ReactNode, useEffect, useState } from "react";
import Link from "next/link";

type Props = {
  children?: ReactNode;
  className?: string;
  theme?:
    | "primary"
    | "secondary"
    | "cancel"
    | "cancel-secondary"
    | "white"
    | "gradient";
  onClick?: React.MouseEventHandler<HTMLElement>;
  isWidthFull?: boolean;
  type?: "button" | "submit" | "reset";
  href?: string;
};

function Button(props: Props) {
  const {
    children,
    className,
    theme = "primary",
    onClick,
    isWidthFull = false,
    type = "button",
    href,
  } = props;

  const baseClassName = className ?? "";
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const lastClickTimestamp = React.useRef<number>(0);

  const debouncedOnClick = React.useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const now = Date.now();
      if (now - lastClickTimestamp.current > 200) {
        if (onClick) {
          onClick(e);
        }
      }
      lastClickTimestamp.current = now;
    },
    [onClick]
  );

  useEffect(() => {
    if (isClicked) {
      const timeout = setTimeout(() => {
        setIsClicked(false);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [isClicked]);

  const content = (
    <>
      {theme === "primary" && (
        <div
          className={`${baseClassName} p-2 rounded-lg hover:border hover:border-primary hover:bg-white hover:text-primary bg-primary text-white`}
        >
          <span className="flex flex-col justify-center">{children}</span>
        </div>
      )}

      {theme === "secondary" && (
        <div
          className={`${baseClassName} p-2 rounded-lg border border-primary bg-white text-primary hover:bg-primary hover:text-white`}
        >
          <span className="flex flex-col justify-center">{children}</span>
        </div>
      )}

      {theme === "cancel" && (
        <div
          className={`${baseClassName} p-2 rounded-lg hover:border hover:border-[#D20D0D] hover:bg-white hover:text-[#D20D0D] bg-[#D20D0D] text-white`}
        >
          <span className="flex flex-col justify-center">{children}</span>
        </div>
      )}

      {theme === "cancel-secondary" && (
        <div
          className={`${baseClassName} p-2 rounded-lg border border-[#D20D0D] bg-white text-[#D20D0D] hover:bg-[#D20D0D] hover:text-white`}
        >
          <span className="flex flex-col justify-center">{children}</span>
        </div>
      )}

      {theme === "white" && (
        <div
          className={`${baseClassName} p-2 rounded-lg bg-white text-black hover:scale-105`}
        >
          <span className="flex flex-col justify-center">{children}</span>
        </div>
      )}

      {theme === "gradient" && (
        <div
          className={`${baseClassName} inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primaryLight to-primary px-6 py-3 text-[14px] font-semibold text-white shadow-[0_6px_12px_rgba(55,0,84,0.24)] transition hover:-translate-y-0.5 hover:shadow-[0_8px_16px_rgba(55,0,84,0.3)] md:px-7 md:text-[16px]`}
        >
          <span className="flex flex-col justify-center">{children}</span>
        </div>
      )}
    </>
  );

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setIsClicked(true);
    debouncedOnClick(e);
  };

  if (href) {
    return (
      <Link
        href={href}
        onClick={handleClick}
        className={`${baseClassName} ${isWidthFull ? "w-full" : "w-fit"}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`cursor-pointer ${baseClassName} ${isWidthFull ? "w-full" : "w-fit"}`}
      onFocus={() => {}}
    >
      {content}
    </button>
  );
}

export default Button;
