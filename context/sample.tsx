
import { useContext, createContext, useState, ReactNode, Children } from "react";


type CountContextType = {
count: number;
toggleCount: () => void;
};

const CountContext = createContext<CountContextType | undefined>(undefined);

export const useCount = () => {
  const context = useContext(CountContext)
  if (!context) {
    throw Error("Context Error");

  }
  return context;
};

export const ContextProvider = ( { children } : {children: ReactNode}) => {
  const [count, setCount] = useState(0);

  const toggleCount = () => {
    setCount(count + 1);
    localStorage.setItem("count", count.toString())
  }

  return ( 
    <CountContext.Provider value={{count, toggleCount}}>
      {children}
    </CountContext.Provider >
  );

};



