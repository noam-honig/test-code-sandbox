import { Login, Register } from 'components'
import { useState } from 'react'

export const Auth = () => {
  const [login, setLogin] = useState(true)

  return (
    <>
      <h2>Auth Page</h2>
      {login ? <Login /> : <Register />}
      <button className='btn btn-link mt-2' onClick={() => setLogin(!login)}>
        {login ? 'Register' : 'Login'}
      </button>
    </>
  )
}
