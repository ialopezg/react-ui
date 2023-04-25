import { MouseEventHandler, PropsWithChildren } from "react";

export interface ButtonProps extends PropsWithChildren {
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  text?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: "primary" | "secondary" | "danger";
}
