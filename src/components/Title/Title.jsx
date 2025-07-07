
function Title({ children, as = "h2", variant = "primary", className = "" }) {
  const Tag = as;
  return (
    <Tag className={`title title--${variant} ${className}`}>{children}</Tag>
  );
}


export default Title