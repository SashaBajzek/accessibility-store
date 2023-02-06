import "./IconButton.css";

export enum IconButtonVariant {
  Medium = "medium",
  Large = "large",
}

interface IconButtonProps {
  ariaLabel: string;
  className?: string;
  hasBoxShadow?: boolean;
  icon: any;
  onClick: () => void;
  variant?: IconButtonVariant;
}

const IconButton = ({
  ariaLabel,
  className,
  hasBoxShadow = false,
  icon,
  onClick,
  variant = IconButtonVariant.Medium,
}: IconButtonProps) => {
  return (
    <button
      aria-label={ariaLabel}
      className={`IconButton ${variant} ${className} ${
        hasBoxShadow ? "hasBoxShadow" : ""
      }`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default IconButton;
