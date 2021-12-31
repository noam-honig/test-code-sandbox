import { Form } from "components";

const inputs = [
  {
    label: "Email",
    name: "email",
    type: "email"
  },
  {
    label: "Password",
    name: "password",
    type: "password"
  }
];

const initialData = {
  email: "",
  password: ""
};

const formProps = {
  initialData,
  url: "/login",
  inputs,
  submitLabel: "Login"
};

export const Login = () => (
  <>
    <h3>Login</h3>
    <Form {...formProps} />
  </>
);
