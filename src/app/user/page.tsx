"use client"
import { Chatbot } from "@/components/chatbot";
import { useSession } from "next-auth/react";

export default function Home() {
    const { data: session, status } = useSession();
    return (
        <Chatbot />
    );
}