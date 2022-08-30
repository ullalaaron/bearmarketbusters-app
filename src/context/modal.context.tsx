import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

export interface IModalState {
  isModalOpen: boolean;
  componentName?: string;
  modalTitle?: string;
}
export interface IModalContext {
  modalState: IModalState;
  setModalState: Dispatch<SetStateAction<IModalState>>;
}
export const ModalContext = createContext<IModalContext | null>(null);

export const ModalProvider = ({ children }: any) => {
  const [modalState, setModalState] = useState<IModalState>({
    isModalOpen: false,
  });
  const value = { modalState, setModalState };
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
