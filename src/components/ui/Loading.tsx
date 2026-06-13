import LoadingIcon from "../../icons/loading.svg?react";
import { cn } from "../../util";

interface LoadingProps {
  className?: string;
}

export const Loading = ({ className }: LoadingProps) => {
  return <LoadingIcon className={cn("opacity-80 stroke-slate size-6", className)}/>
}