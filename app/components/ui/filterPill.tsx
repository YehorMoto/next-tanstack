import {
  ChevronDownIcon,
  PlusCircleIcon,
  XCircleIcon,
} from "@heroicons/react/20/solid";

//@utils
import { cn } from "@utils";

interface FilterPillProps {
  value: string;
  field: string;
  handleAddClick: () => void;
  handleDeleteClick: () => void;
}

/**
 * Returns the filter pill
 * @returns JSX.Element
 */
const FilterPill: React.FC<FilterPillProps> = ({
  handleAddClick,
  handleDeleteClick,
  value,
  field,
}) => (
  <div
    className={cn(
      "border-gray-soft text-gray-main flex w-fit items-center gap-1 rounded-[100px] border p-[5px] text-xs font-medium leading-3",
      value && "border-dashed",
    )}
  >
    <div
      className="flex cursor-pointer items-center gap-1 text-middle-grey"
      onClick={() => (value ? handleDeleteClick() : handleAddClick())}
    >
      {value ? (
        <XCircleIcon className="pill-icon" />
      ) : (
        <PlusCircleIcon className="pill-icon" />
      )}
      {field}
    </div>
    {value ? (
      <>
        <hr className="h-3.5 w-[1px] bg-cold-grey" />
        <button
          className="flex cursor-pointer items-center gap-1"
          onClick={handleAddClick}
        >
          <span className="text-sky-blue">{value}</span>
          <ChevronDownIcon className="text-gray-main h-3 w-3" />
        </button>
      </>
    ) : null}
  </div>
);

export default FilterPill;
