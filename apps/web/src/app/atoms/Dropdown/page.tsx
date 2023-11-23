"use client";
import { HeaderDropdown } from "ui";
import { AiFillBell } from "react-icons/ai";
// import styles from "./headerDropdown.module.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
      <HeaderDropdown label="Dropdown" size="lg">
        <HeaderDropdown.Header>
          <span className="block text-sm">Bonnie Green</span>
          <span className="block truncate text-sm font-medium">
            bonnie@flowbite.com
          </span>
        </HeaderDropdown.Header>
        <HeaderDropdown.Item disabled>Item 1</HeaderDropdown.Item>
        <HeaderDropdown.Item onClick={() => alert("Item 2 Clicked")}>
          Item 2
        </HeaderDropdown.Item>
        <HeaderDropdown.Divider />
        <HeaderDropdown.Item icon={<AiFillBell />}>Item 3</HeaderDropdown.Item>
      </HeaderDropdown>
      <HeaderDropdown label="Dropdown" placement="top" mode="plain">
        <HeaderDropdown.Header>
          <span className="block text-sm">Bonnie Green</span>
          <span className="block truncate text-sm font-medium">
            bonnie@flowbite.com
          </span>
        </HeaderDropdown.Header>
        <HeaderDropdown.Item disabled>Item 1</HeaderDropdown.Item>
        <HeaderDropdown.Item onClick={() => alert("Item 2 Clicked")}>
          Item 2
        </HeaderDropdown.Item>
        <HeaderDropdown.Divider />
        <HeaderDropdown.Item icon={<AiFillBell />}>Item 3</HeaderDropdown.Item>
      </HeaderDropdown>
      <HeaderDropdown label="Dropdown" mode="default" size="sm">
        <HeaderDropdown.Header>
          <span className="block text-sm">Bonnie Green</span>
          <span className="block truncate text-sm font-medium">
            bonnie@flowbite.com
          </span>
        </HeaderDropdown.Header>
        <HeaderDropdown.Item disabled>Item 1</HeaderDropdown.Item>
        <HeaderDropdown.Item onClick={() => alert("Item 2 Clicked")}>
          Item 2
        </HeaderDropdown.Item>
        <HeaderDropdown.Divider />
        <HeaderDropdown.Item icon={<AiFillBell />}>Item 3</HeaderDropdown.Item>
      </HeaderDropdown>
    </main>
  );
}
