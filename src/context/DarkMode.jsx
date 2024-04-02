import { createContext, useReducer } from "react";

const DarkMoodeContext = createContext();

const initalState = { dark: true };

function reducer(state, action) {
  switch (action.type) {
    case "darkModes":
      return { ...state, dark: action.payload };
    default:
      throw new Error("Unknown Action Type");
  }
}
function DarkMode({ children }) {
  const [{ dark }, dispatch] = useReducer(reducer, initalState);

  function handleDarkMode() {
    dispatch({ type: "darkModes" });
  }

  const value = { dark, handleDarkMode, dispatch };

  return (
    <DarkMoodeContext.Provider value={value}>
      {children}
    </DarkMoodeContext.Provider>
  );
}

export { DarkMode, DarkMoodeContext };
