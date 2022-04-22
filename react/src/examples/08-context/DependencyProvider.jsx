import { createContext, useContext, useState } from "react";

// Application dependencies (services)
let logService;

// configure service implementations
if (process.env.NODE_ENV === "development") {
  logService = (message) => console.log(`LOG: ${message}`);
} else {
  // instantiate proper logging service for use in e.g. production environment
  logService = () => {};
}

const DependencyContext = createContext();

export function DependencyProvier({ children }) {
  const [shouldLog, setShouldLog] = useState(true);

  const value = { shouldLog, setShouldLog, logService };

  return (
    <DependencyContext.Provider value={value}>
      {children}
    </DependencyContext.Provider>
  );
}

export function useDependency() {
  return useContext(DependencyContext);
}
