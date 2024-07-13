import { createContext } from 'react';

// Define the shape of your context value
export interface ColorModeContextType {
  toggleColorMode: () => void;
}

// Create the context with a default value
const ColorModeContext = createContext<ColorModeContextType>({
  toggleColorMode: () => {},
});

export default ColorModeContext;
