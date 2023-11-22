//Page to navigate to view all atoms
"use client";

//Import Link from Next.js and Navigating to /atoms
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/atoms">Atoms</Link>
    </main>
  );
}
