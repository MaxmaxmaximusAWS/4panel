import styles from './UsersFiltersPanel.styl'
import {observer} from 'mobx-react-lite'
import DateRange from "../../../../components/DateRange/DateRange";
import Checkbox from "../../../../components/Checkbox/Checkbox";


function UsersFiltersPanel({filters, onChange}) {

  const {registeredFrom, registeredTo, deposited} = filters

  function onStartDateChange(registeredFrom) {
    onChange({...filters, registeredFrom})
  }

  function onEndDateChange(registeredTo) {
    onChange({...filters, registeredTo})
  }

  function onDepositedChange(deposited) {
    onChange({...filters, deposited})
  }


  return <div className={styles.UsersFiltersPanel}>

    <DateRange
      startDate={registeredFrom}
      onStartDateChange={onStartDateChange}
      endDate={registeredTo}
      onEndDateChange={onEndDateChange}
      startLabel={'Регистрация с'}
      endLabel={'По'}>
    </DateRange>

    <Checkbox value={deposited} onChange={onDepositedChange}>
      Есть депозиит
    </Checkbox>

  </div>
}


export default observer(UsersFiltersPanel)


