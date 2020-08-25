import styles from './Table.styl'
import {observer} from 'mobx-react-lite'
import classNames from 'classnames'


function Table({className, children}) {

  const tableClassName = classNames(
    styles.Table, className
  )

  return <table className={tableClassName}>
    <tbody>{children}</tbody>
  </table>
}


export default observer(Table)


