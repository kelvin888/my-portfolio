import React from "react";
interface Props {
  type?: string;
  className?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  label?: string;
}
const TextField = (props: Props) => {
  let {
    type,
    className,
    id,
    name,
    placeholder,
    required,
    error,
    label,
  } = props;
  return (
    <div className="form-group">
      <label className={label ? "d-block" : "d-none"} htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        className={className}
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        data-error={error}
      />
      {error && <div className="help-block with-errors">{error}</div>}
    </div>
  );
};

TextField.defaultProps = {
  type: "text",
  className: "form-control",
  id: "",
  name: "",
  placeholder: "",
  required: false,
  error: "",
  label: "",
};

export default TextField;
