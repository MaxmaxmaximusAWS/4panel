import styles from './Number.styl'
import {observer} from 'mobx-react-lite'
import Text from "../Text/Text";


function Number({value, onChange, ...props}) {

  function onTextChange(newValue) {
    newValue = +newValue

    if (!isNaN(newValue)) {
      onChange(newValue)
    } else {
      onChange(value)
    }
  }

  return <Text
    className={styles.Number}
    value={value}
    onChange={onTextChange}
    {...props}
  />
}


export default observer(Number)


