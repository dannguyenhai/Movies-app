import PropTypes from 'prop-types'; 
const Button = ({
  onClick,
  className,
  full = false,
  type = "button",
  bgColor = "primary",
  children,
}) => {
  Button.propTypes = {
    onClick: PropTypes.string.isRequired,
    full: PropTypes.bool.isRequired,
    className: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
  };
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
