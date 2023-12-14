//@components
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { ClockIcon } from "@heroicons/react/24/outline";

//@types
import { REQUEST_STATUS } from "@types";

//@utils
import { cn } from "@utils";

interface StatusPillProps {
  status: REQUEST_STATUS;
}

const STATUS_PILL_INFO = {
  [REQUEST_STATUS.PENDING]: {
    className:
      "border-status-pending-light bg-status-pending-light text-status-pending-dark ",
    icon: ClockIcon,
  },
  [REQUEST_STATUS.DRAFT]: {
    className:
      "border-status-draft-light bg-status-draft-light text-status-draft-dark",
    icon: ClockIcon,
  },
  [REQUEST_STATUS.COMPLETE]: {
    className:
      "border-status-complete-light bg-status-complete-light text-status-complete-dark",
    icon: CheckCircleIcon,
  },
};

/**
 * Returns the status pill
 * @returns JSX.Element
 */
const StatusPill: React.FC<StatusPillProps> = ({ status }) => {
  const Icon = STATUS_PILL_INFO[status].icon;
  const className = STATUS_PILL_INFO[status].className;

  return (
    <div
      className={cn(
        "flex w-fit items-center gap-1 rounded border border-solid bg-opacity-30 p-1 text-xs font-normal leading-3",
        className,
      )}
    >
      {status}
      <Icon className="h-3 w-3" />
    </div>
  );
};

export default StatusPill;
