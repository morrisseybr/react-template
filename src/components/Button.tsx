type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

export const Button = ({ children, onClick }: Props) => {
  const className =
    "p-2 border rounded-lg text-white bg-blue-500 hover:bg-blue-600 hover:transition-colors active:bg-red-600";

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
