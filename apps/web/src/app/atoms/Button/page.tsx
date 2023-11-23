//Page to view all atoms
"use client";
import { Button } from "ui";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button type="primary">Btn</Button>

      <Button loading>Btn</Button>
      <Button disabled>Btn</Button>
    </main>
  );
}
