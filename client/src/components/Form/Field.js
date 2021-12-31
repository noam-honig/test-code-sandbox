const icons = ((i) => ({
  name: `${i}-person`,
  age: `${i}-person-fill`,
  email: `${i}-envelope`,
  password: `${i}-key`,
  confirmPassword: `${i}-key-fill`
}))("bi bi");

export const Field = ({ label, name, error, ...rest }) => (
  <div className="field">
    <label htmlFor={name} className="form-label">
      <i className={icons[name]}></i>
      <span>{label}</span>
    </label>
    <input name={name} id={name} className="form-control" {...rest} />
    <p className="text-danger">{error}</p>
  </div>
);
