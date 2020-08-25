import styles from './NavLink.styl'
import {observer} from 'mobx-react-lite'
import {NavLink as NavLinkRouter, useRouteMatch} from 'react-router-dom'
import classNames from 'classnames'


function NavLink({page, children}) {

  const {url, match} = page

  const matches = useRouteMatch({
    path: match,
    strict: true,
    sensitive: true
  })
  
  const className = matches
    ? classNames(styles.NavLink, styles.__active)
    : styles.NavLink


  return <NavLinkRouter
    className={className}
    activeClassName={styles.__active}
    exact={true}
    to={url}>
    {children}
  </NavLinkRouter>
}


export default observer(NavLink)


