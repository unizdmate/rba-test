import React from "react";
import * as Formik from "formik";

export const Form = (props) => {
  return <Formik.Form noValidate>{props.children}</Formik.Form>;
};

export default Form;
