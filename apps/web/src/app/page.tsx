"use client";
// import Image from "next/image";
import { Button, MyPage } from "ui";
import { useState } from "react";

export default function Home() {
  const [count, setcount] = useState(0);

  async function countIncrement() {
    setcount(count + 1);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button type="primary" onClick={countIncrement}>
        Btn
      </Button>

      {count}

      <Button loading>Btn</Button>
      <Button disabled>Btn</Button>

      <MyPage></MyPage>
    </main>
  );
}
