/* eslint-disable @typescript-eslint/no-explicit-any */
import { type FieldError, UseFormRegister } from "react-hook-form";

type Props = {
  className?: string;
  isRequired?: boolean;
  label: string;
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  error?: FieldError | undefined;
  id?: string;
  name?: string;
  register?: UseFormRegister<any>;
};

function EmailInput(props: Props) {
  const {
    id,
    name = "name",
    className,
    isRequired = false,
    label,
    defaultValue,
    value,
    placeholder,
    error,
    register,
  } = props;

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex flex-row gap-[5px] mb-2">
        <label htmlFor={id} className="text-[16px] font-bold text-text_bold">
          {label}
        </label>
        {isRequired && (
          <span className="text-[16px] font-bold text-red-500">*</span>
        )}
      </div>
      <input
        id={id}
        type="email"
        className="w-full h-[44px] bg-white rounded-[5px] drop-shadow-lg text-text_primary px-4 focus:outline-none mb-2"
        defaultValue={defaultValue}
        value={value}
        placeholder={placeholder}
        required={isRequired}
        {...register?.(name)}
      />
      {error && <div className="text-[14px] text-red-500">{error.message}</div>}
    </div>
  );
}

export default EmailInput;
