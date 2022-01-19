import React from "react";
import { useField } from "formik";
import * as Bootstrap from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../InputField/inputFieldStyles.css";

export const DateTimeInputField = ({
  label,
  withoutFieldErrors,
  mandatory,
  ...props
}) => {
  const [field, meta, helpers] = useField(props);

  return (
    <>
      <Bootstrap.FormGroup style={{ display: "flex", flexDirection: "column" }}>
        {label && (
          <Bootstrap.FormLabel>
            {label} {mandatory && <span className="required">*</span>}
          </Bootstrap.FormLabel>
        )}
        <DatePicker
          className={`form-control ${
            meta.touched && meta.error && "is-invalid"
          }`}
          {...field}
          {...props}
          selected={field.value}
          onChange={(value) => helpers.setValue(value)}
          showPopperArrow={false}
          locale="hr-HR"
        />
        {!withoutFieldErrors && meta.touched && meta.error && (
          <div className="text-field-error">{meta.error}</div>
        )}
      </Bootstrap.FormGroup>
    </>
  );
};

export default DateTimeInputField;
