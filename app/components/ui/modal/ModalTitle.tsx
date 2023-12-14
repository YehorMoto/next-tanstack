import React, { Dispatch, ReactNode, SetStateAction } from "react";

interface ModalTitleProps {
  setOpen?: Dispatch<SetStateAction<boolean>>;
  children?: ReactNode;
}

/**
 * Returns modal title
 * @returns JSX.Element
 */
const ModalTitle: React.FC<ModalTitleProps> = ({ setOpen, children }) => (
  <div className="flex items-start justify-between">
    {children}
    {!!setOpen && (
      <button
        className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black opacity-5 outline-none focus:outline-none"
        onClick={() => setOpen(false)}
      >
        <span className="block h-6 w-6 bg-transparent text-2xl text-black opacity-5 outline-none focus:outline-none">
          x
        </span>
      </button>
    )}
  </div>
);

export default ModalTitle;
