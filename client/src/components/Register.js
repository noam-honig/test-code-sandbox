import { Form } from "components";

const inputs = [
  {
    label: "Name",
    name: "name",
    type: "text",
    minlength: 2
  },
  {
    label: "Age",
    name: "age",
    type: "number",
    min: 18,
    max: 65,
    step: 1
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    required: true
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    required: true
  },
  {
    label: "Confirm password",
    name: "confirmPassword",
    type: "password",
    required: true
  }
];

const validators = {
  name: (value) => value.length > 1,
  age: (value) => value > 17 && value < 66
};

const messages = {
  name: "Your name is too short!",
  age: `You're too young or too old!`
};

const initialData = {
  name: "",
  age: "",
  email: "",
  password: "",
  confirmPassword: ""
};

const formProps = {
  initialData,
  url: "/register",
  inputs,
  required: false,
  validators,
  messages,
  submitLabel: "Register"
};

export const Register = () => (
  <>
    <h3>Register</h3>
    <Form {...formProps} />
  </>
);
