import styles from './Checkbox.styl'
import {observer} from 'mobx-react-lite'


function Checkbox({value, onChange, children}) {

  function onInputChange(event) {
    onChange(event.target.checked)
  }


  return <label className={styles.Checkbox}>
    <div className={styles.label}>
      {children}
    </div>

    <input
      className={styles.input}
      type="checkbox"
      checked={value}
      onChange={onInputChange}
    />

  </label>
}


export default observer(Checkbox)


