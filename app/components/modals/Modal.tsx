import React, { type ReactNode } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import Button from "../button/Button";

type Props = {
  titleTextSize?: string;
  buttonHeight?: string;
  buttonWidth?: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onDoneClick?: () => void;
  className?: string;
  title: string;
  children?: ReactNode;
  closeOnClick?: () => void;
  isDoneButton?: boolean;
  doneButtonText: string;
  isCancelButton?: boolean;
  cancelButtonText?: string;
  minWidthModal?: string;
  crossOnClick?: () => void;
};

export const Modal = (props: Props) => {
  const {
    open,
    className,
    buttonHeight,
    buttonWidth,
    children,
    title,
    isDoneButton = true,
    doneButtonText,
    onDoneClick,
    closeOnClick,
    isCancelButton = false,
    cancelButtonText,
    titleTextSize,
    crossOnClick,
  } = props;

  if (!open) return null;

  return (
    <div className={`z-[100] modal modal-box ${open && "modal-open"}`}>
      <div className="fixed inset-0  flex items-center justify-center bg-black bg-opacity-50 text-[#1D212D]">
        <div
          className={`relative bg-white rounded-xl shadow gap-[14px] flex flex-col justify-between ${className}`}
        >
          <div className="flex flex-row w-full justify-between">
            <span
              className={`py-2 px-6 flex w-full flex-row justify-between font-bold ${
                titleTextSize ? titleTextSize : "text-[20px] pt-2 font-bold"
              }`}
            >
              {title}
            </span>

            <IoIosCloseCircle
              className="mx-6 my-3 text-2xl text-gray-500 cursor-pointer hover:text-primary"
              onClick={crossOnClick || closeOnClick}
            />
          </div>
          <line className="w-full border-b border-black -mt-4" />

          <div className="px-6 py-2">{children}</div>

          <div className="w-full flex flex-row gap-4 px-6 py-4">
            {isDoneButton && (
              <div style={{ width: buttonWidth, height: buttonHeight }}>
                <Button className="w-full" onClick={onDoneClick}>
                  {doneButtonText}
                </Button>
              </div>
            )}
            {isCancelButton && (
              <div style={{ width: buttonWidth, height: buttonHeight }}>
                <Button
                  theme="secondary"
                  className="w-full"
                  onClick={closeOnClick}
                >
                  {cancelButtonText}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};