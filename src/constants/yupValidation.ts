import * as yup from "yup";

const validationSchema = {
  url: yup
    .string()
    .trim()
    .required("Url is required")
    .matches(
      /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/[\w.-]*)*\/?$/i,
      "This is not a Url"
    ),
};

export default validationSchema;
