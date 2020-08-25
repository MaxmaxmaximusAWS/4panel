import styles from './DateRange.styl'
import {observer} from 'mobx-react-lite'
import DatePicker from "../DatePicker/DatePicker";


function DateRange(
  {
    startDate, onStartDateChange,
    endDate, onEndDateChange,
    startLabel = 'С', endLabel = 'По',
    children
  }
) {


  return <div className={styles.DateRange}>

    <div className={styles.label}>
      {children}
    </div>

    <div className={styles.inputs}>
      <DatePicker
        selected={startDate}
        onChange={onStartDateChange}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      >
        {startLabel}
      </DatePicker>


      <DatePicker
        selected={endDate}
        onChange={onEndDateChange}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      >
        {endLabel}
      </DatePicker>

    </div>

  </div>

}


export default observer(DateRange)


