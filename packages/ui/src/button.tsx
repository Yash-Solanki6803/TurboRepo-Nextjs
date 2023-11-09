"use client";

import classNames from "classnames";
import { ReactNode } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export interface ButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, "size"> {
  children?: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  type?: "primary" | "default" | "dashed" | "text" | "link";
  size?: "lg" | "md" | "sm";
  loading?: boolean;
  icon?: ReactNode;
  disabled?: boolean;
  action?: "submit" | "reset" | "button";
}

export function Button({
  children,
  type = "default",
  size = "md",
  loading = false,
  icon,
  disabled = false,
  action = "button",
  onClick,
  ...restProps
}: ButtonProps) {
  return (
    <button
      className={classNames(
        "flex justify-center items-center gap-1 rounded-md",
        {
          "text-white bg-brand-500 hover:bg-brand-600": type === "primary",
          "border border-brand-600 hover:border-brand-700 border-dashed text-brand-600 hover:text-brand-700":
            type === "dashed",
          " border border-brand-600 hover:border-brand-700 text-brand-600 hover:text-brand-700":
            type === "default",
          "text-brand-600 hover:text-brand-700": type === "link",
          "text-gray-700 hover:text-gray-800": type === "text",
          "h-6 px-3 py-1 text-sm": size === "sm",
          "h-8 px-4 py-2 text-md": size === "md",
          "h-12 px-6 py-3 text-lg": size === "lg",
          "text-gray-700 bg-gray-300 hover:bg-gray-400 border-gray-700   cursor-not-allowed":
            disabled || loading,
        }
      )}
      type={action}
      {...restProps}
      disabled={disabled || loading}
      onClick={onClick}
    >
      <span className={classNames("inline-flex", { "animate-spin": loading })}>
        {loading ? <AiOutlineLoading3Quarters /> : icon}
      </span>
      <span>{children}</span>
    </button>
  );
}
