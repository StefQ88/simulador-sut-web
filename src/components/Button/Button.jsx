function Button({
  label,
  color = "primary",
  variant = "solid",
  onClick,
  className = "",
  ...props
}) {
  return (
    <button
      className={`btn btn--${color} btn--${variant} ${className}`}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
}

export default Button;
