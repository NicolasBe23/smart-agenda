interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...props }: Props) {
  return (
    <button
      className="bg-gray-200 h-9 px-4 rounded-md text-black hover:bg-gray-400 duration-200 min-w-fit"
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}
