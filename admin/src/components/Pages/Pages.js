import styles from './Pages.styl'
import {Switch, Route} from "react-router-dom"
import {observer} from 'mobx-react-lite'


function Pages({pages}) {

  return <div className={styles.pages}>
    <Switch>
      {pages.map(({url, Page}) => (
        <Route key={url} path={url} exact={true}>
          <Page/>
        </Route>
      ))}
    </Switch>
  </div>
}


export default observer(Pages)
