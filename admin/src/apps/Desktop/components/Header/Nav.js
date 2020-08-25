import styles from './Nav.styl'
import {observer} from 'mobx-react-lite'
import NavLink from "./NavLink";


function Nav({pages}) {

  const filteredPages = pages.filter(page => page.name)


  return <div className={styles.Nav}>
    {filteredPages.map(page =>

      <NavLink key={page.url} page={page}>
        {page.name}
      </NavLink>
    )}
  </div>
}


export default observer(Nav)


