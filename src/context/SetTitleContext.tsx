import { createContext } from "react";

interface SetTitleContextProps {
  setTitle: (title: string) => void;
}

export const SetTitleContext = createContext<SetTitleContextProps>({
  setTitle: (title: string) => {},
});
