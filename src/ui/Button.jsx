// Define the component with props interface
const Button = ({
  variant = "primary",
  size = "medium",
  disabled = false,
  onClick,
  children,
  className = "",
  type = "",
  ...rest
}) => {
  // Define variant styles
  const variantStyles = {
    primary:
      "dark:border-neutral-800 flex  font-normal text-base item-center bg-blue-500 hover:bg-blue-700  py-0.75 px-1 gap-0.5 justify-center",
    secondary:
      "flex dark:border-neutral-800 dark:hover:bg-neutral-700 dark:hover:text-white font-normal text-base item-center py-075 px-1 dark:bg-neutral-800 bg-neutral-200 hover:text-neutral-500 hover:bg-neutral-300 gap-0.5 rounded",
    outline: "text",
    neutral:
      "border-neutral-300 dark:hover:bg-neutral-700 dark:border-neutral-800 border font-normal flex items-center bg-neutral-0 gap-2 py-0.75 px-1 gap-0.5 hover:bg-blue-50 ",
    danger:
      "flex dark:border-neutral-800 font-normal item-center py-075 px-1 bg-red-500 hover:bg-red-700 gap-0.5 rounded-xl",
  };

  // Define size styles
  const sizeStyles = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  // Combine styles
  const baseStyles =
    "font-medium rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";

  const buttonClasses = `
    ${baseStyles}
    ${variantStyles[variant] || variantStyles.primary}
    ${sizeStyles[size] || sizeStyles.medium}
    ${disabledStyles}
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  // Handle click events
  const handleClick = (e) => {
    if (disabled) return;
    if (onClick) onClick(e);
  };

  // Render the component
  return (
    <button
      className={buttonClasses}
      onClick={handleClick}
      disabled={disabled}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
