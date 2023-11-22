//Page to view all atoms
"use client";
import { Button, MyPage } from "ui";
import Link from "next/link";

export default function Atoms() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="atoms/customButton">Button</Link>
    </main>
  );
}
