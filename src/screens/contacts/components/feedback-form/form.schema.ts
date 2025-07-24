import * as yup from "yup";

export const formSchema = yup.object({
  full_name: yup.string().required("this field is required"),
  phone: yup.string().required("this field is required"),
  email: yup.string().required("this field is required"),
  comment: yup.string().required("this field is required"),
});
