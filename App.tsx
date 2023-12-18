import React from "react";
import AppNavigation from "./src/navigation/App";
import { DataProvider } from "./src/hooks";

export default function App() {
  return (
      <DataProvider>
        <AppNavigation />
      </DataProvider>
  );
}
