import { forwardRef } from "react";
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

const IconButton = forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<IconButtonProps>
>((props, ref) => {
  const {
    ariaLabel,
    className,
    hasBoxShadow = false,
    icon,
    onClick,
    variant = IconButtonVariant.Medium,
  } = props;

  return (
    <button
      aria-label={ariaLabel}
      className={`IconButton ${variant} ${className} ${
        hasBoxShadow ? "hasBoxShadow" : ""
      }`}
      onClick={onClick}
      ref={ref}
    >
      {icon}
    </button>
  );
});

export default IconButton;
