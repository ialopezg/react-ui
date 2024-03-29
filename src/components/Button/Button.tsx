import { createRef, FC } from "react";

import { ButtonProps } from './Button.props';

import './Button.styles.css';

export const Button: FC<ButtonProps> = (props, context) => {
  const {
    children,
    type,
    disabled,
    onClick,
    variant,
    ...rest
  } = props;
  const buttonRef = createRef<HTMLButtonElement>();

  return (
    <button
      ref={buttonRef}
      type={type || 'button'}
      className={`btn ${variant ? `btn-${variant}` : ''}`}
      style={{ opacity: disabled ? 0.5 : undefined }}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};
