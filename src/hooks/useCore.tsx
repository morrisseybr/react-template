import { createContext, ReactNode, useContext } from "react";

type CoreContext = any;

const defaultCoreContext: CoreContext = {};

const Context = createContext(defaultCoreContext);

export const CoreProvider = ({
  children,
  value,
}: {
  children: ReactNode;
  value?: typeof defaultCoreContext;
}) => {
  return (
    <Context.Provider value={value || defaultCoreContext}>
      {children}
    </Context.Provider>
  );
};

export const useCore = () => {
  return useContext(Context);
};
