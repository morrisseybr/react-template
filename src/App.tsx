import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import { useModal } from "./hooks/useModal";
import { ModalPortal } from "./components/Modal/ModalPortal";

export default () => {
  const modal = useModal();
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      {modal.isOpen && <ModalPortal />}
    </>
  );
};
