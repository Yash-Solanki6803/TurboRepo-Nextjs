//Page to view all atoms
"use client";
import Link from "next/link";

export default function Atoms() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="atoms/Button">Button</Link>
      <Link href="atoms/Dropdown">Dropdown</Link>
    </main>
  );
}
