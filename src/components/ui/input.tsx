type Props = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: Props) {
  return (
    <input
      className={`bg-transparent border border-gray-700 h-9 px-1.5 rounded-md ${className}`}
      {...props}
    />
  );
}
