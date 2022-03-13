import { createPortal } from "react-dom";
import { useModal } from "../../hooks/useModal";

export const ModalPortal = () => {
  const { renderContent: Modal } = useModal();
  const modalPortal = document.getElementById("modalPortal");
  if (!modalPortal) return null;
  return createPortal(
    <div className="h-screen w-screen fixed top-0 left-0 flex justify-center items-center bg-dark/30">
      <Modal />
    </div>,
    modalPortal
  );
};
