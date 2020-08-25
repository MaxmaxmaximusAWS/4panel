import styles from './TabTitle.styl'
import {observer} from 'mobx-react-lite'
import classNames from 'classnames'


function TabTitle({active, prev, next, title, onClick}) {

  const className = classNames(styles.TabTitle, {
    [styles.__active]: active,
    [styles.__prev]: prev,
    [styles.__next]: next,
  })

  return <div className={className} onClick={onClick}>
    {title}
  </div>
}


export default observer(TabTitle)


