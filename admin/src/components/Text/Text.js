import styles from './Text.styl'
import {observer} from 'mobx-react-lite'


function Text({value, onChange, children}) {

  function onInputChange(event) {
    onChange(event.target.value)
  }

  return <input
    className={styles.Text}
    placeholder={children}
    type="text"
    value={value}
    onChange={onInputChange}
  />
}


export default observer(Text)


