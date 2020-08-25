import styles from './Button.styl'
import classNames from 'classnames'
import {observer} from 'mobx-react-lite'


function Button({onClick, red = false, green = false, ...props}) {

  const className = classNames(styles.Button, {
    [styles.__red]: red,
    [styles.__green]: green,
  })

  return <div
    className={className}
    onClick={onClick}
    {...props}
  />
}


export default observer(Button)
