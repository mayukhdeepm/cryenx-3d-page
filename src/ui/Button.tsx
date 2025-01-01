import ButtonSvg from "../assets/svg/ButtonSvg";
import { ButtonProps } from "../lib/types";

function Button({
  className,
  href,
  onClick,
  children,
  px,
  purple,
}: ButtonProps) {
  // Classes for the button element
  const classes = `button relative inline-flex items-center justify-center h-11  ${px || "px-7"} ${purple ? "text-[#ffffff]" : "text-[#ffffff]"} ${className || ""}`;

  // Classes for the span element within the button
  const spanClasses = "relative z-10";

  // Function that renders the button and all its content while also assigning the classes
  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(purple)}
    </button>
  );

  // Function that renders the link and all its content while also assigning the classes
  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(purple)}
    </a>
  );

  // Returned JSX
  return href ? renderLink() : renderButton();
}

export default Button;
