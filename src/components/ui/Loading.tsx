interface LoadingProps {
  className?: string;
}

export const Loading = ({ className = "size-6 opacity-80" }: LoadingProps) => {
  return (
    <svg viewBox="0 0 300 150" className={className}>
      <path fill="none" stroke="#8B9E89" stroke-width="15" stroke-linecap="round" stroke-dasharray="300 385" stroke-dashoffset="0" 
        d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z">
        <animate attributeName="stroke-dashoffset" calcMode="spline" dur="2" values="685;-685" keySplines="0 0 1 1" repeatCount="indefinite">
        </animate>
      </path>
    </svg>
  )
}