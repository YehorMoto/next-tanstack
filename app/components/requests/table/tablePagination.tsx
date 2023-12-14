//@components
import { Button } from "@components";

//@utils
import { cn } from "@utils";

interface TableCellProps {
  paginationInfoText: string;
  isNextPageDisabled: boolean;
  isPrevPageDisabled: boolean;
  className?: string;
  onNextPageClick: () => void;
  onPrevPageClick: () => void;
}

/**
 * Returns table pagination component
 * @returns JSX.Element
 */
export const TablePagination: React.FC<TableCellProps> = ({
  paginationInfoText,
  isNextPageDisabled,
  isPrevPageDisabled,
  className,
  onNextPageClick,
  onPrevPageClick,
}) => (
  <div className={cn("flex items-center justify-between", className)}>
    <div className="flex items-center gap-1 p-2.5 text-xs font-medium leading-normal text-middle-grey">
      <span>{paginationInfoText}</span>
    </div>
    <div className="flex items-center gap-1">
      <Button onClick={onPrevPageClick} disabled={isPrevPageDisabled}>
        Previous
      </Button>
      <Button onClick={onNextPageClick} disabled={isNextPageDisabled}>
        Next
      </Button>
    </div>
  </div>
);

export default TablePagination;
