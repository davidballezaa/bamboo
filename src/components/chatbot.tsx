import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { JSX, SVGProps } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export function Chatbot() {
  const { data: session, status } = useSession();
  const { email, name, image } = session?.user || {};

  return (
    <div className="min-h-screen bg-white">
      <nav className="flex items-center justify-between px-4 py-2 bg-white">
        <div className="flex items-center space-x-4">
          <span className="text-xl font-bold">Atrato</span>
          <SmileIcon className="text-purple-500" />
        </div>
      </nav>
      <header className="flex flex-col items-center justify-between px-4 py-12 md:flex-row">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-6xl font-bold">
            Compra hoy y paga a tu propio ritmo
          </h1>
          <Button className="mt-6">CREAR SOLICITUD</Button>
        </div>
        <div className="mt-12 md:mt-0">
          <img
            alt="Mobile phone"
            className="mx-auto"
            height="600"
            src="/placeholder.svg"
            style={{
              aspectRatio: "300/600",
              objectFit: "cover",
            }}
            width="300"
          />
        </div>
      </header>
      <section className="px-4 py-12">
        <div className="max-w-md mx-auto bg-white rounded-lg border border-gray-200 p-4 dark:border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Chat con Atrato</h2>
            <img
              alt="Avatar"
              className="rounded-full"
              height="32"
              src={image || ""}
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            />
          </div>
          <div className="mb-4">
            <ScrollArea className="h-96 w-full rounded-md border border-gray-200 p-4 space-y-4 bg-[#f0f0f0] bg-cover bg-center dark:border-gray-800">
              {status != "authenticated" ? (
                <p
                  className="flex items-center text-center "
                  onClick={() => signIn("github")}
                >
                  Sign in to chat
                </p>
              ) : (
                <>
                  <div className="flex items-center space-x-2">
                    <Avatar>
                      <AvatarImage
                        alt="Atrato bot"
                        src="https://media.licdn.com/dms/image/C4D0BAQHXl_XyT8nB4g/company-logo_200_200/0/1667865154349/atratopago_logo?e=2147483647&v=beta&t=LtEBU1IYu6ojylS96XaqNnRS8asGH7Xsj2KgIm03VJk"
                      />
                    </Avatar>
                    <div className="max-w-[300px] bg-gray-100 rounded-lg p-2">
                      <p className="text-sm">
                        ¡Hola! ¿En qué puedo ayudarte hoy?
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-end space-x-2">
                    <div className="max-w-[300px] bg-blue-100 rounded-lg p-2">
                      <p className="text-sm">
                        Quiero saber más sobre cómo pagar a mi propio ritmo.
                      </p>
                    </div>
                    <Avatar>
                      <AvatarImage alt="User profile photo" src={image || ""} />
                    </Avatar>
                  </div>
                </>
              )}
            </ScrollArea>
          </div>
          <div className="flex items-center space-x-2">
            <Input placeholder="Escribe tu mensaje aquí" type="text" />
            <Button variant="secondary">Enviar</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function SmileIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  );
}

function PanelTopCloseIcon(
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <line x1="3" x2="21" y1="9" y2="9" />
      <path d="m9 16 3-3 3 3" />
    </svg>
  );
}
