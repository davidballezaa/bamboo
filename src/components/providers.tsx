"use client";

import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

type ProvidersProps = {
  children: ReactNode;
};

// Wrap the page in the session provider
const Providers = ({ children }: ProvidersProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Providers;