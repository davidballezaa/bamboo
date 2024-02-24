"use client"
import Image from "next/image";
import { Dashboard } from "@/components/dashboard";
import { Login } from "@/components/login";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Home() {
  const { data: session, status } = useSession();

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    // <Dashboard />
    // <Login />
    <div onClick={() => signIn("github")}>Sign in</div>
    // </main>
  );
}
