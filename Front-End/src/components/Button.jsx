import clsx from "clsx";

const Button = ({className, label, type, onClick = () => {}}) => {
  return (
    <button
      type={type || "button"}
      className={clsx(
        "p-2 rounded-md",
        className
      )}
      onClick={onClick}
    >
        <span>{label}</span>
    </button>
  );
}

export default Button;
