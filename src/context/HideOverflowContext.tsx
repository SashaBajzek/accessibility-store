import { createContext } from "react";

interface HideOverflowContextProps {
  setHideOverflow: (hideOverflow: boolean) => void;
}

export const HideOverflowContext = createContext<HideOverflowContextProps>({
  setHideOverflow: () => {},
});
