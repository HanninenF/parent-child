type TextInputProps = {
  className: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeHolder: string;
};

export default function ({
  className,
  name,
  onChange,
  value,
  placeHolder,
}: TextInputProps) {
  return (
    <input
      className={className}
      type="text"
      name={name}
      onChange={onChange}
      value={value}
      placeholder={placeHolder}
    />
  );
}
