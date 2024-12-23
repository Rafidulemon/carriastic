import { type ChangeEvent } from "react";
import { type FieldError } from "react-hook-form";

type Props = {
  className?: string;
  isRequired?: boolean;
  label?: string;
  id?: string;
  error?: FieldError | undefined;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const FileInput = (props: Props) => {
  const {
    className,
    isRequired = false,
    label,
    id,
    error,
    onChange,
  } = props;

  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <div className="flex flex-row gap-[5px] mb-2">
          <label htmlFor={id} className="text-[16px] font-bold">
            {label}
          </label>
          {isRequired && (
            <span className="text-[16px] font-bold text-red-500">*</span>
          )}
        </div>
      )}
      <input
        id={id}
        type="file"
        className="w-full h-[44px] focus:outline-none bg-white p-2 rounded-[5px] drop-shadow-lg"
        onChange={onChange}
      />
      {error && <div className="text-[14px] text-red-500">{error.message}</div>}
    </div>
  );
};

export default FileInput;