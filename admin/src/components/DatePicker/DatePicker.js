import styles from './DatePicker.styl'
import "react-datepicker/dist/react-datepicker-cssmodules.min.css"
import {observer} from 'mobx-react-lite'
import ReactDatePicker from 'react-datepicker'


function DatePicker({children, ...props}) {

  return <div className={styles.DatePicker}>
    <div className={styles.label}>{children}</div>

    <ReactDatePicker
      className={styles.input}
      dateFormat="dd/MM/yyyy"
      {...props}>
    </ReactDatePicker>

  </div>
}


export default observer(DatePicker)


