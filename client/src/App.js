import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch
} from 'react-router-dom'

import { Home, Auth } from 'pages'

const routes = [
  {
    name: 'Home',
    path: '/',
    exact: true,
    component: Home
  },
  {
    name: 'Auth',
    path: '/auth',
    component: Auth
  }
]

export const App = () => (
  <div className='container d-flex flex-column align-items-center'>
    <Router>
      <nav className='navbar navbar-light bg-light'>
        <ul className='nav'>
          {routes.map(({ name, path }) => (
            <li className='nav-item' key={name}>
              <NavLink to={path} className='nav-link' activeClassName='active'>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <h1>useSimpleForm Custom Hook</h1>
      <Switch>
        {routes.map(({ name, ...rest }) => (
          <Route key={name} {...rest} />
        ))}
      </Switch>
    </Router>
  </div>
)
