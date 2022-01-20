import React from "react";
import { useField } from "formik";
import * as Bootstrap from "react-bootstrap";
import "../InputField/inputFieldStyles.css";

export const NumericInputField = ({
  label,
  mandatory,
  withoutFieldErrors,
  ...props
}) => {
  const [field, meta] = useField(props);

  return (
    <>
      <Bootstrap.FormGroup>
        {label && (
          <Bootstrap.FormLabel>
            {label}
            {mandatory && <span className="required">*</span>}
          </Bootstrap.FormLabel>
        )}

        <Bootstrap.FormControl
          {...field}
          {...props}
          isInvalid={meta.touched && meta.error}
          onChange={(e) => {
            if (isNaN(Number(e.target.value))) {
              return;
            } else {
              field.onChange(e);
            }
          }}
        />
        {!withoutFieldErrors && meta.touched && meta.error && (
          <div className="text-field-error">{meta.error}</div>
        )}
      </Bootstrap.FormGroup>
    </>
  );
};

export default NumericInputField;
