import styles from './Tab.styl'
import classNames from "classnames";
import {observer} from 'mobx-react-lite'


function Tab({title = null, active, prev, next, children}) {

  const className = classNames(styles.Tab, {
    [styles.__active]: active,
    [styles.__prev]: prev,
    [styles.__next]: next,
  })

  return <div className={className}>
    {children}
  </div>
}


export default observer(Tab)


