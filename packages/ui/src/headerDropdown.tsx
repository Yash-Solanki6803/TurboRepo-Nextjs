//Custom dropdown component using flowbite-react .
// Path: packages/ui/src/headerDropdown.tsx
"use client";
import { Dropdown, DropdownProps } from "flowbite-react";
import classNames from "classnames";
//importing global css
import "ui/globals.css";

//HeaderDropdownProps inheriting from Dropdown component of flowbite
export interface HeaderDropdownProps extends DropdownProps {
  label: string;
  mode?: "default" | "primary" | "plain";
  children: React.ReactNode;
}

export interface HeaderDropdownItemProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface HeaderDropdownHeaderProps {
  children: React.ReactNode;
}

export interface HeaderDropdownComponent extends React.FC<HeaderDropdownProps> {
  Item: React.FC<HeaderDropdownItemProps>;
  Divider: typeof Dropdown.Divider;
  Header: React.FC<HeaderDropdownHeaderProps>;
  // You can add more sub-components as needed
}

export const HeaderDropdown: HeaderDropdownComponent = ({
  label,
  mode = "primary",
  children,
  ...restProps
}) => {
  return (
    <div
      className={classNames("custom__dropdown", {
        "custom__dropdown-primary": mode === "primary",
        "custom__dropdown-default": mode === "default",
        "custom__dropdown-plain": mode === "plain",
      })}
    >
      <Dropdown
        className={classNames("transition-opacity ease-in-out  duration-300")}
        {...restProps}
        label={label}
      >
        {children}
      </Dropdown>
    </div>
  );
};

HeaderDropdown.Item = ({
  children,
  icon,
  disabled = false,
  onClick,
}: HeaderDropdownItemProps) => {
  return (
    <Dropdown.Item
      onClick={onClick}
      className={classNames("flex items-center justify-between", {
        "text-gray-700 bg-gray-300 hover:bg-gray-400 border-gray-700 cursor-not-allowed":
          disabled,
      })}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </Dropdown.Item>
  );
};
HeaderDropdown.Divider = () => {
  return <Dropdown.Divider className={classNames("bg-gray-300")} />;
};
HeaderDropdown.Header = Dropdown.Header;
