/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormRegister, type FieldError } from "react-hook-form";

type SelectOption = {
  label: string;
  value?: string;
};

type Props = {
  className?: string;
  isRequired?: boolean;
  label: string;
  options: Array<SelectOption | string>;
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  error?: FieldError | undefined;
  id?: string;
  name?: string;
  register?: UseFormRegister<any>;
};

const toOption = (option: SelectOption | string) => {
  if (typeof option === "string") {
    return { label: option, value: option };
  }
  return { label: option.label, value: option.value ?? option.label };
};

function SelectInput(props: Props) {
  const {
    id,
    name = "name",
    register,
    className,
    isRequired = false,
    label,
    options,
    placeholder,
    defaultValue,
    value,
    error,
  } = props;

  const normalizedOptions = options.map(toOption);

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
      <select
        id={id}
        className="w-full h-[44px] bg-white rounded-[5px] drop-shadow-lg text-text_primary px-4 focus:outline-none mb-2"
        defaultValue={defaultValue ?? ""}
        value={value}
        {...register?.(name)}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {normalizedOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <div className="text-[14px] text-red-500">{error.message}</div>}
    </div>
  );
}

export default SelectInput;
