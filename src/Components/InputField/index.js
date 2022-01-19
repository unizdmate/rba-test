import { useField } from "formik";
import React from "react";
import * as Bootstrap from "react-bootstrap";
import "./inputFieldStyles.css";

export const InputField = ({
  label,
  withoutFieldErrors,
  mandatory,
  ...props
}) => {
  const [field, meta] = useField(props);

  return (
    <>
      <Bootstrap.FormGroup>
        {label && (
          <Bootstrap.FormLabel>
            {label} {mandatory && <span className="required">*</span>}
          </Bootstrap.FormLabel>
        )}
        <Bootstrap.FormControl
          {...field}
          {...props}
          isInvalid={meta.touched && meta.error}
        />
        {!withoutFieldErrors && meta.touched && meta.error && (
          <div className="text-field-error">{meta.error}</div>
        )}
      </Bootstrap.FormGroup>
    </>
  );
};

export default InputField;
