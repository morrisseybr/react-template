export type ModalAction = {
  label: string;
  onClick: () => void;
};

type Props = {
  onClose: () => void;
  children: React.ReactNode;
  title: string;
  actions?: ModalAction[];
};

export const Modal = ({ onClose, children, title, actions }: Props) => {
  return <div className="flex flex-col min-w-[350px]">Modal</div>;
};
