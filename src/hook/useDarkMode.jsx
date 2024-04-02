import { useContext } from "react";
import { DarkMoodeContext } from "../context/DarkMode";

export default function useDarkMode() {
  const context = useContext(DarkMoodeContext);
  if (context === undefined) throw new Error("Context is Out of Range");
  return context;
}
