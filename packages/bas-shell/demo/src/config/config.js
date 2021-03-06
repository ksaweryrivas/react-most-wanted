import React, { lazy } from 'react'
import routes from './routes'
import { isAuthorised } from '../utils/auth'
import getMenuItems from './menuItems'
import LandingPage from '../pages/LandingPage/LandingPage'

const Loading = () => <div>Loading...</div>

const config = {
  initial_state: {},
  auth: {
    isAuthenticated: isAuthorised,
    signInURL: '/signin',
  },
  routes,
  getMenuItems,
  pages: {
    LandingPage: LandingPage,
    PageNotFound: lazy(() => import('../pages/PageNotFound/PageNotFound')),
  },
  components: {
    Menu: lazy(() => import('../containers/Menu/Menu')),
    Loading,
  },
  containers: {
    AppContainer: ({ children }) => (
      <div>App Container {children} App Container</div>
    ),

    LayoutContainer: ({ children }) => (
      <div>Layout Container {children} Layout Container</div>
    ),
  },
}

export default config
