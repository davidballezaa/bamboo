"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { CardContent, Card } from "@/components/ui/card";
import { JSX, SVGProps } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export function Dashboard() {
  const { data: session, status } = useSession();
  const { email, name, image } = session?.user || {};

  const dataInfo = [
    {
      category: "Human Needed",
      icon: "MessageSquareIcon",
      color: "red",
      activeChats: 10,
    },
    {
      category: "Website",
      icon: "PhoneIcon",
      color: "blue",
      activeChats: 15,
    },
    {
      category: "WhatsApp",
      icon: "PhoneIcon",
      color: "green",
      activeChats: 25,
    },
    {
      category: "SMS",
      icon: "MessageSquareIcon",
      color: "blue",
      activeChats: 18,
    },
    {
      category: "Email",
      icon: "MailIcon",
      color: "yellow",
      activeChats: 32,
    },
  ];

  if (status == "unauthenticated") {
    return (
      <div
        onClick={() =>
          signIn("github", { callbackUrl: `${window.location.origin}/admin` })
        }
      >
        Sign in
      </div>
    );
  }

  return (
    <main className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-4">
      {dataInfo.map((info) => (
        <Card>
          <CardContent className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <MessageSquareIcon className="h-6 w-6" />
              <div className="font-semibold">{info.category}</div>
            </div>
            <Link href={`/admin/detail/${info.category}`}>
              <Button size="sm" variant="outline">
                Detail
              </Button>
            </Link>
          </CardContent>
          <CardContent className="p-0">
            <div>
              <div className={`bg-${info.color}-500 p-4 rounded-lg `}>
                <p className="text-xl font-semibold">Active Chats</p>
                <p className="text-3xl font-bold">{info.activeChats}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </main>
  );
}
function MessageSquareIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
