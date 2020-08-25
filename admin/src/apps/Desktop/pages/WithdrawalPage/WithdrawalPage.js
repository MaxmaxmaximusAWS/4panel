import styles from './WithdrawalPage.styl'
import {observer} from 'mobx-react-lite'
import useLiveQuery from "../../../../hooks/useLiveQuery";
import {GET_WITHDRAWS} from "../../../../graphql/queries";
import toMoveMonths from "../../../../filters/toMoveMonths";
import WithdrawalFilter from "./WithdrawalFilter";
import WithdrawsTable from "./WithdrawsTable";


function WithdrawalPage() {

  const [filter, setFilter] = useState({
    dateFrom: toMoveMonths(new Date(), -6),
    dateTo: new Date(),
    accepted: false,
    denied: false,
  })

  const withdrawsList = useLiveQuery(GET_WITHDRAWS, {
    variables: filter
  })

  console.log('filter', filter)

  return <div className={styles.WithdrawalPage}>
    <WithdrawalFilter filter={filter} onChange={setFilter}/>

    {!withdrawsList && <div>Загрузка...</div>}
    {withdrawsList &&
      <WithdrawsTable withdrawsList={withdrawsList}
    />}

  </div>
}


export default observer(WithdrawalPage)


