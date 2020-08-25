import styles from './WithdrawalFilter.styl'
import {observer} from 'mobx-react-lite'
import toMoveMonths from "../../../../filters/toMoveMonths";
import Checkbox from "../../../../components/Checkbox/Checkbox";
import DateRange from "../../../../components/DateRange/DateRange";


function WithdrawalFilter({filter, onChange}) {

  const {
    dateFrom, dateTo,
    accepted = false,
    denied = false
  } = filter

  function onDateFromChange(dateFrom) {
    onChange({...filter, dateFrom})
  }

  function onDateToChange(dateTo) {
    onChange({...filter, dateTo})
  }

  function onAcceptedChange(accepted) {
    onChange({...filter, accepted})
  }

  function onDeniedChange(denied) {
    onChange({...filter, denied})
  }


  return <div className={styles.WithdrawalFilter}>
    <Checkbox value={accepted} onChange={onAcceptedChange}>
      Одобрены
    </Checkbox>

    <Checkbox value={denied} onChange={onDeniedChange}>
      Отклонены
    </Checkbox>

    <DateRange
      startDate={dateFrom}
      onStartDateChange={onDateFromChange}
      endDate={dateTo}
      onEndDateChange={onDateToChange}
    />
  </div>
}


export default observer(WithdrawalFilter)


