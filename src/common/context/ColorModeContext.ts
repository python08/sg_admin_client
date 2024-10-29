import { createContext } from "react";

export interface ColorModeContextType {
  toggleColorMode: () => void;
}

// Create the context with a default value
const ColorModeContext = createContext({
  toggleColorMode: () => {},
});
