import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { useAuth } from "../hooks/auth";
import { AuthRoutes } from "./auth.routes";
import { AppStackRoutes } from "./app.stack.routes";

export const Routes = () => {
  const { colaborador } = useAuth();
  return (
    <NavigationContainer>
      {colaborador.access_token ? <AppStackRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};
