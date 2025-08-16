// Input.jsx
const Input = ({
  variant = "default",
  size = "medium",
  disabled = false,
  className = "",
  type = "text",
  placeholder = "",
  value,
  onChange,
  ...rest
}) => {
  // Define variant styles
  const variantStyles = {
    default:
      " border dark:border-neutral-800 focus:border border-neutral-300 text-neutral-900 dark:text-white placeholder-neutral-300 placeholder:text-[12px] focus:ring-neutral-600 focus:border-neutral-900",
    subtle:
      "dark:border-neutral-800 outline:border-neutral-500 placeholder-neutral-900 focus:ring-neutral-600 focus:border-2-neutral-900",
    outline: "",
    danger:
      " dark:border-neutral-800 border border-red-400 text-red-800 placeholder-red-300 focus:ring-red-500 focus:border-red-500",
  };

  // Define size styles
  const sizeStyles = {
    small: "px-2 py-1 text-sm rounded",
    medium: "px-3 py-2 text-base rounded-md",
    large: "px-4 py-3 text-lg rounded-lg",
  };

  const baseStyles = "block w-full transition-colors duration-200 outline-none";

  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed bg-gray-100"
    : "";

  const inputClasses = `
    ${baseStyles}
    ${variantStyles[variant] || variantStyles.default}
    ${sizeStyles[size] || sizeStyles.medium}
    ${disabledStyles}
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  return (
    <input
      type={type}
      className={inputClasses}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

export default Input;
