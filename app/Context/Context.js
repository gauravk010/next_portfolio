"use client"
import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = (props) => {
  const [IsOpen, setIsOpen] = useState(false);

  return (
    <Context.Provider value={{ IsOpen, setIsOpen }}>
      {props.children}
    </Context.Provider>
  );
};
