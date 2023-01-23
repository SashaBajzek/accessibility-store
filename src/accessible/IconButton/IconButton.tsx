import "./IconButton.css";

interface IconButtonProps {
  ariaLabel: string;
  icon: any;
  onClick: () => void;
}

const IconButton = ({ ariaLabel, icon, onClick }: IconButtonProps) => {
  return (
    <button aria-label={ariaLabel} className="IconButton" onClick={onClick}>
      {icon}
    </button>
  );
};

export default IconButton;
