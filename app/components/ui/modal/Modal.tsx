//@utils
import { cn } from "@utils";

interface ModalProps {
  open: boolean;
  close?: VoidFunction;
  children?: React.ReactNode;
  disableBackdrop?: boolean;
  wrapperClassName?: string;
}

/**
 * Returns modal
 * @returns JSX.Element
 */
const Modal: React.FC<ModalProps> = ({
  open,
  children,
  disableBackdrop = false,
  wrapperClassName,
  close,
}) =>
  !open ? null : (
    <>
      <div
        className={cn(
          "z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden",
          wrapperClassName,
        )}
      >
        <div className="relative mx-auto w-auto max-w-3xl">
          <div className="relative flex w-full flex-col rounded-xl border border-solid border-cold-grey bg-white p-4 shadow-lg outline-none focus:outline-none">
            {children}
          </div>
        </div>
      </div>
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black opacity-0",
          !disableBackdrop && "opacity-25",
        )}
        onClick={close}
      />
    </>
  );

export default Modal;
