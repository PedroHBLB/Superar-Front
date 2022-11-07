import React, { ReactNode } from "react";

import { AuthProvider } from "./auth";
import { RequestProvider } from "./requests";

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  return (
    <AuthProvider>
      <RequestProvider>{children}</RequestProvider>
    </AuthProvider>
  );
}

export { AppProvider };
