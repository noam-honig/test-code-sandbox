import { errorMessagesServer } from "./validators";

export const Error = ({ status }) => (
  <div className="text-danger">
    <p>{errorMessagesServer[status]}</p>
  </div>
);
