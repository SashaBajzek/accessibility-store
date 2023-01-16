import "./SubmitButton.css";

export enum ButtonVariant {
  Primary = "primary",
  Secondary = "secondary",
}

interface SubmitButtonProps {
  onSubmit: () => void;
  text: string;
  variant?: ButtonVariant;
}

const SubmitButton = ({
  onSubmit,
  text,
  variant = ButtonVariant.Primary,
}: SubmitButtonProps) => {
  return (
    <button
      className={`SubmitButton ${variant}`}
      onClick={onSubmit}
      type="submit"
    >
      {text}
    </button>
  );
};

export default SubmitButton;
