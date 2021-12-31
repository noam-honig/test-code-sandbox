const buttons = ((b) => ({
  success: `${b}-success`,
  warning: `${b}-warning`
}))('btn btn')

export const Button = ({ label, variant, ...rest }) => (
  <button className={buttons[variant]} {...rest}>
    {label}
  </button>
)
