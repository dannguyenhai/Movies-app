/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const Button = ({
  onClick,
  className,
  full = false,
  type = "button",
  bgColor = "primary",
  children,
}) => {
  let bgClassName = "primary";
  switch (bgColor) {
    case "primary":
      bgClassName = "bg-primary";
      break;
    case "secondary":
      bgClassName = "bg-secondary";
      break;
    default:
      break;
  }
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={` py-3 px-6 text-lg rounded-lg mt-auto ${full ? 'w-full' : ''} ${bgClassName} ${className}`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
