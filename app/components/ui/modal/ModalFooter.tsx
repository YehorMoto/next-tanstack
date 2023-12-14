import { ReactNode } from "react";

type ModalFooterProps = {
  children?: ReactNode;
};

/**
 * Returns modal footer
 * @returns JSX.Element
 */
const ModalFooter: React.FC<ModalFooterProps> = ({ children }) => (
  <div className="flex items-center">{children}</div>
);

export default ModalFooter;
