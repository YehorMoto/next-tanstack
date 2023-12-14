//@utils
import { cn } from "@utils";

interface LoadingPillProps {
  width: string | number;
  height: string | number;
  className?: string;
}

/**
 * Returns the loading pill component for loading state
 * @returns JSX.Element
 */
const LoadingPill: React.FC<LoadingPillProps> = ({
  width,
  height,
  className,
}) => (
  <div style={{ width, height }} className={cn("animate-pulse", className)}>
    <div className="h-full w-full rounded-full bg-gray-100 dark:bg-gray-200" />
  </div>
);

export default LoadingPill;
