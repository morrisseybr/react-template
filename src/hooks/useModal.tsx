import { createContext, ReactNode, useContext, useState } from "react";

type ModalContext = {
  isOpen: boolean;
  renderContent: () => JSX.Element | null;
  openModal: (content: JSX.Element) => void;
  closeModal: () => void;
};

const defaultModalContext: ModalContext = {
  isOpen: false,
  renderContent: () => null,
  openModal: () => {},
  closeModal: () => {},
};

const useModalContext = (): ModalContext => {
  const [content, setContent] = useState<JSX.Element | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const renderContent = (): JSX.Element | null => {
    return content;
  };

  const openModal = (content: JSX.Element) => {
    if (isOpen) return;
    setContent(content);
    setIsOpen(true);
  };
  const closeModal = () => {
    setContent(null);
    setIsOpen(false);
  };

  return {
    isOpen,
    renderContent,
    openModal,
    closeModal,
  };
};

const Context = createContext(defaultModalContext);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const modalContext = useModalContext();
  return <Context.Provider value={modalContext}>{children}</Context.Provider>;
};

export const useModal = () => {
  return useContext(Context);
};
