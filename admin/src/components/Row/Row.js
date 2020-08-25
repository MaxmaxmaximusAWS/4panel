import styles from './Row.styl'
import {observer} from 'mobx-react-lite'
import classNames from 'classnames'


function Row({className, children, ...props}) {

  const rowClassName = classNames(styles.Row, className)

  return <tr className={rowClassName} {...props}>
    {children}
  </tr>
}


export default observer(Row)


