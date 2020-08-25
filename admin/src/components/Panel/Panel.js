import styles from './Panel.styl'
import {observer} from 'mobx-react-lite'
import classNames from 'classnames'


function Panel({title = null, className, children, ...props}) {

  const panelClassName = classNames(styles.Panel, className)

  return <div className={panelClassName} {...props}>
    {title && <h4 className={styles.title}>{title}</h4>}
    {children}
  </div>
}


export default observer(Panel)


